---
sidebar_label: Deno (Clarinet tests)
toc_max_heading_level: 4
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Clarinet Unit Tests

If you're using [Clarinet](https://github.com/hirosystems/clarinet) during contract development, you're probably using `clarinet test` to write unit tests for your contracts. Clarigen is designed to work alongside Clarinet; in fact, Clarigen is built on top of Clarinet!

## Getting started

To use Clarigen in Deno, make sure you've followed the [getting started](./getting-started) guide. Additionally, you'll need to specify [`deno.output` configuration](./configuration#deno). In these examples, it's assumed that the Clarigen auto-generated code is at `./tests/clarigen.ts`.

```toml title="Clarigen.toml"
[deno]
output = "tests/clarigen.ts"
```

## Importing Clarigen in Deno

Clarigen's Deno package is published to [deno.land](https://deno.land), so you can import Clarigen from there:

```ts
import * as Clarigen from "https://deno.land/x/clarigen/src/index.ts";
```

In the above example, a version of the package isn't specified, so the latest version will be used. As a best practice, you should specify the version of the package you're using. When getting setup, visit the [Clarigen package page](https://deno.land/x/clarigen) to see the latest version. You can learn more in the [Deno docs for managing dependencies](https://deno.land/manual/examples/manage_dependencies).

## Example

Here's an example of a basic (but complete) contract test using Clarigen and Clarinet:

```ts title="tests/contract_test.ts"
// import from the Clarigen package:
import { factory, txOk } from "https://deno.land/x/clarigen/src/index.ts";
// import from your auto-generated code:
import { simnet } from "./clarigen.ts";
import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";

// helper function to "setup" the test environment
const { contracts, test } = factory(simnet);

// "counter" is the name of our contract
const { counter } = contracts;

test({
  name: "Counter test",
  fn(chain, accounts) {
    // similar to `accounts.get('wallet_1').address`;
    const alice = accounts.addr("wallet_1");

    // mine a block with a single transaction
    // similar to `const [receipt] = chain.mineBlock(...).receipts;`
    const receipt = chain.mineOne(txOk(counter.increment(2), alice));
    assertEquals(receipt.value, 3n);

    // mine a block with multiple transactions
    const receipts = chain.mine(
      txOk(counter.increment(2), alice),
      txOk(counter.decrement(1), alice)
    );
    const [increment, decrement] = receipts;
    assertEquals(decrement.value, 4n);

    // Call a read-only function
    // similar to Clarinet's `chain.callReadOnlyFn(...).expectOk()`
    const currentCount = chain.rovOk(counter.readCounter());
    assertEquals(currentCount, 3n);
  },
});
```

## Differences between Clarigen and Clarinet

In Clarinet, the result of a mined block isn't strongly typed. When using Clarigen, a transaction receipt's `value` is a native JavaScript type, which is strongly typed. Otherwise, the other properties of a transaction receipt (like `events`) are the same.

Additionally, to ensure strong typing, transactions are specified as 'spread arguments' instead of an array.

```ts
// in Clarinet:
const block = chain.mineBlock([
  Tx.contractCall(...)
]);
block.receipts[0].value; // string, like `(ok u4)`

// in Clarigen:
const block = chain.mineBlock(
  txOk(contract.fn(...), sender)
);
block.receipts[0].value; // native type, like `4n`, `true`, "string", etc.
```

## API

### `contractsFactory`

`contractsFactory` is a helper function that consumes your "simnet" information, which includes all of your contracts and your accounts from `settings/Devnet.toml`. Usually, you'll provide the `simnet` variable that is generated by Clarigen.

It returns an object where each key is the name of one of your contracts, and the value for that key is a 'contract factory' to let you invoke function calls.

For example, assume your project has two contracts, named "counter" and "token":

```ts
const { counter, token } = contractsFactory(simnet);

// generate a contract call payload:
counter.increment(2);
// includes a full identifier for the contract:
token.identifier;
// includes the raw ABI (interface) of that contract
token.fungible_tokens[0].name;
```

### `factory`

If you're using `Clarinet.test` inside your test files to define tests, Clarigen provides a handy helper that provides a similar API:

```ts title="tests/contract_test.ts"
// import from the Clarigen package:
import { factory } from "https://deno.land/x/clarigen/src/index.ts";
// import from your auto-generated code:
import { simnet } from "./clarigen.ts";

const { contracts, test } = factory(simnet);

test({
  name: "My Clarigen test",
  fn(chain, accounts) {
    // tests go here:
  },
});
```

### `chain`

Clarigen provides a `Chain` interface that wraps around Clarinet's `Chain` API, while providing extra helpers and type-safe functions.

### Transaction builders (`tx`, `txOk`, and `txErr`) {#tx-builders}

When creating transactions in your unit tests, they must be wrapped in a "transaction builder". Each of these builders accepts two arguments: a contract call and a sender.

Using `txOk` and `txErr` are a way to easily specify the "expected" outcome of the transaction. When writing tests, you usually are expecting either `ok` or `err`, so these helpers are what you should usually use. When using these builders, if the transaction results in the opposite type, an error will be thrown. Additionally, these helpers automatically "pull" the resulting `value` from the response of the transaction and are automatically typed.

As an example, imagine the following Clarity function:

```clarity
(define-public (fn (is-ok bool))
  (if is-ok
    (ok true)
    (err u1)
  )
)
```

Here's how you would use that:

```ts title=tests/contract_test.ts
// expect ok, `receipt.value` is type `boolean`
txOk(contract.fn(true), sender);
// expect err, `receipt.value` is type `bigint`
txErr(contract.fn(false), sender);

// these will throw an error:
txOk(contract.fn(false), sender);
txErr(contract.fn(true), sender);

// `receipt.value` is type `Response<boolean, bigint>`
tx(contract.fn(true), sender);
```

### `chain.mineBlock`

Similar to Clarinet's `chain.mineBlock`, except with strict types. Transactions must be built with [transaction builders](#tx-builders).

### `chain.mine`

`chain.mine` is shorthand for `chain.mineBlock(...).receipts`.

```ts
// these two are the same
chain.mineBlock(...).receipts;
chain.mine(...);
```

### `chain.mineOne`

Shorthand for `chain.mine(...).receipts[0]`;

```ts
// these two are the same
chain.mine(...).receipts[0];
chain.mineOne(...);
```

### `chain.tx`, `chain.txOk`, and `chain.txErr`

Shorthand for `chain.mineOne(tx|txOk|txErr(...))`.

```ts
// these two are the same:
chain.mineOne(txOk(contract.fn(), sender));
chain.txOk(contract.fn(), sender);
```

### Read-only function calls

Clarigen provides helper functions to make strongly typed read-only function calls.

#### `chain.ro`

Similar to Clarinet's `chain.callReadOnlyFn`, but with stronger types on the resulting value.

```ts
// In Clarinet:
const result = chain.callReadOnlyFn(...);
result.value; // string, like `(ok u4)`

// highlight-start
// In Clarigen
const result = chain.ro(contract.fn());
result.value; // native type, like `4n`, `true`, or `"string"`
```

#### `chain.rov`

Shorthand for `chain.ro(...).value`

```ts
// these two are the same:
chain.ro(contract.getNum()).value;
chain.rov(contract.getNum());
```

#### `chain.rovOk` and `chain.rovErr`

When the result of a read-only function call is a `response`, these helpers assert that the response is either `ok` or `err` and return the inner value. These function very similarly to `txOk` and `txErr`.

```ts
// assume response type is `(response bool uint)`

// returns `boolean`
chain.rovOk(contract.fn(true));
// returns `bigint`
chain.rovErr(contract.fn(false));
```

### Accounts

Clarigen compiles your Devnet accounts ahead of time. This allows you to access your types with static type safety.

You can access your accounts in two ways: as an object, and as a `Map`. The `Map` interface is included to provide an API most similar to Clarinet's API.

<Tabs>

<TabItem label="object" value="object">

```ts
// import it directly from your Clarigen types:
import { accounts } from "./clarigen.ts";

const alice = accounts.wallet_1.address;
const deployer = accounts.deployer.address;
```

</TabItem>

<TabItem label="Map" value="map">

```ts
import { factory, txOk } from "https://deno.land/x/clarigen/src/index.ts";
import { simnet } from "./clarigen.ts";

const { test } = factory(simnet);

test({
  name: "my test",
  fn(chain, accounts) {
    const alice = accounts.get("wallet_1").address;
    // or shorthand version:
    const deployer = accounts.addr("deployer");
  },
});
```

</TabItem>

</Tabs>

### `Chain.fromSimnet`

Some developers prefer to use a different test runner than the `Clarinet.test` interface. In that situation, you can use `Chain.fromSimnet` to instantiate the chain manually.

```ts title=tests/bdd_test.ts
import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { accounts, simnet } from "./clarigen.ts";
import {
  Chain,
  contractsFactory,
  factory,
  txOk,
} from "https://deno.land/x/clarigen/src/index.ts";
import {
  beforeAll,
  describe,
  it,
  run,
} from "https://deno.land/x/dspec@v0.2.0/mod.ts";

const { counter } = contractsFactory(simnet);

describe("BDD-style testing", () => {
  let chain: Chain;
  beforeAll(() => {
    chain = Chain.fromSimnet(simnet).chain;
  });
  const alice = accounts.wallet_1.address;

  it("can increment", () => {
    const receipt = chain.mineOne(txOk(counter.increment(2), alice));
    const count = chain.rovOk(counter.readCounter());
    assertEquals(count, 3n);
    assertEquals(receipt.value, 3n);
  });

  it("can decrement", () => {
    const count = chain.rovOk(counter.readCounter());
    assertEquals(count, 3n);
    const receipt = chain.mineOne(txOk(counter.decrement(1n), alice));
    assertEquals(receipt.value, 2n);
    assertEquals(chain.blockHeight, 3);
  });
});

run();
```
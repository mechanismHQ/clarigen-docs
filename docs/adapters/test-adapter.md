---
sidebar_position: 2
sidebar_label: Test
title: Clarigen Test Adapter
toc_max_heading_level: 4
---

# Testing Clarity contracts with Clarigen

`@clarigen/test` is a tool for running unit tests on Clarity smart contracts in a TypeScript environment.

For project setup instructions, check out the [Clarigen setup guide](https://github.com/hstove/clarigen#setup-guide).

This tool is agnostic to whichever testing framework you like to use. You're free to use Jest, Mocha, or whatever node.js testing library you enjoy.

Under the hood, this package uses the [`@clarigen/native-bin`](https://github.com/obylabs/clarigen/tree/main/packages/native-bin) package. At a lower level, the `clarity-cli` binary (from [`stacks-blockchain`](https://github.com/blockstack/stacks-blockchain)) is used to simulate a Stacks blockchain environment, especially for tests.

All code samples are taken from the [Clarigen counter example](https://github.com/hstove/clarigen-counter-example) repository.

You can also see some real-world usage to better understand how to use it:

- [CounterCoin unit tests](https://github.com/hstove/clarigen-counter-example/blob/main/test/counter.test.ts)
- [Fungible token unit tests](https://github.com/hstove/stacks-fungible-token/blob/main/test/token.test.ts)

## Quick Example

```ts
import { TestProvider } from "@clarigen/test";
import { contracts, CounterContract, accounts } from "../src/clarigen";

let counter: CounterContract;
let t: TestProvider;

const alice = accounts.deployer.address;

beforeAll(async () => {
  const { deployed, provider } = await TestProvider.fromContracts(contracts, {
    accounts,
  });
  counter = deployed.counter.contract;
  t = provider;
});

test("can call a read-only function", async () => {
  const result = await t.ro(counter.getCounter());
  expect(result.value).toEqual(0n);
});

test("can call a public function", async () => {
  const result = await t.txOk(counter.increment(), alice);
  expect(result.value).toEqual(1n);
});

test("can get updated value of our counter", async () => {
  const value = await t.rov(counter.getCounter());
  expect(value).toEqual(1n);
});
```

## Importing Clarigen packages and modules

When writing tests, you'll need to import each contract that you wish to deploy and use. Clarigen automatically generates and exports a few variables for each of your Clarity contracts. The one's you'll typically use are:

- `${contractName}Info` - An object that includes the contract file path and deployer address
- `${contractName}Contract` - a Typescript interface that represents the methods available on your contract

You'll also want to import `TestProvider` from `@clarigen/test`. You might also end up importing a few helper methods, which are explained later.

```ts
import { TestProvider } from "@clarigen/test";

// Make sure you import from the `outputDir` specified in clarigen.config.json
import {
  CounterContract,
  CounterCoinContract,
  contracts,
} from "../src/clarigen";
```

## Deploying contracts

You'll need to deploy contracts before running your tests. Typically, this is done using the `beforeAll` hook in Jest, or similar in your framework.

`TestProvider` includes a `fromContracts` method that accepts an object of your contracts.

**Important**: the order in which you specify contracts is important. Often times, one contract will depend on a different contract. Contracts are deployed in the order of which they are specified.

```ts
// `contracts` is imported from '../src/clarigen'
const { deployed, provider } = await TestProvider.fromContracts(contracts);
```

The result of `TestProvider.fromContracts` is an object with:

- `deployed`: an object that includes all of your contract interfaces. This result is what you'll use to make contract call payloads. The keys of this object are the camel-cased names of your contracts, as specified in your `Clarinet.toml` file. So, `my-token` will be `myToken`. Each key/value pair in `deployed` has a value with a `contract` and `identifier` property. `contract` is the actual object you'll use to make contract calls, and `identifier` is a `string` that indicates the deployed contract's address. This is mainly useful for using the contract address as a trait argument.
- `provider`: an instance of `TestProvider` which you'll use to interact with the ClarityVM that runs your contracts.

```ts
const counter = deployed.counter.contract;

// calling contract functions:
await counter.getCounter();
```

You can automatically import and include your default account balances that are indicated in `Devnet.toml`. By default, the deployer of each of your contracts is the `deployer` account in `Devnet.toml`.

```ts
import { accounts, contracts } from "../src/clarigen";

await TestProvider.fromContracts(contracts, { accounts });
```

## Read-only methods

Read-only methods do not change state, so they can be called without making a transaction.

In the [counter example](https://github.com/hstove/clarigen-counter-example), there is the read-only method `get-counter`:

```clarity
(define-data-var counter int 0)

(define-read-only (get-counter)
  (var-get counter))
```

Clarigen will automatically expose a JS-friendly method for calling this function and getting the result. Clarigen converts all method names from kebab-case (`get-counter`) to camelCase (`getCounter`).

```ts
const value = await provider.rov(counter.getCounter());
console.log(value); // prints "0n"
```

For all Clarity types, Clarigen converts values into JS-friendly values, and all methods are strongly typed to TypeScript types. In the above example, `getCounter` returns a `bigint`.

Sometimes, read-only methods return a `response`. A `response` is a value that can be either "ok" or an error. The type returned for `ok` and `err` are different. Clarigen returns a [neverthrow](https://github.com/supermacro/neverthrow) type for read-only functions that return a `response`. Refer to the neverthrow docs for full usage.

For an example, here is a read-only function that returns a `response`:

```clarity
(define-read-only (check-even (x uint))
  (if (is-eq (mod x 2) 0)
    (ok x)
    (err false))
)
```

If the response is `ok`, it returns a number, otherwise it returns a boolean for `err`. Here's what that looks like with Clarigen:

```ts
const response = await provider.rov(myContract.checkEven(3));
if (response.isOk) {
  console.log("Ok", response.value); // prints "Ok 3n"
} else {
  console.log("Err", response.value); // prints "Err false"
}
```

### `rov`

`rov`, short for "read-only value", calls a read-only function and returns the value of that function call's result.

### `rovOk`

Similar to `rov`, this is a helper function for functions that return a `response` type. When used, this will return the `Ok` value of the function call. If the result is an `Err`, this function will throw.

```ts
const okVal = await provider.rovOk(myContract.checkEven(4)); // returns 4n

// equivalent to:
const response = await provider.rov(myContract.checkEven(4));
const val = response._unsafeUnwrap();
```

### `rovErr`

The opposite of `rovOk`, this helper function returns the `Err` value of a response. If the response is `Ok`, the function will throw.

```ts
const errVal = await provider.rovErr(myContract.checkEven(3)); // returns false

// equivalent to:
const response = await provider.rov(myContract.checkEven(3));
const val = response._unsafeUnwrapErr();
```

### `ro`

Short for "read-only" this calls a read-only function and returns the result, along with various metadata about the function call. This is especially helpful if you want to check the logs or costs of your function call.

For this example, here's a read-only function that calls `print`:

```clarity
(define-read-only (echo-with-logs (val (string-ascii 33)))
  (begin
    (print val)
    val
  )
)
```

```ts
const result = await provider.ro(myContract.echoWithLogs("hello"));
result.value; // 'hello'
result.logs; // ['hello']
result.costs.runtime; // 15000
result.clarityValue; // StringAsciiCV('hello');
```

The Typescript type of the response of `ro` is:

```ts
export interface ReadOnlyResult<T> {
  value: T;
  clarityValue: ClarityValue;
  logs: string[];
  costs: {
    read_count: number;
    read_length: number;
    runtime: number;
    write_count: number;
    write_length: number;
  };
}
```

## Public functions

Public functions are callable by anyone, and are invoked by making a contract-call transaction. In a test environment, we are simulating a full blockchain, but the behavior is the same.

Each of the functions related to making a transaction requires two arguments: the contract call payload, and the sender address.

The functions return a "receipt", which varies for an `Ok` vs an `Err` response. Here are those types:

```ts
export interface PublicResultBase<T> {
  value: T;
  response: ResponseCV;
  isOk: boolean;
  logs: string[];
  costs: Costs;
}

export interface PublicResultErr<T> extends PublicResultBase<T> {
  value: T;
  isOk: false;
}

export interface PublicResultOk<T> extends PublicResultBase<T> {
  value: T;
  isOk: true;
  events: CoreNodeEvent[];
  assets: ResultAssets;
  prints: any[];
}
```

### `txOk`

This calls a public function and returns a receipt. If the result is not an `Ok`, then this function throws. Returns a `PublicResultOk` type.

The `prints` property will return JS-native types that are converted from Clarity values. For example, if your function called `(print { a: u1, b: (list u1 u2), c: "my-string" })`, then the resulting value in `prints` would be `{ a: 1n, b: [1n, 2n], c: "my-string" }`.

```ts
const result = await provider.txOk(
  myToken.transfer(1000n, sender, recipient, null),
  sender
);
result.value; // bigint;
result.events; // CoreNodeEvent[];
result.costs;
result.prints; // any[];
result.isOk; // true
```

### `txErr`

Like `txOk`, except this function will throw if the result is not an `Err`. Because public contract calls that result in `Err` do not save state, this receipt doesn't include some data (like events). Returns a `PublicResultErr` type.

```ts
// expected to fail, because the transaction sender is not equal to the `sender` argument.
const result = await provider.txErr(
  myToken.transfer(1000, sender, recipient, null),
  recipient
);
result.value; // bigint
result.isOk; // false
```

### `tx`

`tx` is similar to `ro`, in that it provides the result as well as the metadata related to your transaction.

Typically when testing contracts, you'll use either `txOk` or `txErr` to automatically check and type the results of function calls.

```ts
const result = await provider.tx(
  myToken.transfer(1000n, sender, recipient, null),
  sender
);
result.isOk; // boolean
if (result.isOk) {
  // result has the same type as `txOk`
} else {
  // result has the same type as `txErr`
}
```

## `mapGet`

`mapGet` allows you to get values from all of your contract's maps, without having to write a helper function that simply calls `map-get?`. In production code, you should still write these functions if you want to expose your maps to other contracts.

`mapGet` always returns the type `value | null`. For example, if the type of your map's values are `uint`, the result of `mapGet` is `bigint | null`.

```clarity
(define-map simple-map uint bool)
```

```ts
const hasOne = await provider.mapGet(myContract.simpleMap(0n)); // `boolean | null`
```

## Utility functions

`@clarigen/test` includes a few utility functions to help with common needs in a test environment.

### `mineBlocks`

Mine empty blocks. Helpful when testing functionality that requires many blocks to elapse.

```ts
import { mineBlocks } from "@clarigen/test";

await mineBlocks(10, provider);
```

### `getStxBalance`

```ts
import { getStxBalance } from "@clarigen/test";

const address = "ST123...";
const balance = await getStxBalance(provider, address); // bigint
```

### `getBlockHeight`

```ts
import { getBlockHeight } from "@clarigen/test";

const height = await getBlockHeight(provider); // bigint
```

### `evalCode`

`evalCode` allows you to execute arbitrary Clarity code within the context of a specific contract. This is executed in a read-only context, so write operations are not allowed.

```clarity
(define-data-var my-number u0)
```

```ts
const result = await provider.evalCode<bigint>(
  "(var-get my-number)",
  contractIdentifier
);
console.log(result); // 0n
```

### `eval`

Like `evalCode`, but this returns metadata (like logs and costs) from your code.

```ts
const result = await provider.eval<bigint>(
  "(var-get my-number)",
  contractIdentifier
);
result.value; // bigint
result.costs;
result.clarityValue; // UIntCV
result.logs; // string[];
```

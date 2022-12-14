---
sidebar_position: 1
sidebar_label: Introduction
slug: /
---

# Clarigen

Clarigen is a developer tool that automatically generates TypeScript-friendly clients that can interact with [Clarity](https://clarity-lang.org) smart contracts.

Clarigen is built to work alongside the libraries and tooling you already use. For unit tests, it works perfectly with [Clarinet](https://github.com/hirosystems/clarinet). When you're building web apps or node.js code, it works seamlessly with [`micro-stacks`](https://micro-stacks.dev).

If you'd like to get started using Clarigen in your project, head over to the [getting started with Clarigen](./docs/getting-started) page.

<!-- The workflow for using Clarigen is usually: -->

<!-- ## Example projects {#example-projects}

- [Fungible token](https://github.com/hstove/stacks-fungible-token): the reference implementation that goes along with SIP-010, the standard for fungible tokens on Stacks
- [Counter](https://github.com/hstove/clarigen-counter-example): A simple and silly counter contract that mints a fungible token any time someone calls `increment` or `decrement` -->

## Why? {#why}

When you're building Clarity contracts, and Clarity apps, there is a ton of boilerplate code that you need to write. Similarly, you need to use a different library, with a different API, depending on if you're writing tests, web apps, or node.js code.

On the other hand, Clarity's designs mean that we shouldn't have to write lots of boilerplate. Clarity code is fully type-safe, and isn't compiled, so it's easy to generate a type interface for every single Clarity contract.

Clarigen is designed to harness Clarity's architecture and type safety to remove any and all boilerplate in your JavaScript projects. Ultimately, it makes Clarity development much more productive and easy.

## How it works {#how-it-works}

The magic behind Clarigen starts with the fact that any Clarity contract can be represented as a machine-readable interface, exposed in JSON format. In other blockchains, this is commonly referred to as an ABI. The interface for a contract looks something like this:

```json
{
  "functions": [
    {
      "name": "decrement",
      "access": "public",
      "args": [],
      "outputs": {
        "type": {
          "response": {
            "ok": "int128",
            "error": "none"
          }
        }
      }
    }
  ]
}
```

Clarigen will take the JSON interface for each of your projects, lightly annotate it, and generate a TypeScript interface inside your project. When you're writing JS code (whether for testing or building apps), Clarigen's libraries will utilize these types to make interacting with contracts a breeze.

The end result is that you'll be able to write code that looks like native JavaScript, but is converted under-the-hood to proper Clarity types.

Here's an example of what your code will look like when using Clarigen. This is an example of writing unit tests with Clarinet.

```ts title="tests/counter_test.ts"
// import helpers from the Clarigen package:
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

Clarity has it???s own set of [built-in types](https://docs.stacks.co/docs/write-smart-contracts/clarity-language/language-types), but Clarigen will convert them to JavaScript native values behind the scenes. This way, you can pass arguments and check results just like you would with any JavaScript library.

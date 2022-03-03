---
sidebar_position: 1
sidebar_label: Introduction
---

# Clarigen

Clarigen is a developer tool that automatically generates TypeScript-friendly clients that can interact with [Clarity](https://clarity-lang.org) smart contracts.

The workflow for using Clarigen is usually:

- Write your Clarity contracts
- Automatically generate interfaces for your contracts with `yarn clarigen --watch`
- Write unit tests using [`@clarigen/test`](adapters/test-adapter.md)
- Build your web app using [`@clarigen/web`](adapters/web-adapter.md)
- Write scripts and server-side code with [`@clarigen/node`](adapters/node-adapter.md)

## Example projects

- [Fungible token](https://github.com/hstove/stacks-fungible-token): the reference implementation that goes along with SIP-010, the standard for fungible tokens on Stacks
- [Counter](https://github.com/hstove/clarigen-counter-example): A simple and silly counter contract that mints a fungible token any time someone calls `increment` or `decrement`

## Why?

When you're building Clarity contracts, and Clarity apps, there is a ton of boilerplate code that you need to write. Similarly, you need to use a different library, with a different API, depending on if you're writing tests, web apps, or node.js code.

On the other hand, Clarity's designs mean that we shouldn't have to write lots of boilerplate. Clarity code is fully type-safe, and isn't compiled, so it's easy to generate a type interface for every single Clarity contract.

Clarigen aims to provide two goals:

- Provide an easy, JS-friendly API for any type of contract interaction. Never have to deal with converting Clarity values into JS values
- Provide a single unified API regardless of the environment you're developing in

## How it works

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

Clarigen will generate the JSON interface for your contracts and turn it into type-safe JavaScript code, using JS primitives.

After Clarigen automatically generates a wrapper for each of your contracts, you can write code that looks like this:

```ts
import { TestProvider } from "@clarigen/test";
import { counterInfo } from "@contracts/counter";

const { counter } = await TestProvider.fromContracts({
  counter: counterInfo,
});

const sender = "ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA";

test("Calling `decrement` on my counter contract", async () => {
  const prev = await counter.getCounter();
  expect(prev).toEqual(4);
  const tx = counter.decrement();
  const receipt = await tx.submit({ sender });
  expect(receipt.isOk).toEqual(true);
  const newValue = await counter.getCounter();
  expect(newValue).toEqual(3);
});
```

Clarity has it’s own set of [built-in types](https://docs.blockstack.org/references/language-types), but Clarigen will convert them to JavaScript native values behind the scenes. This way, you can pass arguments and check results just like you would with any JavaScript library.

### The "provider pattern"

Clarigen is designed to provide a unified API that can work in multiple different environments. Whether you’re writing unit tests or building a web app, developers can invoke functions using the same API (like `contract.getTotalSupply()`), even though what actually happens in those environments is totally different. The “provider pattern” can be helpful when writing code for this kind of situation.

Clarigen currently provides two providers - `WebProvider` and `TestProvider`. Soon, it’ll also include a `NodeProvider`, which can be used in server-side and scripting contexts.

Each provider has a common interface, with functions like `callPublic`. `TestProvider` uses `clarity-js-sdk` to run Clarity code and get the result. `WebProvider` uses `@stacks/connect` for making transaction signing requests with the [Stacks Wallet for Web](https://www.hiro.so/wallet/install-web).

## Setup guide

---
sidebar_position: 2
sidebar_label: Getting Started
---

# Getting Started

To start, this guide assumes you have a local project folder with Typescript already configured. If you don't then the easiest way to build one is with [`tsdx`](https://tsdx.io), using the "basic" template:

```sh
npx tsdx create my-clarigen-project
```

### Install NPM package

To setup a project, install the `@clarigen/cli` package.

```bash
# npm
npm install --save-dev @clarigen/cli

# yarn
yarn add --dev @clarigen/cli
```

<details>
  <summary>(Optional) Using a local `clarity-cli` binary</summary>
  
  Behind the scenes, installing this package will download a `clarity-cli` binary from the [`stacks-blockchain`](https://github.com/blockstack/stacks-blockchain) repository. If you want to use a custom version of `clarity-cli`, you can use the `CLARITY_CLI_SOURCE_PATH` environment variable to specify the path to that file.

You might need to include `--force` to correctly run post-install scripts.

```bash
CLARITY_CLI_SOURCE_PATH=/path/to/clarity-cli yarn --force
```

</details>

### Create a `/contracts` folder

Create a `/contracts` folder in your project, and add a Clarity smart contract to it. For example, make a `hello-world.clar` file with this Clarity code:

```clarity
(define-public (say-hi)
  (ok "hello, world")
)
```

### Create a `clarigen.config.json` file:

Clarigen's CLI uses a JSON configuration file to know how to deploy your contracts. Add the following to your file:

```json
{
  "contractsDir": "contracts",
  "outputDir": "src/clarigen",
  "contracts": [
    {
      "file": "hello-world.clar",
      "address": "ST50GEWRE7W5B02G3J3K19GNDDAPC3XPZPYQRQDW"
    }
  ]
}
```

The `contractsDir` option specifies the folder where your Clarity contracts live.

`outputDir` specifies where the automatically-generated TypeScript files should go.

`contracts` is an array of each of your contracts. The `address` specifies who the deployer is of this contract. In this example, the contract will be deployed as `ST50GEWRE7W5B02G3J3K19GNDDAPC3XPZPYQRQDW.hello-world`.

The order of entries in the `contracts` array is important. When generating interfaces, each entry is deployed in the order specified. So, if one contract depends on another, then make sure that contract is listed _after_ the other one.

### Generate Clarigen interfaces

We're all set up! Now, you can run the `clarigen` command and generate interfaces for your project.

```sh
# with yarn
yarn clarigen

# with npm
npx clarigen
```

You should see a new folder created at `src/clarigen/hello-world`. You will have a different folder for each contract specified. These folders include the TypeScript interfaces, and other metadata, to allow each of Clarigen's adapters to interace with it.

## Usage with Clarinet

[Clarinet](https://github.com/hirosystems/clarinet) is another fantastic dev tool for building Clarity contracts.

How is Clarinet different from Clarigen?

- Clarigen is more intended for strictly creating an excellent Typescript developer experience, so that you can run the same exact code in any environment (unit tests, node.js scripts, and web apps)
- Clarigen utilizes node.js, whereas Clarinet supports Typescript unit tests in Deno. At the moment, the tools are not compatible for unit testing
- Clarinet provides an out-of-the-box REPL and notebooks experience, which is invaluable for iterating on contracts
- Clarigen generates type-safe and convenient interfaces to your contracts, whereas Clarinet unit tests are less strongly typed

**Ultimately, the two tools are best used in tandem**

It's really easy to have a project that uses both Clarigen and Clarinet. You'll still need to install the dependencies listed above, but your `clarigen.config.json` file can simply reference that you're using Clarinet:

```json
{
  "outputDir": "src/clarigen",
  "clarinet": "my-clarinet-folder"
}
```

Or, to indicate that Clarinet is at the root level of your project, you can set `"clarinet": "."` in your configuration.

When Clarigen sees this configuration, it fetches all contract information from Clarinet's configuration files (i.e. `Clarinet.toml` and `settings/Development.toml`).

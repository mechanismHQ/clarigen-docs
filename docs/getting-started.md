---
sidebar_position: 2
sidebar_label: Getting Started
---

# Getting Started

## Installation

Clarigen's CLI is a Deno project - so you need to have Deno installed on your machine. In the future, we'll distribute standalone executables.

To install Clarigen, run:

```bash
deno install -qAfn clarigen https://deno.land/x/clarigen/cli.ts
```

### Clarinet dependency

At the moment, using Clarigen requires that you have a basic Clarinet project setup. This allows Clarigen to re-use common configuration (like contracts, deployments, and requirements). If you don't have this yet, the easiest way to start is to [install Clarinet](https://github.com/hirosystems/clarinet#installation) and run:

```bash
# change "my-project" to your project's name
clarinet new my-project
```

### `Clarigen.toml`

Your Clarigen-specfic configuration goes in `Clarigen.toml` at the root of your project. To generate a basic configuration file, run:

```bash
clarigen init
```

Learn more about [configuration](./configuration.md)

## Generate some code!

Now you have everything you need for Clarigen to start generating type-safe boilerplate for you.

If you're writing unit tests with Clarinet, set your `deno` output path.

```toml title="Clarigen.toml"
[deno]
output = "artifacts/clarigen.ts"
```

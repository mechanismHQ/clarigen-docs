import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import { Box, Flex, Grid, Stack, Text } from "@nelson-ui/react";
import CodeBlock from "@theme/CodeBlock";
import { Link } from "../components/link";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Clarigen Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Clarigen - a Clarity developer's tool`}>
      <Box mt="$3" className="container" mx="auto" maxWidth="800px">
        <Stack spacing="$5">
          <Text as="h1" variant="Heading01">
            Clarigen
          </Text>
          <Box maxWidth="600px">
            <Text as="h2" variant="Heading03">
              A developer tool that makes it simple and pleasant to build
              Clarity apps
            </Text>
          </Box>

          <Text variant="Body01">
            Clarigen is a code generator that gives you type-safe interfaces for
            interacting with your Clarity contracts. Whether you're writing unit
            tests with{" "}
            <Link
              target="_blank"
              href="https://github.com/hirosystems/clarinet"
            >
              Clarinet
            </Link>{" "}
            or building web apps with{" "}
            <Link target="_blank" href="https://micro-stacks.dev">
              micro-stacks
            </Link>
            {","} Clarigen will give you exactly what you need so you're
            building great apps - not writing boilerplate.
          </Text>
        </Stack>
      </Box>
      {/* <HomepageHeader /> */}
      <main>
        <Stack
          spacing="$5"
          my="$8"
          className="container"
          mx="auto"
          maxWidth="800px"
        >
          <Stack spacing="$3">
            <Text variant="Heading04">See the difference:</Text>
            <Text variant="Body01">
              The best way to understand the value that Clarigen provides is to
              see how it changes the code you'd otherwise write. In these
              examples, we're comparing code that uses Clarinet and
              micro-stacks. Importantly, Clarigen does <strong>not</strong>{" "}
              change the tool you're using under the hood. You can use the same
              tools as before - just with better types.
            </Text>
            <Text variant="Body01">
              First, let's look at code that's typically used when testing
              contracts in Clarinet:
            </Text>
          </Stack>

          <Box flexGrow={1}>
            <CodeBlock language="typescript" title="Vanilla Clarinet">
              {`const wallet_1 = accounts.get('wallet_1')!;
let block = chain.mineBlock([
    Tx.contractCall("counter", "increment", [types.uint(1)], wallet_1.address),
]);
block.receipts[0].result
  .expectOk()
  .expectUint(2);`}
            </CodeBlock>
          </Box>
          <Text variant="Body01">
            In the above example, there are no Typescript types to help you work
            with your contracts. Your contract names are just{" "}
            <code>string</code>s, and you have to manually type your function
            arguments (like <code>types.uint(1)</code>). And when you're working
            with transaction results, you have to explicitly state the expected
            return (<code>.expectUint(2)</code>).
          </Text>
          <Text variant="Body01">
            Here's what that test looks like after Clarigen has generated all
            the boilerplate for you:
          </Text>
          <Box flexGrow={1}>
            <CodeBlock
              language="typescript"
              title="Clarinet tests - with Clarigen!"
            >
              {`const alice = accounts.get('wallet_1').address;
const receipt = chain.mineOne(
  txOk(contracts.counter.increment(2), alice),
);
assertEquals(receipt.value, 2n);
                  `}
            </CodeBlock>
          </Box>
          <Text variant="Body01">Now, you've got:</Text>
          <Stack spacing="$1" ml="$4">
            <Text variant="Body01">✅ All your contract types pre-defined</Text>
            <Text variant="Body01">
              ✅ Your `Devnet` accounts are type-safe
            </Text>
            <Text variant="Body01">
              ✅ Helpers to specify expected responses (<code>txOk</code>)
            </Text>
            <Text variant="Body01">
              ✅ Type-safe response values, without having to specify them
            </Text>
          </Stack>
          <Text variant="Body01">
            Let's look at one more example - using <code>micro-stacks</code> to
            call a contract from a React app:
          </Text>
          <CodeBlock language="tsx" title="hooks/use-with-micro-stacks.ts">
            {`const { openContractCall, isRequestPending } = useOpenContractCall();

async function handleOpenContractCall() {
  const functionArgs = [
    uintCV(1234),
    intCV(-234),
    bufferCV(utf8ToBytes('hello, world')),
    stringAsciiCV('hey-ascii'),
    stringUtf8CV('hey-utf8'),
    standardPrincipalCV('ST1X6M947Z7E58CNE0H8YJVJTVKS9VW0PHEG3NHN3'),
    trueCV(),
  ];
  await openContractCall({
    contractAddress: 'ST1X6M947Z7E58CNE0H8YJVJTVKS9VW0PHEG3NHN3',
    contractName: 'faker',
    functionName: 'rawr',
    functionArgs,
    onFinish: () => {}
  })
}
    `}
          </CodeBlock>
          <Text variant="Body01">
            With Clarigen, here's what that code looks like:
          </Text>
          <CodeBlock language="tsx" title="hooks/use-with-clarigen.ts">
            {`const { openContractCall } = useOpenContractCall(contracts.faker.rawr);

async function handleOpenContractCall() {
  await openContractCall({
    functionArgs: [ // with type hints!
      1234,
      -234,
      utf8ToBytes('hello, world'),
      'hey-ascii',
      'hey-utf8',
      'ST1X6M947Z7E58CNE0H8YJVJTVKS9VW0PHEG3NHN3',
      true
    ],
    onFinish: () => {}
  })
}
            `}
          </CodeBlock>
        </Stack>
      </main>
    </Layout>
  );
}

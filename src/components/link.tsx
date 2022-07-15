import React from 'react';
import { Text } from '@nelson-ui/react';
import LinkEl from "@docusaurus/Link";

export const Link = ({ children, ...props }) => {
  return (<Text as={LinkEl} variant="Body01" textDecoration="underline" color="$text-onPrimary" {...props}>
    {children}
  </Text>)
}
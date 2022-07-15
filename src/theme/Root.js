import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { getCssText } from "@nelson-ui/core";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      {children}
    </>
  );
  // return <ChakraProvider>{children}</ChakraProvider>;
}

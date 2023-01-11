import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Signup from "./Signup";

function Sign() {
  return (
    <ChakraProvider>
      <Signup />
    </ChakraProvider>
  );
}

export default Sign;

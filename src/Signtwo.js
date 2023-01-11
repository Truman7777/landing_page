import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Signin from "./Signin";

function Signtwo() {
  return (
    <ChakraProvider>
      <Signin />
    </ChakraProvider>
  );
}

export default Signtwo;

import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Introduce from "./Introduce";
import Middle from "./Middle";
import End from "./End";

function Home() {
  return (
    <ChakraProvider>
      <Introduce />
      <Middle />
      <End />
    </ChakraProvider>
  );
}

export default Home;

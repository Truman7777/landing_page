import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./carousels";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Footer />
      {/* <Carousel /> */}
    </ChakraProvider>
  );
}

export default App;

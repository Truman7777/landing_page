import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Introduce from "./Introduce";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

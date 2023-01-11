import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sign from "./Sign";
import Signtwo from "./Signtwo";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/introduce" element={<Home />}></Route>
          <Route path="/signup" element={<Sign />}></Route>
          <Route path="/signin" element={<Signtwo />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

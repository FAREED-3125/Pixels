import React, { useState, useEffect } from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import Menu from "./Components/Menu";

function App() {
  const location = useLocation();
  return (
    <LayoutGroup>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;

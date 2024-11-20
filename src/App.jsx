import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header>dj.fbd ..1234567890</Header>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </>
  );
}

export default App;

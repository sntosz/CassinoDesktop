import { App }  from "@/App";
import { Home } from "@/pages/home";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router'



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/cadastyro" element={<BrunaTeste />}/> */}
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
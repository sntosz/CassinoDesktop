import { App }  from "@/App";
import { Home } from "@/pages/home";
import { Login } from "@/pages/login";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router'



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/cadastyro" element={<BrunaTeste />}/> */}
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Login />}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
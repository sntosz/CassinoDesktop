import { App }  from "@/App";
import { Login } from "@/pages/login";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router'



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/cadastyro" element={<BrunaTeste />}/> */}
        <Route path="/" element={<Login />}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
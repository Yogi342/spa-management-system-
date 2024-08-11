import React from 'react'
import Header from './website/Component/Header'
import Header1 from './website/Component/Header1'
import About from './website/Pages/About'
import Appoinment from './website/Pages/Appoinment'
import Testimonial from './website/Pages/Testimonial'
import Home from './website/Pages/Home'
import Services from './website/Pages/Services'
import Team from './website/Pages/Team'
import Pricing from './website/Pages/Pricing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
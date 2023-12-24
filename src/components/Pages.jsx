import React from "react"
import Header from "./Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./home/Home"
import Footer from "./Footer"
import About from "./About"
import Pricing from "./Pricing"
import Services from "./Services"
import Contact from "./Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact  path='/pricing' element={<Pricing />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages;
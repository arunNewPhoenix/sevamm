import React from "react";
import Nav from "./navs/Nav";
import './home.css'
import Hording from "./hoarding/Hording";
import Review from "./reviewSection/Review";
import Savings from "./savings/Savings";
import Footer from "./footer/Footer";
export function Home() {
  return (
   <div className="home">
   <Nav/>
   <Hording/>
   <Review/>
   <Savings/>
   <Footer/>
   
   </div>
  )
}



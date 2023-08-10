import React from 'react'
import Navbar from '../Comp.js/Navbar';
import "../App.css";
import Slider from '../Comp.js/Slider';
import Curd from '../Comp.js/Curd';
import Scroll from '../Comp.js/Scroll';
import Droopdown from '../Comp.js/Droopdown';
import Header from '../Comp.js/Header';
import Imeg from '../Comp.js/Imeg';
import Imegtext from '../Comp.js/Imegtext';
import Form from '../Comp.js/Form';
import Footer from '../Comp.js/Footer';

export default function Home() {
  return (
    <div>
       <Navbar />
        <Droopdown />

        <Header />
        <Imeg />
        <Imegtext />
        <Slider />
        <Curd />
        <Scroll />
        <Form />
        <Footer />
    </div>
  )
}

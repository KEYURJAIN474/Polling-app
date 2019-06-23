import React from 'react'
import Navbars from '../Homepage/navbar';
import Centerpage from '../Homepage/Centerpage';
import Cards from '../Homepage/Cards';
import Footer from '../Homepage/Footer';

export default function Mainpage() {
    return (
        <div>
            <Navbars />
            <Centerpage />
            <Cards />
            <Footer /> 
        </div>
    )
}

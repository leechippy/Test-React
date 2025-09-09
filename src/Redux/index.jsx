import React from 'react';
import { useState } from "react"
import { Header, Footer } from "./layout"
import { ContactUs, AboutUs, Logout, Home,Settings } from "./pages"
const Reduxpage = () => {
    const [mousclik, setMouseclick] = useState('Home')
  const onMouseClick = (value) => {
    setMouseclick(value)
  }
  const getmenu = () => {
    if (mousclik == 'Home') {
      return <Home />
    }
    else if (mousclik == 'Contact') {
      return <ContactUs />
    }
    else if (mousclik == 'About') {
      return <AboutUs />
    }
     else if (mousclik == 'Settings') {
      return <Settings />
    }
    else {
      return <Logout />
    }
  }
  return (
    <>
      <div className='app'>
        <Header onMouseClick={onMouseClick} mousclik={mousclik} />
        {getmenu()}
        <Footer />
      </div>
    </>
  )
}
export default Reduxpage;

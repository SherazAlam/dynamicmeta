import React from 'react'
import Navbar from "./Navbar"
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div className='homeContainer'>
        <Helmet>
            <title>Home Page</title>
        <meta name='description' content='Home Page Description'></meta>
            </Helmet>
        <Navbar></Navbar>
        <div className='homePage'>Home Page</div>
    </div>
  )
}

export default Home
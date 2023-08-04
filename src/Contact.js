import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <div className='contactContainer'>
        <Helmet>
            <title>Contacts</title>
        <meta name='description' content='Contact Page Description'></meta>
            </Helmet>
        <Navbar></Navbar>
        <div className='contactUs'>Contact Us Page</div>
    </div>
  )
}

export default Contact
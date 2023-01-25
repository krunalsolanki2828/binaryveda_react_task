import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer/>
    </>
  )
}

export default Layout

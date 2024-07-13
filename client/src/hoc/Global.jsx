import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';

const Global = ({children}) => {
  const location = useLocation();
  return (
    <>
    {location.pathname !== '/' ? <Header/> : null }
    {children}
    {location.pathname !== '/' ? <Footer /> : null}
    </>
  )
}

export default Global
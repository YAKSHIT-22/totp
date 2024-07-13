import React from 'react'
import LoaderScreen from '../../components/loader/LoaderScreen'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const LandingPage = () => {
  return (
    <main className='relative w-full h-full flex items-center justify-center'>
     <LoaderScreen/>
    <section className='flex items-center justify-center flex-col w-full h-full'>
      <Header/>
        <section className='flex items-center'>

        </section>
      <Footer/>
    </section>
    </main>
  )
}

export default LandingPage
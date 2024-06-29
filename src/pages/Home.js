import React from 'react'
import Hero from '../Components/Hero'
import Special from '../Components/Special'
import Testimonials from '../Components/Testimonials'
import AboutText from '../Components/AboutText'
import heroImag from '../assets/images/bigne_cut_short.jpg'

export default function Home() {
  return (
    <>
      <Hero heroImag={heroImag}/>
      <Special />
      <Testimonials />
      <AboutText />
    </>
  )
}

import AboutText from '../Components/AboutText'
import Hero from '../Components/Hero'
import heroImag from '../assets/images/pesce_short.jpg'
import './About.css'

export default function About() {
  return (
    <>
    <Hero heroImag={heroImag}/>
    <main className='about-comp section-container'>
      <AboutText />
    </main>
    </>
  )
}

import React from 'react'
import PreNavbar from "../components/common/PreNavbar"
import Navbar from '../components/common/Navbar'
import Hero from '../components/divorce/Hero'
import HowDoesSell from '../components/common/HowDoesSell'
import FAQ from '../components/common/FAQ'
import Footer from '../components/common/Footer'
import HeroCard from '../components/divorce/HeroCard'
import Partnering from '../components/divorce/Partnering'
import FreshStart from '../components/divorce/FreshStart'

export default function Divorce() {
  return (
    <>
      <PreNavbar />
      <Navbar />
      <Hero />
      <HeroCard />
      <Partnering />
      <HowDoesSell />
      <FreshStart />
      <FAQ />
      <Footer />
    </>
  )
}

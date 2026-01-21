import React from 'react'
import Hero from '../components/Hero.jsx'
import FeaturedDestination from '../components/FeaturedDestination.jsx'
import ExclusiveOffers from '../components/ExclusiveOffers.jsx'
import Testimonial from '../components/Testimonial.jsx'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedDestination/>
        <ExclusiveOffers/>
        <Testimonial/>
    </>
  )
}
  
export default Home

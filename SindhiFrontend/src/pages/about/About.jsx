import React from 'react'
import Layout from '../../layout/Layout'
import Banner from './aboutComponents/Banner'
import Hero from './aboutComponents/Hero'
import Mission from './aboutComponents/Mission'
import FreeDelivery from './aboutComponents/FreeDelivery'
import KeyHighlight from './aboutComponents/KeyHighlight'
import Entrepreneur from './aboutComponents/Entrepreneur'

function About() {
  return (
    <Layout> 
      <Banner/>
      <Hero />
      <Mission />
      <FreeDelivery />
      <KeyHighlight />
      <Entrepreneur/>
   </Layout>
  )
}

export default About
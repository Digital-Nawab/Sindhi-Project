import React from 'react'
import Hero from './homeComponents/Hero'
import Layout from '../../layout/Layout'
import Faq from './homeComponents/Faq'
import WeAreHiring from './homeComponents/WeAreHiring'
import ExploreProduct from './homeComponents/ExploreProduct'
import Sale from './homeComponents/Sale'
import CommunityProducts from './homeComponents/CommunityProducts'
import SindhiVendor from './homeComponents/SindhiVendor'
import Sale2 from './homeComponents/Sale2'
import FeaturedService from './homeComponents/FeaturedService'
import Entrepreneur from './homeComponents/Entrepreneur'
import ChooseYourPlan from './homeComponents/ChooseYourPlan'
import Auction from './homeComponents/Auction'
import Celebrating from './homeComponents/Celebrating'

function Home() {
  return (
    <Layout>
      <Hero />
      <ExploreProduct />
      <Sale/>
      <CommunityProducts/>
      <SindhiVendor/>
      <Sale2/>
      <FeaturedService/>
      <Entrepreneur/>
      <ChooseYourPlan/>
      <Auction/>
      <WeAreHiring/>
      <Celebrating/>
      <Faq/>
     
    </Layout>
  )
}

export default Home
import React from 'react'
import Hero from './homeComponents/Hero'
import Layout from '../../layout/Layout'
import Featured from './homeComponents/Featured'
import Offer from './homeComponents/Offer'
import Products from './homeComponents/Products'
import CategoryProducts from './homeComponents/CategoryProducts'
import Vender from './homeComponents/Vender'
import DeliveryFeatures from './homeComponents/DeliveryFeatures'

function Home() {
  return (
    <Layout>
      <Hero />
      <Featured/>
      <Offer/>
      <Products/>
      <CategoryProducts/>
      <Vender/>
      <DeliveryFeatures/>
    </Layout>
  )
}

export default Home
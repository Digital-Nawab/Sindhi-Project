import React from 'react'
import Layout from '../../layout/Layout'
import VenderBanner from './VenderComponents/VenderBanner'
import VenderListing from './VenderComponents/VenderListing'

function Vender() {
  return (

    <Layout>
      <VenderBanner/>
      <VenderListing/>
    </Layout>
  )
}

export default Vender
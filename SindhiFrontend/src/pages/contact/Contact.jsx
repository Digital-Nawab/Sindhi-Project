import React from 'react'
import Layout from '../../layout/Layout'
import Banner from './contactComponents/Banner'
import FormMap from './contactComponents/FormMap'
import Faq from './contactComponents/Faq'

function Contact() {
  return (
    <Layout>
       <Banner/>
       <FormMap/>
       <Faq/>
    </Layout>
  )
}

export default Contact
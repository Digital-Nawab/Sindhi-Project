import React from 'react'
import Layout from '../../layout/Layout'
import FormMap from './contactComponents/FormMap'
import ContactBanner from './contactComponents/ContactBanner'
function Contact() {
  return (
    <Layout>
       <FormMap/>
       <ContactBanner/>
    </Layout>
  )
}

export default Contact
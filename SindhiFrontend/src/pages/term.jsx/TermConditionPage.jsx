
import React from 'react'
import Layout from '../../layout/Layout'
import TermCondition from './termComponents/TermCondition'
import Banner from './termComponents/Banner'
function TermConditionPage() {
  return (
    <Layout>
      <Banner/>
        <TermCondition/>
    </Layout>
  )
}

export default TermConditionPage
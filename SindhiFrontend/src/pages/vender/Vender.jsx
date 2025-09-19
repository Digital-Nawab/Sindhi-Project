import React from 'react'
import NewLayout from '../../layout/NewLayout'
// import VenderBanner from './VenderComponents/VenderBanner'
import VenderListing from './VenderComponents/VenderListing'

function Vender() {
  return (

    <NewLayout>
      {/* <VenderBanner/> */}
      <VenderListing/>
    </NewLayout>
  )
}

export default Vender
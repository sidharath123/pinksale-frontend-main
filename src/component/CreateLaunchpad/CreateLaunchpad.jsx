import React from 'react'
import VerifyToken from './VerifyToken/VerifyToken'
import TokenAddress from './TokenAddress/TokenAddress'
import Footer from '../footer/Footer'

const CreateLaunchpad = () => {
  return (
    <>
    <div className='createLaunchPad'>
      <VerifyToken/>
        <TokenAddress />
        <Footer/>
    </div>
     
    </>
  )
}

export default CreateLaunchpad
import React from 'react'
import TokenSalesCard from '../TokenSales/TokenSalesCard/TokenSalesCard'
import Ecosystem from '../../EcoSystem.json'

const EcoSystem = () => {
  return (
    <>
    <div className='launchpad_section'>
      <div className='container'>
        <div className='launchpad_main'>
          <div className='launchpad_protocol_text'>
            <h1>A Growing Protocol Ecosystem.</h1>
            <p>We build a suite of tools for the world of decentralized finance. PinkMoon, PinkSale, PinkElon PinkLock, PinkSwap, we Pink everything!</p>
          </div>
        </div>
      </div>
    </div>
    <TokenSalesCard TokenSales={Ecosystem}/>
    </>
  )
}

export default EcoSystem
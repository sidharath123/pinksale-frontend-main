import React from 'react'
import './BodyContent.css'
import { BiTrendingUp } from "react-icons/bi"
import { Outlet } from 'react-router-dom'


const BodyContent = () => {
  return (
    <>
    <div className='tag'>
      <ul className='nav-ul'>
        <li><a href="#"><span className='trending-icon'><BiTrendingUp/></span> <span className='trending-name'>Trending</span></a></li>
        <li><a href="#"><span className='tag-no'>#1</span><span className='tag-name'>$ASTROCEO</span></a></li>
        <li><a href="#"><span className='tag-no'>#2</span><span className='tag-name'>MIDAI</span></a></li>
        <li><a href="#"><span className='tag-no'>#3</span><span className='tag-name'>NETADOGEAI</span></a></li>
        <li><a href="#"><span className='tag-no'>#4</span><span className='tag-name'>FLASH</span></a></li>
        <li><a href="#"><span className='tag-no'>#5</span><span className='tag-name'>TRUMPCEO</span></a></li>
        <li><a href="#"><span className='tag-no'>#6</span><span className='tag-name'>Olefy</span></a></li>
        <li><a href="#"><span className='tag-no'>#7</span><span className='tag-name'>AIWD</span></a></li>
        <li><a href="#"><span className='tag-no'>#8</span><span className='tag-name'>AIDOGE</span></a></li>
        <li><a href="#"><span className='tag-no'>#9</span><span className='tag-name'>USTCA</span></a></li>
        <li><a href="#"><span className='tag-no'>#10</span><span className='tag-name'>CryptoTubeAI</span></a></li>
        <li><a href="#"><span className='tag-no'>#11</span><span className='tag-name'>RULE</span></a></li>
        <li><a href="#"><span className='tag-no'>#12</span><span className='tag-name'>COW INU</span></a></li>
      </ul>
    </div>
    <Outlet/>
    </>
     
  )
}
export default BodyContent
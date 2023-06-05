import React from 'react'
import './CardItems.css'
import { Button, Card, Space } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import { AiOutlineLock } from 'react-icons/ai'
import cardProfileimage from '../../../Images/cardProfileimage.png'
import { Progress } from 'antd';
import {AiOutlineBell} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const CardItem = () => {
    return (
        <>
            <div className='card-main'>
                <div className='card-title'>
                    <div className='card-image'>
                        <img src={cardProfileimage} alt="" />
                    </div>
                    <div>
                        <button className='button_upcoming'><span><AiOutlineLock /></span>Upcoming</button>
                    </div>
                </div>
                <div className='pepe_ceo'>
                    <h1>PepeCeo</h1>
                    <p>1 BNB = 3,839,999,999,999,998  $PepeCeo</p>
                </div>
                <div className='soft_section'>
                    <p className='soft'>Soft/Hard</p>
                    <p className='_bnb'>25 BNB - 50 BNB</p>
                    <p className='process'>Progress (0.00%)</p>
                </div>
                <Progress percent={0} showInfo={false} status="active" />
                <div className='bnb_scetion'>
                    <p>0 BNB</p>
                    <p>50 BNB</p>
                </div>
                <div className='liquidity_section'>
                    <div className='liquidity_percent'>
                        <p>Liquidity %:</p>
                        <p>Lockup Time:</p>
                    </div>
                    <div className='manual_listing'>
                        <p>51% (Manual listing)</p>
                        <p>Unlocked</p>
                    </div>
                </div>
                <div className='sale_starts_in_section'>
                    <div className='sale_starts'>
                        <p>Sale Starts In:</p>
                        <p>04: 13: 02: 21</p>
                    </div>
                    <div className='view_section'>
                        <div className='bell'><AiOutlineBell/></div>
                        <div className='heart'><AiOutlineHeart/></div>
                        <Link className='view_button' to='/lauchpadlist/item-number'>View</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem
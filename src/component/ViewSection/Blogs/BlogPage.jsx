import React from 'react'
import './Blog.css';
import viewLeftimage from '../../../Images/viewLeftimage.png'
import { AiOutlineLock } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { CiFacebook } from 'react-icons/ci'
import { FaTelegramPlane } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiDiscordFill } from 'react-icons/ri'
import { TfiReddit, TfiWorld } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'



const Blog = () => {
  return (
    <div className='container'>
      <div className='view_main'>
        <div className='view_details_left_main'>
          <div className='view_details_left'>
            <div className='view_content_left'>
              <div className='view_content_left_image'>
                <img className='view_left_image' src={viewLeftimage} alt="view left image" />
              </div>
            </div>
            <div className='view_content_right'>
              <div className='audit_section'>
                <h2>Snoopy Inu Fair Launch</h2>
                <div className='icon_section'>
                  <ul className='_flex'>
                    <li>
                      <Link to="">
                        <TfiWorld size={"20"} color='#FA6200' />

                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FiTwitter size={'20'} color='#FA6200' />

                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <CiFacebook size={"20"} color='#FA6200' />

                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaTelegramPlane size={"20"} color='#FA6200' />

                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FiGithub size={"20"} color='#FA6200' />

                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <AiOutlineInstagram size={"20"} color='##FA6200' />

                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <RiDiscordFill size={"20"} color='#FA6200' />

                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <TfiReddit size={"20"} color='#FA6200' />

                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='sale_live_button_section'>
                <div className='sale_live_icon'>
                  <a href='javascript:void(0)' style={{ border: 'none', cursor: 'pointer', backgroundColor: 'rgb(0, 188, 212)', borderRadius: '3px', textTransform: 'capitalize', padding: '3px 5px', color: '#ffffff' }}>audit</a>
                  <div className='heartbtnholder'>
                    <div className='heart'><AiOutlineHeart /></div>
                    <div className='sale_live_button'>
                      <button style={{ border: 'none', display: 'flex', alignItems: 'center', width: '85px', cursor: 'pointer', backgroundColor: '#FDFAEA', borderRadius: '12px', textTransform: 'capitalize', padding: ' 4px 8px', color: '#D29813;' }}>
                        <GoPrimitiveDot size={'14px'} color="rgb(18 185 129)" />
                        sale live
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='para'>
            <p>𝐒𝐧𝐨𝐨𝐩𝐲 𝐢𝐬 𝐚 𝐡𝐨𝐮𝐬𝐞𝐡𝐨𝐥𝐝 𝐧𝐚𝐦𝐞, 𝐚𝐧𝐝 𝐢𝐭'𝐬 𝐭𝐢𝐦𝐞 𝐭𝐨 𝐠𝐨 𝐭𝐨 𝐭𝐡𝐞 𝐦𝐨𝐨𝐧!🚀 𝐀𝐢𝐦𝐢𝐧𝐠 𝐭𝐨 𝐛𝐞 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝐭𝐨𝐩 𝐦𝐞𝐦𝐞 𝐭𝐨𝐤𝐞𝐧! 👑𝐒𝐜𝐡𝐮𝐥𝐭𝐳 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐭𝐡𝐞 𝐢𝐦𝐚𝐠𝐞 𝐨𝐟 𝐒𝐧𝐨𝐨𝐩𝐲 𝐨𝐧 𝐭𝐡𝐞 𝐦𝐨𝐨𝐧, 𝐍𝐀𝐒𝐀 𝐚𝐥𝐬𝐨 𝐦𝐚𝐝𝐞 𝐒𝐧𝐨𝐨𝐩𝐲 𝐚𝐧 𝐚𝐦𝐛𝐚𝐬𝐬𝐚𝐝𝐨𝐫,🌈 𝐞𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠 𝐢𝐬 𝐡𝐞𝐥𝐩𝐢𝐧𝐠 𝐭𝐨 𝐩𝐮𝐬𝐡 𝐒𝐧𝐨𝐨𝐩𝐲 𝐭𝐨 𝐭𝐡𝐞 𝐦𝐨𝐨𝐧!🌕</p>
          </div>
        <div className='address_details'>
          <table>
            <tr>
            <td>Presale Address</td>
            <td><a href="javascript:void(0)">0x9541B7BfA98bb0aEbc0a9D68A08A5e9fBfC957Ae</a>
            </td>
            </tr>
            <tr>
            <td>Token Name</td>
            <td>Snoopy Inu</td>
            </tr>
            <tr>
            <td>Token Symbol</td>
            <td>Snoopy</td>
            </tr>
            <tr>
            <td>Token Decimals</td>
            <td>18</td>
            </tr>
            <tr>
            <td>Token Address</td>
            <td><a href="javascript:void(0)">0x9541B7BfA98bb0aEbc0a9D68A08A5e9fBfC957Ae</a></td>
            </tr>
            <tr>
            <td>Total Supply</td>
            <td>420,690,000,000,000 Snoopy</td>
            </tr>
            <tr>
            <td>Tokens For Presale</td>
            <td>226,710,676,995,622 Snoopy</td>
            </tr>
            <tr>
            <td>Tokens For Liquidity</td>
            <td>109,841,323,004,378.86 Snoopy</td>
            </tr>
            <tr>
            <td>Initial Market Cap (estimate)</td>
            <td>$12,206</td>
            </tr>
            <tr>
            <td>Soft Cap</td>
            <td>10 BNB</td>
            </tr>
            <tr>
            <td>Presale Start Time</td>
            <td>2023.05.30 06:30 (UTC)</td>
            </tr>
            <tr>
            <td>Presale End Time</td>
            <td>2023.06.02 14:00 (UTC)</td>
            </tr>
            <tr>
            <td>Listing On</td>
            <td><a href="javascript:void(0)" >Pancakeswap</a></td>
            </tr>
            <tr>
            <td>Liquidity Percent</td>
            <td>51%</td>
            </tr>
            <tr>
            <td>Liquidity Lockup Time</td>
            <td>00 days after pool ends</td>
            </tr>
            <tr>
            </tr>
          </table>
       </div>
        </div>
        <div className='view_details_right'>
         <div className='card_item_one'>
         <div className='paragrapah_top'>
          <p>Make sure the website is pinksale.finance!</p>
         </div>
         </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Blog
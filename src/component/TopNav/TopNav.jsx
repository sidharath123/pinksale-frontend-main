import React, { useEffect, useState } from 'react'
import { AiOutlineLineChart } from "react-icons/ai"
import '../Navbar.css';
import logoImg from '../../Images/logo.png'
import bscImg from '../../Images/BSC.png'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const TopNav = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(()=>{
    props.CollapsedClose(collapsed)
  }, [collapsed])
  
  return (
    <>
      <div className='sliderr'>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <div className='inner-sidebar'>
          <div >
            <img src={logoImg} alt=' ' width="36px" />
            <p className='dis-none' style={{ paddingLeft: "12px", fontSize: "16px", fontWeight: "400" }}>PinkSale</p>
          </div>
          <div>
            <button className='btn'><AiOutlineLineChart />  <span style={{ marginLeft: "5px" }}>dexview.com</span></button>
            <button className='btn'><span><img src={bscImg} alt="" width="24px" style={{ marginRight: "8px" }} /></span><span className='dis-none'>BSC MAINNET</span></button>
            <button className='btn connect'><span>CONNECT</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNav
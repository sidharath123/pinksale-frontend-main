import { React, useState } from 'react';
import './Navbar.css';
import { Button, Layout, Menu, theme } from 'antd';
import BodyContent from './Bodycontent/BodyContent';
import TopNav from './TopNav/TopNav';
import SideBar from './SideBar/SideBar';
import LaunchpadProtocol from './LaunchpadProtocol/LaunchpadProtocol';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayoutLaunchpad from './LaunchpadProtocol/MainLayoutLaunchpad';
import CreateLaunchpad from './CreateLaunchpad/CreateLaunchpad';
import CreateToken from './CreateToken/CreateToken';
import LaunchpadList from './LaunchpadList/LaunchpadList';
import Token from './Token/Token';
import Blog from './ViewSection/Blogs/BlogPage';
import CreateLock from './createLock/CreateLock';
import Liquidity from './Liquidity/Liquidity';




const { Header, Sider, Content } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

 

  const CollapsedClose = (CollapsedClose) => {
    setCollapsed(CollapsedClose)
  }

  console.log(collapsed, "dsfgg")

  return (
    <BrowserRouter>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, }}>
          <TopNav CollapsedClose={CollapsedClose} />
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <SideBar collapsed={collapsed} />
          </Sider>
          <Content>
            <Routes>
              <Route path='/' element={<BodyContent />}>
                <Route path="/" element={<MainLayoutLaunchpad />} />
                <Route path="createlaunchpad" element={<CreateLaunchpad />} />
                <Route path="createtoken" element={<CreateToken />} />
                <Route path="launchpadlist" element={<LaunchpadList />} />
                <Route path="createlock" element={<CreateLock/>} />
                <Route path="token" element={<Token/>} />
                <Route path="/lauchpadlist/item-number" element={<Blog/>} />
                <Route path="/liquidity" element={<Liquidity/>} />
                
              </Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>

    </BrowserRouter>


  )
}

export default Navbar
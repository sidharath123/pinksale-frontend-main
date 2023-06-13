import React, { useEffect, useState } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import "../Navbar.css";
import "./topnav.css";
import logoImg from "../../Images/logo.png";
import bscImg from "../../Images/BSC.png";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, Form, Modal } from "antd";
// import CreateToken from '../CreateToken/CreateToken';
import BscMainNet from "../BscMainNet/BscMainNet";
import Connect from "../Connect/Connect";

const TopNav = (props) => {
  //  this is for model
  const [modelCreated, setModelCreated] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [isOpen2, setIsopen2] = useState(false);
  const [form] = Form.useForm();

  const modalHandle = () => {
    setIsopen2(true);
  };
  const modalHandleCancel = () => {
    setIsopen(false);
  };

  //connect modal
  const connectHandle = () => {
    setIsopen(true);
  };
  const connectHandleCancel = () => {
    setIsopen2(false);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    props.CollapsedClose(collapsed);
  }, [collapsed]);

  return (
    <>
      <Modal
        width={550}
        open={isOpen}
        footer={null}
        onCancel={modalHandleCancel}
      >
        <div className="_parent">
        <Connect />
        
        </div>
      </Modal>

      <Modal
        width={550}
        open={isOpen2}
        footer={null}
        onCancel={connectHandleCancel}
      >
        <div className="_parent">
        <BscMainNet />
        </div>
      </Modal>

      <div className="sliderr">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <div className="inner-sidebar">
          <div>
            <img src={logoImg} alt=" " width="36px" />
            <p
              className="dis-none"
              style={{
                paddingLeft: "12px",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              PinkSale
            </p>
          </div>
          <div>
            <button className="btn">
              <AiOutlineLineChart />{" "}
              <span style={{ marginLeft: "5px" }}>dexview.com</span>
            </button>
            <button className="btn" onClick={modalHandle}>
              <span>
                <img
                  src={bscImg}
                  alt=""
                  width="24px"
                  style={{ marginRight: "8px" }}
                />
              </span>
              <span className="dis-none">BSC MAINNET</span>
              {modelCreated && <p>Model created successfully!</p>}
            </button>

            <button className="btn connect" onClick={connectHandle}>
              <span>CONNECT</span>
              {modelCreated && <p>Model created successfully!</p>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;

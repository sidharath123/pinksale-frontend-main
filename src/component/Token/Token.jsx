import React from "react";
import { Image, Table, Tabs } from "antd";
import emoji from '../../Images/emoji.png'
///styles
import './styles.css'
import TableCom from "./Table";

const items = [
    {
      key: '1',
      label: `All`,
      children: <TableCom/>,
    },
    {
      key: '2',
      label: `My Lock`,
      children: `Content of Tab Pane 2`,
    },
   
  ];
const Token = () => (
  <>
    <div className="container">
      <div className="tabular_data">
      <div className="input">
        <input type="text" style={{   width: "100%",
   padding: "7px", 
   border: "1px solid #D9D9D9",
   marginTop:"30px",
   outline: "none",
   borderRadius:"5px"}}/>
      </div>
      <div className="AllMyLock" >
      <Tabs defaultActiveKey="1" items={items}  />
      </div>

     
      </div>
    </div>
  </>
);

export default Token;

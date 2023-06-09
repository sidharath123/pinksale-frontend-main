import React from 'react'
import { Image, Table,  } from "antd";
import emoji from '../../Images/emoji.png';

const TableCom = () => {
    const columns = [
        {
          title: "Token",
          dataIndex: "name",
        },
        {
          title: "Amount",
          dataIndex: "age",
        },
        {
          title: "View",
          dataIndex: "address",
        },
      ];
      const data = [
        {
          key: "1",
          name:  <div style={{display:"flex",alignItems:"center"}}> 
              <div className="left-col">
              <Image src={emoji} />
              </div>
              <br/>
              <div className="right-col" style={{display:"flex",flexDirection:"column"}}>
                  <p style={{margin:"0",fontSize:"14px"}}>HKMoon</p>
                  <p style={{margin:"0",fontSize:"13px",color:"rgba(0, 0, 0, 0.45)"}}>HKMoon</p>
              </div>
              </div> ,
                            
          age: "3,249,605,511,136.9754",
          address: "View",
        },
        {
          key: "2",
          name: <div style={{display:"flex",alignItems:"center"}}> 
          <div className="left-col">
          <Image src={emoji} />
          </div>
          <div className="right-col" style={{display:"flex",flexDirection:"column"}}>
              <p style={{margin:"0",fontSize:"14px"}}>PEPEAI</p>
              <p style={{margin:"0",fontSize:"13px",color:"rgba(0, 0, 0, 0.45)"}}>PEPEAI</p>
          </div>
          </div>,

          age: "210,652,302,305",
          address: "View",
        },
        {
          key: "3",
          name: <div style={{display:"flex",alignItems:"center"}}> 
          <div className="left-col">
          <Image src={emoji} />
          </div>
          <div className="right-col" style={{display:"flex",flexDirection:"column"}}>
              <p style={{margin:"0",fontSize:"14px"}}>HKMoon</p>
              <p style={{margin:"0",fontSize:"13px",color:"rgba(0, 0, 0, 0.45)"}}>HKMoon</p>
          </div>
          </div>,

          age: "29,027,610,000,000",
          address: "View",
        },
        {
          key: "4",
          name: <div style={{display:"flex",alignItems:"center"}}> 
          <div className="left-col">
          <Image src={emoji} />
          </div>
          <div className="right-col" style={{display:"flex",flexDirection:"column"}}>
              <p style={{margin:"0",fontSize:"14px"}}>Pepe Original Version</p>
              <p style={{margin:"0",fontSize:"13px",color:"rgba(0, 0, 0, 0.45)"}}>Pepe Original Version</p>
          </div>
          </div>,
          age: "70,000,000",
          address: "View",
        },
        {
          key: "5",
          name: <div style={{display:"flex",alignItems:"center"}}> 
          <div className="left-col">
          <Image src={emoji} />
          </div>
          <div className="right-col" style={{display:"flex",flexDirection:"column"}}>
              <p style={{margin:"0",fontSize:"14px"}}>Macepepe Coin</p>
              <p style={{margin:"0",fontSize:"13px",color:"rgba(0, 0, 0, 0.45)"}}>Macepepe Coin</p>
          </div>
          </div>,
          age: "1,000,000,000,000",
          address: "View",
        },
        {
          key: "6",
          name: <div style={{display:"flex",alignItems:"center"}}> 
          <div className="left-col">
          <Image src={emoji} />
          </div>
          <div className="right-col" style={{display:"flex",flexDirection:"column"}}>
              <p style={{margin:"0",fontSize:"14px"}}>PEPECEO</p>
              <p style={{margin:"0",fontSize:"13px",color:"rgba(0, 0, 0, 0.45)"}}>PEPECEO</p>
          </div>
          </div>,
          age: "170,000,000,000,000",
          address: "View",
        },
        {
          key: "7",
          name: <div style={{display:"flex",alignItems:"center"}}> 
          <div className="left-col">
          <Image src={emoji} />
          </div>
          <div className="right-col" style={{display:"flex",flexDirection:"column"}}>
              <p style={{margin:"0",fontSize:"14px"}}>CHARZ</p>
              <p style={{margin:"0",fontSize:"13px",color:"rgba(0, 0, 0, 0.45)"}}>CHARZ</p>
          </div>
          </div>,
          age: "2,000,000,000,000",
          address: "View",
        },
        {
          key: "5",
          name: <div style={{display:"flex",alignItems:"center"}}> 
          <div className="left-col">
          <Image src={emoji} />
          </div>
          <div className="right-col" style={{display:"flex",flexDirection:"column"}}>
              <p style={{margin:"0",fontSize:"14px"}}>OpenCampus</p>
              <p style={{margin:"0",fontSize:"13px",color:"rgba(0, 0, 0, 0.45)"}}>OpenCampus</p>
          </div>
          </div>,
          age: "85,000,000",
          address: "View",
        },
        {
          key: "5",
          name: <div style={{display:"flex",alignItems:"center"}}> 
          <div className="left-col">
          <Image src={emoji} />
          </div>
          <div className="right-col" style={{display:"flex",flexDirection:"column"}}>
              <p style={{margin:"0",fontSize:"14px"}}>MARIO CEO</p>
              <p style={{margin:"0",fontSize:"13px",color:"rgba(0, 0, 0, 0.45)"}}>MARIO CEO</p>
          </div>
          </div>,
          
          age: "6,000,000",
          address: "View",
        },
        {
            key: "5",
            name: <div style={{display:"flex",alignItems:"center"}}> 
            <div className="left-col">
            <Image src={emoji} />
            </div>
            <div className="right-col" style={{display:"flex",flexDirection:"column"}}>
                <p style={{margin:"0",fontSize:"14px"}}>BTC REWARDS</p>
                <p style={{margin:"0",fontSize:"13px",color:"rgba(0, 0, 0, 0.45)"}}>BTC REWARDS</p>
            </div>
            </div>,
            
            age: "6,000,000",
            address: "View",
          }
      ];
      
  return (
       <div className="table">
        <Table columns={columns} dataSource={data} size="middle" />
        
      </div>
  )
}

export default TableCom

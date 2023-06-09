import React from "react";
import "../BscMainNet/BscMainNet.css";
import { Button } from "antd";
import img1 from '../../Images/dogchain.png'
import img2 from '../../Images/img2.png'
import img3 from '../../Images/img3.png'
import img4 from '../../Images/img4.png'

const buttondata = [
  {
    img: img1,
    text: "etherum",
  },
  {
    img: img2,
    text: "Matic(polygon)",
  },
  {
    img: img3,
    text: "Avalanche",
  },
  {
    img: img4,
    text: "Cronos",
  },
];

export default function BscMainNet() {
  return (
    <div className="bsc_testnet_modal">
      <div className="chhose_network_container">
        <p>
          <strong>Choose network</strong>
        </p>
      </div>
      <div className="network_item">
        {buttondata.map((item) => (
            <Button type="" className="network_item_content">
            <div className="_imgheight">
            <img src={item.img} alt="" />
            </div>
            <div className="_imgtext">{item.text}</div>
          </Button>
        )
        )}
      </div>
    </div>
  );
}

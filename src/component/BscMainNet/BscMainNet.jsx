import React from "react";
import "../BscMainNet/BscMainNet.css";
import { Button } from "antd";
import img1 from "../../Images/etheram.svg";
import img2 from "../../Images/matic.png";
import img3 from "../../Images/avalanche.svg";
import img4 from "../../Images/coronos.svg";
import img5 from "../../Images/dogchain.png";
import img6 from "../../Images/pulseChain.png";

import img7 from "../../Images/fantom.svg";
import img8 from "../../Images/alvey.svg";

import img9 from "../../Images/bnb.png";
import img10 from "../../Images/matic.png";


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
  {
    img: img5,
    text: "DogeChain",
  },
  {
    img: img6,
    text: "PulseChain",
  },
  {
    img: img7,
    text: "Fantom Opera",
  },
  {
    img: img8,
    text: "Alvey",
  },



  {
    img: img9,
    text: "BNB Smart Chain",
  },
  {
    img: img10,
    text: "Matic Mumbai",
  },
  

];

export default function BscMainNet() {
  return (
    <div className="bsc_testnet_modal">
      <div className="chhose_network_container">
        <p>
          <strong>Choose Network</strong>
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
        ))}
      </div>
    </div>
  );
}

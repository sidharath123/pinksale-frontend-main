import React from "react";
import "../Connect/connect.css";

import { Button } from "antd";
import img1 from "../../Images/metamask.svg";
import img2 from "../../Images/coinbaseWallet.png";
import img3 from "../../Images/wallet.svg";
import img4 from "../../Images/trust.svg";

import img5 from "../../Images/safe.jpg";
import img6 from "../../Images/MathWallet.png";
import img7 from "../../Images/TokenPocket.png";
import img8 from "../../Images/bitkeep.png";


const ConnectData = [
  {
    img: img1,
    text: "Metamask",
  },
  {
    img: img2,
    text: "Coinbase Wallet",
  },
  {
    img: img3,
    text: "WalletConnect",
  },
  {
    img: img4,
    text: "TrustWallet",
  },
  {
    img: img5,
    text: "Safepal",
  },

  {
    img: img6,
    text: "Math Wallet",
  },
  {
    img: img7,
    text: "TokenPocket",
  },
  {
    img: img8,
    text: "BitKeep",
  },
  
  

  
];

export default function Connect() {
  return (
    <div className="bsc_testnet_modal">
      <div className="chhose_network_container">
        <p>
          <strong>Connect To Wallet</strong>
        </p>
      </div>
      <div className="network_item">
        {ConnectData.map((item) => (
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

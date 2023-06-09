import React, { useState } from "react";
import "./TokenAddress.css";
import { Checkbox,Form ,Input, Modal} from "antd";
import CreateToken from "../../CreateToken/CreateToken";



const TokenAddress = () => {
  const [modelCreated, setModelCreated] = useState(false);
  const [ isOpen,setIsopen] =useState(false)
  const [form] = Form.useForm();
  


  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
const modalHandle = ()=>{
  setIsopen(true)
}
const modalHandleCancel = ()=>{
  setIsopen(false)
}
  return (
    <>
    <Modal
     open={isOpen}

      footer={null}
      onCancel={modalHandleCancel}>
        <CreateToken/>
      </Modal>
    <div className="container">
      <div className="sub-container">
        <p className="required">(*) is required field.</p>
        <div>
          <div className="address_token">
            <p>
              Token address <sup className="required">*</sup>
            </p>
            {/* <div>
              <button className='create_toukan'>Create token</button>
            </div> */}
            <div>
              <button onClick={modalHandle}>Create Model</button>
              {modelCreated && <p>Model created successfully!</p>}
            </div>
          </div>
          <div></div>
        </div>
        <div className="inputBox">
          <input type="text" />
          <p className="pool">Pool creation fee: 1 BNB</p>
        </div>
        <div className="chechboxDiv">
          <h3 className="currency">Currency</h3>
          <Checkbox onChange={onChange}>BNB</Checkbox>
          <Checkbox onChange={onChange}>BUSD</Checkbox>
          <Checkbox onChange={onChange}>USDT</Checkbox>
          <Checkbox onChange={onChange}>USDC</Checkbox>
        </div>
        <p className="pool">Users will pay with BNB for your token</p>

        <div className="chechboxDiv">
          <h3 className="currency">Fee Options</h3>
          <Checkbox onChange={onChange}>
            5% BNB raised only <span className="pool">(Recommended)</span>
          </Checkbox>
          <Checkbox onChange={onChange}>Others</Checkbox>
        </div>
        <div className="chechboxDiv">
          <h3 className="currency">Listing Options</h3>
          <Checkbox onChange={onChange}>Auto Listing</Checkbox>
          <Checkbox onChange={onChange}>Manual listing</Checkbox>
        </div>

        <div className="chechboxDiv">
          <h3 className="currency">Affiliate Program</h3>
          <Checkbox onChange={onChange}>Disable Affiliate</Checkbox>
          <Checkbox onChange={onChange}>Enable Affiliate</Checkbox>
        </div>

        <div className="req-footer">
          <p>
            For auto listing, after you finalize the pool your token will be
            auto listed on DEX.
          </p>
        </div>
        <div className="nextBtn">
          <button>Next</button>
        </div>
      </div>
    </div>
            </>
  );
};

export default TokenAddress;

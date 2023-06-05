import Footer from "../footer/Footer";
import "./Liquidity.css";
import { Checkbox, Form, Input, Tabs } from "antd";
import { Pagination } from "@mui/material";
import emoji from "../../Images/emoji.png";

import React from "react";


const Liquidity = () => {
  const [form] = Form.useForm();

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Token`,
      src: emoji,
    },
    {
      key: "2",
      label: `Amount`,
      children: "3,249,605,511,136.9754 ",
    },
    {
      key: "3",
      label: `View`,
      children: "view",
    },
  ];

  return (
    <div className="createLaunchPad">
      <div className="container">
        <div className="sub-container">
          <div>
            <div>
              <Form
                layout="vertical"
                form={form}
                style={{
                  maxWidth: "100%",
                }}
              >
                <Form.Item label="" required>
                  <Input />
                </Form.Item>
              </Form>
            </div>
            <br />
            <div className="AllLock">
              <div className="All">
                <a href="to">All</a>
              </div>
              <div className="MyLock">
                <a href="to">MyLock</a>
              </div>
            </div>
            <br/>
            <div>
              <Tabs
                className="token_tab"
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
              />

              <div className="main-contaiober">
                <div className="img">
                  <img src={emoji} alt="" />
                </div>

                <div className="text">Pepe Floki/Wrapped BNB  </div>

                <div className="amount-txt">3,249,605,511,136.9754</div>
                <div className="view-txt">
                  <a href="">View</a>
                </div>
              </div>

              <div className="main-contaiober">
                <div className="img">
                  <img src={emoji} alt="" />
                </div>
                <div className="text">Pepe Floki/Wrapped BNB  </div>

                <div className="amount-txt">3,249,605,511,136.9754</div>
                <div className="view-txt">
                  <a href="">View</a>
                </div>
              </div>

              <div className="main-contaiober">
                <div className="img">
                  <img src={emoji} alt="" />
                </div>
                <div className="text">Pepe Floki/Wrapped BNB  </div>

                <div className="amount-txt">3,249,605,511,136.9754</div>
                <div className="view-txt">
                  <a href="">View</a>
                </div>
              </div>

              <div className="main-contaiober">
                <div className="img">
                  <img src={emoji} alt="" />
                </div>
                <div className="text">Pepe Floki/Wrapped BNB  </div>

                <div className="amount-txt">3,249,605,511,136.9754</div>
                <div className="view-txt">
                  <a href="">View</a>
                </div>
              </div>

              <div className="main-contaiober">
                <div className="img">
                  <img src={emoji} alt="" />
                </div>
                <div className="text">Pepe Floki/Wrapped BNB  </div>

                <div className="amount-txt">3,249,605,511,136.9754</div>
                <div className="view-txt">
                  <a href="">View</a>
                </div>
              </div>

              <div className="main-contaiober">
                <div className="img">
                  <img src={emoji} alt="" />
                </div>
                <div className="text">Pepe Floki/Wrapped BNB  </div>

                <div className="amount-txt">3,249,605,511,136.9754</div>
                <div className="view-txt">
                  <a href="">View</a>
                </div>
              </div>

              <div className="main-contaiober">
                <div className="img">
                  <img src={emoji} alt="" />
                </div>
                <div className="text">Pepe Floki/Wrapped BNB  </div>

                <div className="amount-txt">3,249,605,511,136.9754</div>
                <div className="view-txt">
                  <a href="">View</a>
                </div>
              </div>

              <div className="main-contaiober">
                <div className="img">
                  <img src={emoji} alt="" />
                </div>
                <div className="text">Pepe Floki/Wrapped BNB  </div>

                <div className="amount-txt">3,249,605,511,136.9754</div>
                <div className="view-txt">
                  <a href="">View</a>
                </div>
              </div>

              <div className="pagination">
                <Pagination count={10} variant="outlined" shape="rounded" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Liquidity;

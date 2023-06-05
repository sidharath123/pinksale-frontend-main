import React, { useState } from 'react'
import './LaunchpadList.css'
import { Input } from 'antd';
import { Select } from 'antd';
import CardItem from './cards/CardItem';
import Affiliate from './Affiliate/Affiliate';

const { Option } = Select;

const LaunchpadList = () => {
  const [active, setActive] = useState(1)

  const hendleActive = (val) => {
    setActive(val)
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className='container'>
      <div className='sub_container Current_Presales_section'>
        <div className='heading'>
          <h1>Current Presales</h1>
        </div>
        <div className='all_launchpad_section'>
          <span className={`launchpad_items ${active === 1 ? "activeMode" : ""}`} onClick={() => hendleActive(1)}><a className='active' href="#">All launchpads</a></span>
          <span className={`launchpad_items ${active === 2 ? "activeMode" : ""}`} onClick={() => hendleActive(2)}><a href="#">Advanced Mode</a></span>
          <span className={`launchpad_items ${active === 3 ? "activeMode" : ""}`} onClick={() => hendleActive(3)}><a href="#">My Contributions</a></span>
        </div>
        <div className='main_input_box'>
          <div>
            
          <div>
            <Input placeholder="Enter token name and token symbol" />
          </div>
          </div>
          <div className='fillterVal'>
            <div className='subFillterVal'>
              <label>Filter By</label>
              <Select defaultValue="No Filter" onChange={handleChange}>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
              </Select>
            </div>
            <div className='subFillterVal'>
              <label>Pool Type</label>
              <Select defaultValue="No Filter" onChange={handleChange}>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
              </Select>
            </div>
            <div className='subFillterVal'>
              <label>Sort By</label>
              <Select defaultValue="No Filter" onChange={handleChange}>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
              </Select>
            </div>
            <div className='subFillterVal'>
              <label>Chain</label>
              <Select defaultValue="No Filter" onChange={handleChange}>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className='card_Item'>
      <Affiliate/>
      <CardItem/>
      <CardItem/>
      <CardItem/>
      <Affiliate/>
      
      <CardItem/>
      <CardItem/>
      <CardItem/>
      <Affiliate/>
      <CardItem/>
      <CardItem/>
      <CardItem/>
      <Affiliate/>
      <CardItem/>
      <CardItem/>
      <CardItem/>
      <Affiliate/>
      <CardItem/>
      <CardItem/>
      <CardItem/>
      <Affiliate/>
      <CardItem/>
      <CardItem/>
      <CardItem/>
      <Affiliate/>
      <CardItem/>
      <CardItem/>
      <CardItem/>
      <Affiliate/>
      </div>
    </div>
  )
}

export default LaunchpadList
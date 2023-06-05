import React, { useState } from 'react'
import { Card } from 'antd';
import logoImg from '../../../Images/logo.png'
import './TokenSalesCard.css'
import TokenSales from '../../../TokenSales.json'
const { Meta } = Card;

const TokenSalesCard = (props) => {

    const [data, setData] = useState({})

    useState(()=>{
        setData(TokenSales)
    },[])


    console.log(data, "dfzsdvdf")

    return (
        <div className='mainCardContainer'>
        {
            data?.length &&  data?.map((res)=>{
                return(
                    <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img className='card-images' alt="example" src={logoImg} width="75px" />}
            >
                <Meta title={res?.tital} description={res?.dis} />
            </Card>
                )
            })
        }
            
        </div>
    )
}

export default TokenSalesCard
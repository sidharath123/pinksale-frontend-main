import React, { useState } from 'react'
import "./VerifyToken.css"
import veri from '../../../Verify.json'

const VerifyToken = () => {
  const [active, setActive] = useState(1);

  const handleActive =(val)=>{

    console.log(val, "dfdsfsd")
    setActive(val)

  }

  return (
    <>
    <div className='main-container container'>
      {
        veri?.map((res)=>{
          return(
            <div className='card'>
              <div className='titals' onClick={()=>handleActive(res?.id)}>
              <p className={`number ${active == res?.id? "active":""}`} >{res?.id}</p> 
                <h2 className=''>{res?.tital}</h2>
              </div>
              <div>
                <p className='desc'>{res?.des}</p>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default VerifyToken
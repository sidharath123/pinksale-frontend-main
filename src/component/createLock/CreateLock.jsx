
import React from 'react'
import './createLock.css'
import image1 from '../../Images/img1.png'
import image2 from '../../Images/img2.png'
import image3 from '../../Images/img3.png'
import image4 from '../../Images/img4.png'
import image5 from '../../Images/img7.png'
import image6 from '../../Images/img6.png'
import { Checkbox, Form, Input, } from 'antd';
import { DatePicker, Space } from 'antd';
import pinklock_icon from '../../Images/pinklock_icon.png'


const onChange = (date, dateString) => {
    console.log(date, dateString);
};


const CreateLock = () => {
    const [form] = Form.useForm();

    return (
        <>
            <div className='container'>
                <div className='create_lock_main'>
                    <div className='para'>
                        <p>Create your lock</p>
                    </div>
                    <div className='pinklock_audited_section'>
                        <p>PinkLock is audited by:</p>
                        <div className='image_section'>
                            <div>
                                <img src={image1} alt='' className='inner_image_section bg_black' />
                            </div>
                            <div>
                                <img src={image2} alt='' className='inner_image_section' />
                            </div>
                            <div>
                                <img src={image3} alt='' className='inner_image_section' />
                            </div>
                            <div>
                                <img src={image4} alt='' className='inner_image_section bg_white' />
                            </div>
                            <div>
                                <img src={image5} alt='' className='inner_image_section bg_change' />
                            </div>
                            <div>
                                <img src={image6} alt='' className='inner_image_section' />
                            </div>
                        </div>


                    </div>

                    <p className='required'>(*) is required field.</p>
                    <div>
                        <div className='address_token'>
                            <p>Token or LP Token address* <sup className='required'></sup></p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <Form
                            layout="vertical"
                            form={form}
                            style={{
                                maxWidth: "100%",
                                lineHeight: "3"
                            }}
                        >
                            <select className='selectedBox'>
                                <option value="" selected disabled>Standard Token</option>
                                <option value="">Standard Token</option>
                                <option value="">Standard Token</option>
                                <option value="">Standard Token</option>
                            </select>
                            <Checkbox>use another owner?</Checkbox>

                            {/* <p className='pool'>0.2 BNB</p> */}
                            <Form.Item className='title amount_label' label="Title" required>
                                <Input placeholder="Ex: My Lock" />
                            </Form.Item>
                            <Form.Item className='amount_label' label="Amount" required>
                                <Input className='amount_section' placeholder="Enter Amount" />
                                <p className='amount_max'>MAX</p>
                            </Form.Item>
                            <Checkbox>use vesting?</Checkbox>
                            <Form.Item className='lock_until amount_label' label="Lock until (UTC time)" required>
                                <DatePicker onChange={onChange} />
                            </Form.Item>
                            <Checkbox className='pink_anti_bot_system'>Implement Pink Anti-Bot System?</Checkbox>

                        </Form>
                        <div className='pinklock_address_bottom'>
                            <p>Please exclude PinkLock's lockup address
                                <button className='pinklock_icon'>
                                    <b>0x407993575c91ce7643a4d4cCACc9A98c36eE1BB</b>{" "} 
                                    <img  src={pinklock_icon} alt="pinklock icon" />
                                </button>
                                from fees, rewards, max tx amount to start locking tokens.
                                We don't support rebase tokens.</p>
                        </div>
                        <div className='nextBtn'>
                            <button>Create Token</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CreateLock;


import React from 'react'
import "./CreateToken.css"
import { Checkbox, Form, Input, } from 'antd';
import Footer from '../footer/Footer';

const CreateToken = () => {
    const [form] = Form.useForm();

    

    return (
        <>
            <div className='createLaunchPad'>
                <div className='container'>
                    <div className='sub-container'>
                        <p className='required'>(*) is required field.</p>
                        <div>
                            <div className='address_token'>
                                <p>Token address <sup className='required'>*</sup></p>
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
                                }}
                            >
                                <select className='selectedBox'>
                                    <option value="" selected disabled>Standard Token</option>
                                    <option value="">Standard Token</option>
                                    <option value="">Standard Token</option>
                                    <option value="">Standard Token</option>
                                </select>

                                <p className='pool'>0.2 BNB</p>
                                <Form.Item label="Name" required>
                                    <Input placeholder="Standard Token" />
                                </Form.Item>
                                <Form.Item label="Symbol" required>
                                    <Input placeholder="Standard Token" />
                                </Form.Item>
                                <Form.Item label="Decimals" required>
                                    <Input placeholder="Standard Token" />
                                </Form.Item>
                                <Form.Item label="Total supply" required>
                                    <Input placeholder="Standard Token" />
                                </Form.Item>
                                <Checkbox>Implement Pink Anti-Bot System?</Checkbox>
                            </Form>
                            <div className='nextBtn'>
                                <button>Create Token</button>
                            </div>
                        </div>
                    </div>
                    {/* <Footer/> */}
                </div>
            </div>
        </>
    )
}

export default CreateToken
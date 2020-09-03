import React, { useState } from 'react';
import { Button, Row, Col, Select, Form, Input, Upload, message } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import './index.scss';

const FormItem = Form.Item;


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
function CreatePeople() {
    const dispatch = useDispatch();
    const { TextArea } = Input;
    const history = useHistory();
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState('')
    const [loading, setloading] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [imageUrl, setimageUrl] = useState('')



    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    function handleChange(info) {
        if (info.file.status === 'uploading') {
            setloading(true)
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => setimageUrl(imageUrl), setloading(false)

            );
        }
    };
    function searchSkills (){

    }

    function validateName({ target }) {
        if (target.value === "") setUserNameError('')
        // else if (/^[A-Za-z]+$/.test(target.value)) return null
        else if (target.value.trim().length >= 3) return null
        else setUserNameError('you need to enter atleast 3 chares')
    }
    // function validateEmail({ target }) {
    //     if (target.value === "") setUserEmailError('')
    //     else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(target.value)) return null
    //     else setUserEmailError('You have entered an invalid email address!')
    // }
    function loginHere() {

    }

    return (
        <div className="addemp-main">
            <Row style={{ borderBottom: "1px solid red" }}>
                <Col span={12}>
                    ADD EMPLOYEE
                </Col>
                <Col span={12} className="sb-button">
                    <Link to="/organization/directory"><Button >Back To Directory</Button></Link>
                    <Link to="/skill"><Button >Back To Skills</Button></Link>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div className="addemp-form-block">
                        <Form className="addemp-form">
                            <Row>
                                <Col span={8}>
                                    <Form.Item>
                                        <h4>Employee Name</h4>
                                        <Input
                                            type="text"
                                            className="conteactInput"
                                            value={userName}
                                            onBlur={validateName}
                                            onChange={(e) => { setUserName(e.target.value); userName.length >= 3 && setUserNameError('') }}
                                        />
                                        <span className="input-error">{userNameError || ''}</span>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item>
                                        <h4>Employee ID</h4>
                                        <Input
                                            type="text"
                                            className="conteactInput"
                                            value={userName}
                                            onBlur={validateName}
                                            onChange={(e) => { setUserName(e.target.value); userName.length >= 3 && setUserNameError('') }}
                                        />
                                        <span className="input-error">{userNameError || ''}</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <Form.Item>
                                        <h4>Employee Designation</h4>
                                        <Input
                                            type="text"
                                            className="conteactInput"
                                            value={userName}
                                            onBlur={validateName}
                                            onChange={(e) => { setUserName(e.target.value); userName.length >= 3 && setUserNameError('') }}
                                        />
                                        <span className="input-error">{userNameError || ''}</span>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item>
                                        <h4>Reporting To</h4>
                                        <Input
                                            type="text"
                                            className="conteactInput"
                                            value={userName}
                                            onBlur={validateName}
                                            onChange={(e) => { setUserName(e.target.value); userName.length >= 3 && setUserNameError('') }}
                                        />
                                        <span className="input-error">{userNameError || ''}</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <Form.Item>
                                        <h4>Team</h4>
                                        <Input
                                            type="text"
                                            className="conteactInput"
                                            value={userName}
                                            onBlur={validateName}
                                            onChange={(e) => { setUserName(e.target.value); userName.length >= 3 && setUserNameError('') }}
                                        />
                                        <span className="input-error">{userNameError || ''}</span>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item>
                                        <h4>DOJ</h4>
                                        <Input
                                            type="text"
                                            className="conteactInput"
                                            value={userName}
                                            onBlur={validateName}
                                            onChange={(e) => { setUserName(e.target.value); userName.length >= 3 && setUserNameError('') }}
                                        />
                                        <span className="input-error">{userNameError || ''}</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <Form.Item>
                                        <h4>Profile Image</h4>
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            beforeUpload={beforeUpload}
                                            onChange={handleChange}
                                        >
                                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                        </Upload>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item>
                                        <h4>Add Skills</h4>
                                        <Input.Search placeholder="Search skills"
                                            className="conteactInput"
                                            onChange={searchSkills}
                                        />
                                        <span className="input-error">{userNameError || ''}</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div className="login-submit-btn">
                                <Button className="submit-btn" onClick={loginHere}>
                                    Submit
                                    </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default CreatePeople;
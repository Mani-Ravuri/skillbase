import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form, Input, message } from 'antd';
import Logo from "../../../../utils/images/logo.png";
import OfcEnv from "../../../../utils/images/ofc.jpg";
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { ExpandAltOutlined } from '@ant-design/icons';
import {loginType} from "../../actions";
import './index.scss';
import Password from 'antd/lib/input/Password';



function Login() {
    const dispatch = useDispatch();
    const { TextArea } = Input;
    const history = useHistory();
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState('')
    const [password, setpassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [passwordError, setpasswordError] = useState('')

    function validateName({ target }) {
        if (target.value === "") setUserNameError('')
        // else if (/^[A-Za-z]+$/.test(target.value)) return null
        else if (target.value.trim().length >= 3) return null
        else setUserNameError('you need to enter atleast 3 chares')
    }
    
    function loginHere() {
        if (userName != "" && password !="") {
            if (userName === "admin", password === "admin@123") {
                sessionStorage.setItem('isLogged', true)
                sessionStorage.setItem('user', "admin")
                dispatch(loginType("admin"))
                history.push('dashboard')
            }else if (userName === "geminite", password=== "geminite@123") {
                sessionStorage.setItem('isLogged', true)
                sessionStorage.setItem('user', "geminite")
                dispatch(loginType("geminite"))
                history.push('dashboard')
            }else {
                message.error("Invalid Inputs")
            }
        }else{
            message.warning("please fill the details")
        }
        

        // history.push('dashboard')
    }
    useEffect(() => {
        document.querySelector('.main-header-grid').classList.add('hidden');
        document.querySelector('.App-footer').classList.add('hidden');
        return () => {
            document.querySelector('.main-header-grid').classList.remove('hidden');
            document.querySelector('.App-footer').classList.remove('hidden');
        }
    }, [])
    return (
        // <div className="loginPage" style={{ backgroundImage: `linear-gradient(rgba(37, 37, 37, 0), rgba(38, 36, 43, 0.29)), url('${OfcEnv}')`, backgroundRepeat:"no-repeate" }}>
            <div className="loginPage">
            <Row>
                <Col span={14}>
                {/* <img src={OfcEnv} alt="logo" /> */}
                <p></p>
                </Col>
                <Col span={8}>
                    <div className="login-main">
                        <div className="logo-block">
                            <img src={Logo} alt="logo" />
                        </div>
                        <Form className="login-form-block">
                            <Form.Item>
                                <h4>User Name</h4>
                                <Input
                                    type="text"
                                    className="conteactInput"
                                    value={userName}
                                    onBlur={validateName}
                                    onChange={(e) => { setUserName(e.target.value); userName.length >= 3 && setUserNameError('') }}
                                />
                                <span className="input-error">{userNameError || ''}</span>
                            </Form.Item>
                            <Form.Item>
                                <h4>Password</h4>
                                <Input
                                    type="password"
                                    className="conteactInput"
                                    value={password}
                                    // onBlur={validateEmail}
                                    onChange={(e) => { setpassword(e.target.value); e.target.value !== '' && setpasswordError('') }}
                                />
                                <span className="input-error">{passwordError || ''}</span>
                            </Form.Item>
                            <div className="login-submit-btn">
                                <Button className="submit-btn" onClick={loginHere}>
                                    Submit
                                    </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
            <div></div>
        </div>
    )
}
export default Login;
import React,{ useState }  from 'react';
import {  Button, Row, Col, Input,Form } from 'antd';
import './index.scss';
// import { UserOutlined } from '@ant-design/icons';
const { Search } = Input;
function AddSkill() {
const [empName , setEmpName] = useState('');
const [empNameError, setEmpNameError] = useState('');

function validateName({ target }) {
    if (target.value === "") setEmpNameError('')
    // else if (/^[A-Za-z]+$/.test(target.value)) return null
    else if (target.value.trim().length >= 3) return null
    else setEmpNameError('you need to enter atleast 3 chares')
}

    return (
        <div className="add-skills-main">
            <Row>
                <h2> Add Skill</h2>
            </Row>
            <div className="skill-form">
                <Form className="addSkill-form-block">
                    <Row >
                        <Col span={8}>
                            <Form.Item>
                                <h4>Your name</h4>
                                <Input
                                    type="text"
                                    className="conteactInput"
                                    value={empName}
                                    onBlur={validateName}
                                    onChange={(e) => { setEmpName(e.target.value); empName.length >= 3 && setEmpNameError('') }}
                                />
                                <span className="input-error">{empNameError || ''}</span>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item>
                                <h4>Your name</h4>
                                <Input
                                    type="text"
                                    className="conteactInput"
                                    value={empName}
                                    onBlur={validateName}
                                    onChange={(e) => { setEmpName(e.target.value); empName.length >= 3 && setEmpNameError('') }}
                                />
                                <span className="input-error">{empNameError || ''}</span>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default AddSkill;

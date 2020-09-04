import React, { useState } from 'react';
import { Button, Row, Col, Select, Input, Form } from 'antd';
import './index.scss';
// import { UserOutlined } from '@ant-design/icons';
const { Search } = Input;
const { Option } = Select;
const FormItem = Form.Item;


function AddSkill() {
    const [skillName, setskillName] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamNameError, setTeamNameError] = useState('');
    const [skillNameError, setskillNameError] = useState('');

    
    const teamtypeChange = (e) => {
        if (e !== "") setTeamNameError = ""
        setTeamName(e)
    }
    function addSkills() {

    }

    return (
        <div className="add-skills-main content-height-100">
            <Row className="header-border">
                <h2> Add Skill</h2>
            </Row>
            <div className="skill-form">
                <Form className="addSkill-form-block">
                <Row >
                        <Col span={8}>
                            <FormItem className="InlineFormMarginRight">
                            <h4>Team Name</h4>
                                <Select placeholder="Select By Team" style={{ width: '250px' }}
                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                    onChange={teamtypeChange} value={teamName || undefined}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                    <Option value="Web">Web</Option>
                                    <Option value="Android">Android</Option>
                                    <Option value="IOS">Android</Option>
                                </Select>
                                <span className="input-error">{teamNameError || ''}</span>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={8}>
                            <Form.Item>
                                <h4>Skill Name</h4>
                                <Input
                                    type="text"
                                    className="conteactInput"
                                    value={skillName}
                                    onChange={(e) => { setskillName(e.target.value); skillName.length >= 3 && setskillNameError('') }}
                                />
                                <span className="input-error">{skillNameError || ''}</span>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Button type="primary" onClick={addSkills}> Add</Button>
            </div>
        </div >
    );
}

export default AddSkill;

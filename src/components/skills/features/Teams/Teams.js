import React, { useState } from 'react';
import { Button, Row, Col, Select, Input, Form, Menu, Dropdown } from 'antd';
import './teams.scss';
import AllSkills from '../../../../utils/components/ChildComponents/allSkills';
import { Link, useHistory } from "react-router-dom";
import SkillTabel from '../../../../utils/tabels/Skills';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RightOutlined } from '@ant-design/icons';
const { Search } = Input;
const { Option } = Select;
const FormItem = Form.Item;


function Allteams() {
    const history = useHistory();
    const Skills = useSelector(state => state.AllSkills, shallowEqual);
    const { teamMembers } = Skills;
    const [skillName, setskillName] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamNameError, setTeamNameError] = useState('');
    const [skillNameError, setskillNameError] = useState('');

    const teamtypeChange = (e) => {
        if (e !== "") setTeamNameError = ""
        setTeamName(e)
    }
    const onDropdownMenuSelect = (menu) =>{
        if (menu.key === 'Invite') history.push('/organization/directory/invite-people')
        else  history.push('/organization/directory/people')
    }
    function addSkills() {

    }

    const menu = (
        <Menu>
            <Menu.Item key="Invite" onClick={onDropdownMenuSelect}>
                <a href="">Invite People</a>
            </Menu.Item>
            <Menu.Item key="custome" onClick={onDropdownMenuSelect}>
                <a href="">Custome People</a>
            </Menu.Item>
            <Menu.Divider />
        </Menu>
    );

    return (
        <div className="add-skills-main">
            <Row className="header-border">
                <Col span={12}>
                    <h2>Teams</h2>
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Add People <RightOutlined />
                        </a>
                    </Dropdown>
                </Col>
            </Row>
            <div className="skill-form">
                <Form className="addSkill-form-block">
                    <Row >
                    
                        <Col span={4}>
                            <FormItem className="InlineFormMarginRight">
                                <h4>Location</h4>
                                <Select placeholder="Select Location" style={{ width: '170px' }}
                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                    onChange={teamtypeChange} value={teamName || undefined}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                    <Option value="Web">Hyderabad</Option>
                                    <Option value="Android">Vijayawada</Option>
                                    <Option value="IOS">Bhuvaneswar
                                    <Option value="usa">USA</Option>
                                    </Option>
                                </Select>
                                <span className="input-error">{teamNameError || ''}</span>
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem className="InlineFormMarginRight">
                                <h4>Team Name</h4>
                                <Select placeholder="Select By Team" style={{ width: '170px' }}
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
                        <Col span={4}>
                            <FormItem className="InlineFormMarginRight">
                                <h4>Skill Name</h4>
                                <Select placeholder="Select By Skill" style={{ width: '170px' }}
                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                    onChange={teamtypeChange} value={teamName || undefined}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                    <Option value="Web">React</Option>
                                    <Option value="Android">Angular</Option>
                                    <Option value="IOS">Ionic</Option>
                                </Select>
                                <span className="input-error">{teamNameError || ''}</span>
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem className="InlineFormMarginRight">
                                <h4>Security Group</h4>
                                <Select placeholder="Security Group" style={{ width: '170px' }}
                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                    onChange={teamtypeChange} value={teamName || undefined}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                    <Option value="Web">Admin</Option>
                                    <Option value="Android">Competency Manager</Option>
                                    <Option value="IOS">Geminite</Option>
                                </Select>
                                <span className="input-error">{teamNameError || ''}</span>
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem className="InlineFormMarginRight">
                                <h4>Rating</h4>
                                <Select placeholder="Select By Rating" style={{ width: '170px' }}
                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                    onChange={teamtypeChange} value={teamName || undefined}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                    <Option value="Web">Master</Option>
                                    <Option value="Android">Expert</Option>
                                    <Option value="IOS">Practitioner</Option>
                                    <Option value="IOS">Lerner</Option>
                                    <Option value="IOS">noVoice</Option>
                                </Select>
                                <span className="input-error">{teamNameError || ''}</span>
                            </FormItem>
                        </Col>
                        <Col span={4} className="flex-buttons">
                            <Button type="primary" onClick={addSkills}> Search</Button>
                            <Button type="primary" onClick={addSkills}> Clear</Button>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24}>
                            < SkillTabel data={teamMembers} />
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24}>
                            <AllSkills />
                        </Col>
                    </Row>
                </Form>
            </div>
        </div >
    );
}

export default Allteams;

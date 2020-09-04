import React, { useState } from 'react';
import { Button, Row, Col, Select, Form, Input } from 'antd';
import { Link, useHistory } from "react-router-dom";
import './index.scss';
import { MailOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;
const FormItem = Form.Item;
function InvitePeople() {

    const [skillName, setskillName] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamNameError, setTeamNameError] = useState('');
    const [skillNameError, setskillNameError] = useState('');

    const teamtypeChange = (e) => {
        if (e !== "") setTeamNameError = ""
        setTeamName(e)
    }
    return (
        <div className="invite-main content-height-100">
            <Row style={{ borderBottom: "1px solid #DFE1E5" }}>
                <Col span={12}>
                    Invite People
                </Col>
                <Col span={12} className="position-right">
                    <Link to="/organization/directory"><Button >Back To Directory</Button></Link>
                </Col>
            </Row>
            <Row style={{ padding: '1em 0' }}>
                <Col span={4}>
                    <FormItem className="InlineFormMarginRight">
                        <h4>Email</h4>
                        <Input type="text" style={{ width: '170px' }} placeholder="Enter Email" />
                        <span className="input-error">{teamNameError || ''}</span>
                    </FormItem>
                </Col>
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
            </Row>
            <Row>
                <Col span={24} style={{textAlign:"center"}}>
                    <FormItem className="InlineFormMarginRight">
                        <h4>Email Note</h4>
                        <TextArea type="text" rows={4} style={{ width: '500px' }} placeholder="Email Note" />
                        <span className="input-error">{teamNameError || ''}</span>
                    </FormItem>
                    <Button><MailOutlined />Send Invitation</Button>
                </Col>
            </Row>
        </div>
    )
}
export default InvitePeople;
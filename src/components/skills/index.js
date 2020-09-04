import React, { useState } from 'react';
import { Button, Row, Col, Select, Form } from 'antd';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import './index.scss';
import SkillsTabel from '../../utils/tabels/Skills';
import SkillTree from '../../utils/components/ChildComponents/skillTree';


const FormItem = Form.Item;
const { Option } = Select;
function Skills() {
    
    const isLoggedIn = useSelector(state => state.UserProfile.login.isLoggedIn);
    const [teamtype, setTeamType] = useState("");

    const teamtypeChange = (e) => {
        if (e !== "") this.state.errors.teamtype = ""
        setTeamType(e)
    }
    const handleChange = (value) => {
        // console.log(value);
    }
    return (
        <div className="sb-dashboard content-height-100">
            <Row className="header-border">
                <Col span={18} style={{ display: 'flex' }}>
                    
                    <FormItem className="InlineFormMarginRight">
                        <Select placeholder="Select By Location" style={{ width: '250px' }}
                            getPopupContainer={triggerNode => triggerNode.parentNode}
                            onChange={teamtypeChange} value={teamtype || undefined}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Option value="AMP">Hydrabad</Option>
                            <Option value="Blog">Vijayawada</Option>
                            <Option value="Blog">Bhuvaneswar</Option>
                            <Option value="AMP">USA</Option>

                        </Select>
                        {/* <p style={{ color: 'red' }}>{this.state.errors.teamtype}</p> */}
                    </FormItem>
                    <FormItem className="InlineFormMarginRight">
                        <Select placeholder="Select By Team" style={{ width: '250px' }}
                            getPopupContainer={triggerNode => triggerNode.parentNode}
                            onChange={teamtypeChange} value={teamtype || undefined}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Option value="AMP">Web</Option>
                            <Option value="Blog">Android</Option>
                            <Option value="Blog">IOS</Option>
                        </Select>
                        {/* <p style={{ color: 'red' }}>{this.state.errors.teamtype}</p> */}
                    </FormItem>
                </Col>
                <Col span={6} className="sb-create-btn">
                    {
                        isLoggedIn === "admin" ? <Link to="/organization/directory/people" ><Button>ADD PEOPLE</Button></Link> : ""
                    }
                </Col>
            </Row>
            <Row style={{ marginTop: "30px" }}>
                <Col span={24}>
                    < SkillTree />
                </Col>
            </Row>
        </div>
    );
}

export default Skills;

import React,{useState} from 'react';
import { Button, Row, Col, Select, Form } from 'antd';
import { Link, useHistory } from "react-router-dom";
import './index.scss';
import SkillsTabel from '../../utils/tabels/Skills';

const FormItem = Form.Item;
const { Option } = Select;
function Skills() {

const [teamtype ,setTeamType] = useState("");

    const teamtypeChange = (e) => {
        if (e !== "") this.state.errors.teamtype = ""
        setTeamType(e )
    }
    const handleChange = (value) => {
        // console.log(value);
    }
    return (
        <div className="sb-dashboard">
            <Row>
                <Col span={18} style={{display:'flex'}}>
                    <FormItem className="InlineFormMarginRight">
                        <Select placeholder="Select By Team" style={{ width: '250px' }}
                            getPopupContainer={triggerNode => triggerNode.parentNode}
                            onChange={teamtypeChange} value={teamtype || undefined}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Option value="AMP" disabled>AMP</Option>
                            <Option value="Blog">Blog</Option>
                        </Select>
                        {/* <p style={{ color: 'red' }}>{this.state.errors.teamtype}</p> */}
                    </FormItem>
                    <FormItem className="InlineFormMarginRight">
                        <Select placeholder="Select By Location" style={{ width: '250px' }}
                            getPopupContainer={triggerNode => triggerNode.parentNode}
                            onChange={teamtypeChange} value={teamtype || undefined}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Option value="AMP" disabled>AMP</Option>
                            <Option value="Blog">Blog</Option>
                        </Select>
                        {/* <p style={{ color: 'red' }}>{this.state.errors.teamtype}</p> */}
                    </FormItem>
                </Col>
                <Col span={6} className="sb-create-btn">
                    <Link to="/skill/addskill" ><Button>Add Skill</Button></Link>
                </Col>
            </Row>
            <Row style={{ marginTop: "30px" }}>
                <Col span={24}>
                    <SkillsTabel />
                </Col>
            </Row>
        </div>
    );
}

export default Skills;

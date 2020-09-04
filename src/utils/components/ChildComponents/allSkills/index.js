import React, { useState } from 'react';
import { Button, Row, Col, Select, Input, Form, Card } from 'antd';
import './index.scss';
// import { UserOutlined } from '@ant-design/icons';
const { Search } = Input;
const { Option } = Select;
const FormItem = Form.Item;


function AllSkills() {
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
        <div className="all-skills-main">
            <Row className="">
                <Col span={5}>
                    <Card className="sc-card">
                        <div className="card-header">
                            <p>Most Skilled</p>
                        </div>
                        <div className="card-content">
                            <p>1) Mani</p>
                            <p>2) Dilip</p>
                            <p>3) naveen</p>
                            <p>4) Praveen</p>
                        </div>
                        <div className="card-footer">
                            <p>View More</p>
                        </div>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card className="sc-card">
                        <div className="card-header">
                            <p>Most Intrested</p>
                        </div>
                        <div className="card-content">
                            <p>1) Mani</p>
                            <p>2) Dilip</p>
                            <p>3) naveen</p>
                            <p>4) Praveen</p>
                        </div>
                        <div className="card-footer">
                            <p>View More</p>
                        </div>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card className="sc-card">
                        <div className="card-header">
                            <p>Top Skilled</p>
                        </div>
                        <div className="card-content">
                            <p>1) Mani</p>
                            <p>2) Dilip</p>
                            <p>3) naveen</p>
                            <p>4) Praveen</p>
                        </div>
                        <div className="card-footer">
                            <p>View More</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div >
    );
}

export default AllSkills;

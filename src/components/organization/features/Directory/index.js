import React, { useState } from 'react';
import { Button, Row, Col, Select, Form } from 'antd';
import { Link, useHistory } from "react-router-dom";
import './index.scss';
import PeoplesList from '../../../../utils/components/peoplesList';
import ProfileCard from '../../../../utils/components/cards/proffileCard/ProfileCard';

const FormItem = Form.Item;
function Directory() {

    return (
        <div className="directory-main">
            <Row style={{ borderBottom: "1px solid #DFE1E5" }}>
                <Col span={12}>
                    All People
                </Col>
                <Col span={12} className="sb-button">
                    <Link to="/organization/directory/people"><Button >Add people</Button></Link>
                </Col>
            </Row>
            <Row>
                <Col span={18} style={{ borderRight: "1px solid #DFE1E5" }}>
                    <PeoplesList data={membersList} />
                </Col>
                <Col span={6}>
                    <ProfileCard/>
                </Col>
            </Row>
        </div>
    )
}
export default Directory;

const membersList = [
    {
        id: "1",
        name: "raju",
        team: "Mobile",
        imageUrl: ""
    },
    {
        id: "2",
        name: "raju",
        team: "Mobile",
        imageUrl: ""
    }, {
        id: "3",
        name: "raju",
        team: "Mobile",
        imageUrl: ""
    }, {
        id: "4",
        name: "raju",
        team: "Mobile",
        imageUrl: ""
    }, {
        id: "5",
        name: "raju",
        team: "Mobile",
        imageUrl: ""
    }, {
        id: "6",
        name: "raju",
        team: "Mobile",
        imageUrl: ""
    }
]
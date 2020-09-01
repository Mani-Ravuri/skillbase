import React, { useState } from 'react';
import { Button, Row, Col, Select, Form } from 'antd';
import { Link, useHistory } from "react-router-dom";
import './index.scss';

const FormItem = Form.Item;
function Directory() {

    return (
        <div className="directory-main">
            <Row style={{borderBottom:"1px solid red"}}>
                <Col span={12}>
                    All People
                </Col>
                <Col span={12} className="sb-button">
                    <Link to="/organization/directory/people"><Button >Add people</Button></Link>
                </Col>
            </Row>
            <Row>
                <Col span={18} style={{borderRight:"1px solid red"}}>
                    <h2>All Peoples list</h2>
                </Col>
                <Col span={6}>
                    <h2>Peoples Info</h2>
                </Col>
                </Row>
        </div>
    )
}
export default Directory;
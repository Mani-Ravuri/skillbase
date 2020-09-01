import React, { useState } from 'react';
import { Button, Row, Col, Select, Form } from 'antd';
import { Link, useHistory } from "react-router-dom";
import {ExpandAltOutlined  } from '@ant-design/icons';
import './index.scss';
import SkillsTabel from '../../utils/tabels/Skills';
import SampleEmp from '../../utils/images/sampleEmp.jpg';
import { Doughnut, Bar, Line } from 'react-chartjs-2';


const FormItem = Form.Item;
const { Option } = Select;

function DashBoard() {

    const [teamtype, setTeamType] = useState("");

    const teamtypeChange = (e) => {
        if (e !== "") this.state.errors.teamtype = ""
        setTeamType(e)
    }
    const handleChange = (value) => {
        console.log(value);
    }
    const chartData = {
        labels: ["UI dev", "Integration", "Middleware"],
        datasets: [{
            data: [40, 40, 20],
            backgroundColor: [
                '#FF7271',
                '#22BEB6',
            ],
            hoverBackgroundColor: [
                '#FF7271',
                '#22BEB6',
            ],
        }]

    };
    const mixedChart = {
        labels: ['January', 'February', 'March',
            'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Performance',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56, 40, 50, 60, 80, 95, 60, 90]
            }
        ]
    };
    const LineChart = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Regularity',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'green',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            },
            {
                label: 'Leaves',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'red',
                borderWidth: 2,
                data: [0, 10, 0, 10]
            }
        ],
    }


    return (
        <div className="gem-main-dashboard">
            <Row>
                <Col span={12} className="ProfileImageSection only-img">
                    <div >
                        <img src={SampleEmp} alt="" />
                        <h2>Employee Name</h2>
                    </div>
                    <div className="profile-info">
                        <p>Position</p>
                        <p>Team Name</p>
                        <p>date of joining</p>
                        <p>Reporting Manager</p>
                        <ExpandAltOutlined />
                    </div>
                </Col>
                <Col span={12} className="ProfileImageSection">
                    <div className="dougnutClass">
                        <Doughnut className="" data={chartData} options={{
                            legend: {
                                display: 'true',
                                position: 'right',
                                fontSize: '30'
                            }
                        }} />
                    </div>
                    <h2>Skill Report</h2>
                    {/* <p>Reporting Manager</p> */}
                </Col>

            </Row>
            <Row style={{ marginTop: "30px" }}>
                <Col span={12} className="ProfileImageSection">
                    <div className="barchartClass">
                        <Bar className="" data={mixedChart} options={{
                            title: {
                                display: true,
                                text: '',
                                fontSize: 20
                            },
                            legend: {
                                display: 'true',
                                position: 'right',
                                fontSize: '20'
                            },
                        }} />
                    </div>
                    <h2>Performance Report</h2>
                </Col>
                <Col span={12} className="ProfileImageSection">
                    <div className="lineChart">
                        <Line className="" data={LineChart} options={{
                            title: {
                                display: true,
                                text: 'Average Rainfall per month',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }} />
                    </div>
                    <h2>Performance Report</h2>
                </Col>
            </Row>
        </div>
    );
}

export default DashBoard;

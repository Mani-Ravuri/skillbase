import React, { useState } from 'react';
import { Button, Row, Col, Select, Input, Form } from 'antd';
import './index.scss';
import AllSkills from '../../../../../utils/components/ChildComponents/allSkills';
import AssessmentForm from '../../../../../utils/components/ChildComponents/assessmentForm';
import FillAssessment from '../../../../../utils/components/ChildComponents/assessmentForm';
// import { UserOutlined } from '@ant-design/icons';
const { Search } = Input;
const { Option } = Select;
const FormItem = Form.Item;


function Assessment() {
    const [isEnableForm, setisEnableForm] = useState(false);
    const [teamNameError, setTeamNameError] = useState('');
    const [skillNameError, setskillNameError] = useState('');

    function createAssessment(){
        setisEnableForm(true);
    }
    

    return (
        <div className="Assessment-main ">
            <Row className="header-border">
                <h2>Assessment</h2>
            </Row>
            <Row className="assessmet-theory">
                
            {
                    isEnableForm ? <Col span={24} style={{backgrond:"#ffffff"}}>
                        <FillAssessment />
                    </Col> : <><Col span={12} className="padding1em">
                    <div className="self-details-card padding1em">
                        <div className="card-content">
                            <h2>Self Assesment</h2>
                            <p>Status : 33%</p>
                            <p>Last Completed : 33%</p>
                            <p>Next Due : 33%</p>
                            <p>Comments : Good</p>
                        </div>
                        <div style={{ textAlign: "end" }}>
                            <Button onClick={createAssessment}> Continue Assessment >> </Button>
                        </div>
                    </div>
                </Col>
                <Col span={12} className="padding1em">
                    <div className="self-details-card padding1em">
                        <div className="card-content">
                            <h2>Supervisour Assesment</h2>
                            <p>Status : 33%</p>
                            <p>Last Completed : 33%</p>
                            <p>Next Due : 33%</p>
                            <p>Comments : Good</p>
                        </div>
                    </div>
                </Col>
                </>
                }
                
            </Row>
            <Row >
                

            </Row>
            <Row >
                <Col span={24}>
                    <AllSkills />
                </Col>
            </Row>
        </div >
    );
}

export default Assessment;

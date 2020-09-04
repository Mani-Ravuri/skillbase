import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Input, Form, Radio } from 'antd';
import './index.scss';
import quizQuestions from './utils/quesrions'
import Quiz from './utils/Quiz';
// import { UserOutlined } from '@ant-design/icons';

const FormItem = Form.Item;


function FillAssessment() {
    const [selcetdValue, setSelectedValue] = useState(1)
    useEffect(() => {

    }, [])
    function onChange(e) {
        // console.log('radio checked', e.target.value);
        setSelectedValue(e.target.value)
    };
    console.log("questions", quizQuestions)

    return (
        <div className="assessment-create-main">
            {
                quizQuestions && quizQuestions.map((index, key) => {
                    return <div>
                        <div className="Ques-title">
                            <h2>{index.skill}</h2>
                        </div>
                        <div>
                            <Radio.Group onChange={onChange} value={selcetdValue}>
                                {
                                    index.answers ? index.answers.map((values, i) => {
                                        return <Radio value={values.content}>{values.content}</Radio>
                                    }) : ""
                                }
                            </Radio.Group>
                            <div>
                            </div>
                        </div>
                        <Button> Next </Button>
                    </div>
                })
            }

        </div >
    );
}

export default FillAssessment;

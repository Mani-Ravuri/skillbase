import React, { useState } from 'react';
import { Button, Row, Col, Select, Form } from 'antd';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import './index.scss';
import { FrownOutlined } from '@ant-design/icons';



const FormItem = Form.Item;
const { Option } = Select;
function PeoplesList(props) {
    console.log("props,data", props.data)
    const Newdata = props.data;
    return (
        <div className="">
            {
                Newdata.length && Newdata.map((value, i) => {
                    return <div className='peopleslist'>
                        <div className='image'>
                            <FrownOutlined />
                        </div>
                        <div className='details'>
                            <p>{value.name}</p>
                        </div>
                        <div className='team'>
                            <span>{value.team}</span>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default PeoplesList;

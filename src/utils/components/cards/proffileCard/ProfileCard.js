import React, { useState } from 'react';
// import {  Select, Form } from 'antd';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { Link, useHistory } from "react-router-dom";
import './index.scss';
import { FrownOutlined } from '@ant-design/icons';


function ProfileCard(props) {
    return (
        <div className="profileCard">
            <div className='image'>
                <FrownOutlined />
            </div>
            <div className='details'>
                <p>Raju</p>
                <p>Date of Join</p>
                <span>Mobile team</span>
            </div>
            <div className='skills'>
                <p>Andrid</p>
            </div>
        </div>
    );
}

export default ProfileCard;

import React from 'react';
import { Layout, Menu, Button, Row, Col, Input, Alert, Dropdown, message } from 'antd';
import Logo from '../../../../utils/images/logo.png';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import './index.scss';
import { Link, useHistory } from "react-router-dom";
import { UserOutlined, BellOutlined } from '@ant-design/icons';
const { Header } = Layout;
const { Search } = Input;


function Navbar(props) {
    const isLoggedIn  = useSelector(state => state.UserProfile.login.isLoggedIn);
    const history = useHistory();
    // console.log("props data",props)

    const onMenuSelect = (menu) => {
        if (menu.key === 'notifi') history.push('/');
        else Alert("Comming Soon");
    }
    const toInternal = (menu) => {
        if (menu === 'skill') history.push('/skill');
        if (menu === 'orga') history.push('/organization');
        if (menu === 'profile') history.push('/profile');
        else Alert("Comming Soon");
    }
    const onDropdownMenuSelect = (menu) => {
        if (menu.key === 'teams') history.push('/')
        if (menu.key === 'assessments') history.push('/skill/self-assessment')
        else if (menu.key === 'roles') history.push('/')
        else message.warning("COMMING SOON ...")
    }
    const onOrgDropdownMenuSelect = (menu) => {
        if (menu.key === 'Directory') history.push('/organization/directory')
        else if (menu.key === 'Leaves') history.push('/organizations/leaves')
        else message.warning("COMMING SOON ...")
    }


    const OrgMenu = (
        <Menu className="drop-down-menu-main">
            <Menu.Item onClick={onOrgDropdownMenuSelect} key="Directory" className="menuItem-clr">
                DIRECTORY
                </Menu.Item>
            <Menu.Item onClick={onOrgDropdownMenuSelect} key="Leaves" className="menuItem-clr">
                LEAVE
                </Menu.Item>
            <Menu.Item onClick={onOrgDropdownMenuSelect} key="Payslips" className="menuItem-clr">
                PAY SLIPS
                </Menu.Item>
            <Menu.Item onClick={onOrgDropdownMenuSelect} key="Salary" className="menuItem-clr">
                SALARY
                </Menu.Item>
            <Menu.Item onClick={onOrgDropdownMenuSelect} key="Misce" className="menuItem-clr">
                MISCELLANEOUS
                </Menu.Item>
            <Menu.Item onClick={onOrgDropdownMenuSelect} key="ItDec" className="menuItem-clr">
                IT DECLERATIONS
                </Menu.Item>
        </Menu >
    )
    const SkillMenu = (
        <Menu className="drop-down-menu-main">
            <Menu.Item onClick={onDropdownMenuSelect} key="assessments" className="menuItem-clr">
                Assessments
                </Menu.Item>
            <Menu.Item onClick={onDropdownMenuSelect} key="teams" className="menuItem-clr">
                Teams
                </Menu.Item>
            <Menu.Item onClick={onDropdownMenuSelect} key="roles" className="menuItem-clr">
                Roles
                </Menu.Item>
        </Menu >
    )
    const profileMenu = (
        <Menu className="drop-down-menu-main">
            <Menu.Item onClick={onDropdownMenuSelect} key="AllSolutions" className="menuItem-clr">
                DETAILS
                </Menu.Item>
            <Menu.Item onClick={onDropdownMenuSelect} key="AllSolutions" className="menuItem-clr">
                SUMMERY
                </Menu.Item>
            <Menu.Item onClick={onDropdownMenuSelect} key="AllSolutions" className="menuItem-clr">
                PREFERENCES
                </Menu.Item>
            <Menu.Item onClick={onDropdownMenuSelect} key="AllSolutions" className="menuItem-clr">
                APPRECIATIONS
                </Menu.Item>
        </Menu >
    )  
    return (
        <Row className="sb-header">
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 20, offset: 2 }} sm={{ span: 24, offset: 0 }}>
                <Header className="header sb-nav">
                    <Col lg={{ span: 6 }} className="logo-section">
                        <Link to='/'> <img src={Logo} alt="logo" /></Link>
                    </Col>
                    <Col lg={{ span: 18 }} className="menu-section">
                        <Menu theme="dark" mode="horizontal" className="menuItems">
                            <Menu.Item key="search" ><Search placeholder="input search text" className="searchInput" enterButton /></Menu.Item>
                            <Menu.Item key="orgs" >
                                <Dropdown overlay={OrgMenu}
                                    placement="bottomCenter"
                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                >
                                    <div className="content" onClick={() => toInternal("orga")}>
                                        <p className="itemName">ORGANIZATIONS</p>
                                    </div>
                                </Dropdown>
                            </Menu.Item>

                            <Menu.Item key="skill">
                                <Dropdown overlay={SkillMenu}
                                    placement="bottomCenter"
                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                >
                                    <div className="content" onClick={() => toInternal("skill")}>
                                        <p className="itemName">SKILL BASE</p>
                                    </div>
                                </Dropdown>
                            </Menu.Item>
                            {/* <Menu.Item key="people" onClick={onMenuSelect}>PEOPLES</Menu.Item> */}
                            {/* <Menu.Item key="sum" onClick={onMenuSelect}>SUMMERY</Menu.Item> */}
                            <Menu.Item key="proffile"  >
                                <Dropdown overlay={profileMenu}
                                    placement="bottomCenter"
                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                >
                                    <div className="content" onClick={() => toInternal("profile")}>
                                        <p className="itemName" ><UserOutlined />PROFILE</p>
                                    </div>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item key="notifi" onClick={onMenuSelect}><BellOutlined /></Menu.Item>
                        </Menu>
                    </Col>
                </Header>
            </Col>
        </Row>
    );
}

export default Navbar;

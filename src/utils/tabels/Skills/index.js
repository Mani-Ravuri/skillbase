import React,{useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button,Table,Dropdown,Menu, Icon } from 'antd';
import {MoreOutlined } from '@ant-design/icons';
import './index.scss';

function SkillTabel(props) {
    const [role , setRole] = useState(true)
// const { sortedInfo, filteredInfo } = this.state;
// sortedInfo = sortedInfo || {};
// filteredInfo = filteredInfo || {};


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // filteredValue: filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.name.length - b.name.length,
            // ellipsis: true,
        },
        {
            title: 'Team',
            dataIndex: 'team',
            key: 'team',
            sorter: (a, b) => a.age - b.age,
            // ellipsis: true,
        },
        {
            title: 'Security Group',
            dataIndex: 'securityGroup',
            key: 'securityGroup',
            sorter: (a, b) => a.age - b.age,
            // ellipsis: true,
        },
        {
            title: 'Self Assessment',
            dataIndex: 'selfAssesment',
            key: 'selfAssesment',
            // filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            // ellipsis: true,
        },
        {
            title: 'Supervisor Assessment',
            dataIndex: 'superAssement',
            key: 'superAssement',
            // filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            // ellipsis: true,
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
        },
    ];

    if (props.data.length > 0 ){
        props.data.map((value, i) => {

        })
    }
    const data = [
        {
            key: '1',
            name: 'John Brown',
            securityGroup:'Geminite',
            selfAssesment: 5,
            superAssement: 'Over Due two days',
            team:'Web',
            actions: <Dropdown getPopupContainer={triggerNode => triggerNode.parentNode}
            overlay={<Menu>
                <Menu.Item key="0" >
                    {role == true ? <a><Link to={{ pathname: `` }}>View</Link></a> : null}
                </Menu.Item>
                <Menu.Item key="1">
                    {role == true ? <a><Link to={{ pathname: `` }} className="edittext">Edit</Link></a> : null}
                </Menu.Item>
            </Menu >} trigger={['click']} >
            <a className="ant-dropdown-link" href="">
                <span className="viewMore"><MoreOutlined /></span>
            </a>
        </Dropdown >
        }
    ];
    return (
        <div>
            <Table columns={columns} dataSource={data}  />
        </div>
    );
}

export default SkillTabel;

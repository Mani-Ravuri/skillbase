import React from 'react';
import { Button,Table } from 'antd';
import './index.scss';

function SkillTabel() {

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
    const data = [
        {
            key: '1',
            name: 'John Brown',
            securityGroup:'',
            selfAssesment: 32,
            superAssement: 'New York No. 1 Lake Park',
            team:'',
            actions:''
        }
    ];
    return (
        <div>
            <Table columns={columns} dataSource={data}  />
        </div>
    );
}

export default SkillTabel;

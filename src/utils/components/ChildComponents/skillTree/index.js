import React, { useState } from 'react';
import { Tree } from 'antd';
import './index.scss';
// import { UserOutlined } from '@ant-design/icons';

const { DirectoryTree } = Tree;

function SkillTree() {
  const treeData = [
    {
      title: 'Mobile',
      key: '0-0',
      children: [
        {
          title: 'Android',
          key: '0-0-0',
          isLeaf: true
        },
        {
          title: 'IOS',
          key: '0-0-1',
          isLeaf: true
        },
      ],
    },
    {
      title: 'Web',
      key: '0-1',
      children: [
        { title: 'Rreact', key: '0-1-0', isLeaf: true },
        { title: 'Angular', key: '0-1-1', isLeaf: true },
        { title: 'Ionic', key: '0-1-1', isLeaf: true },
      ],
    },
  ];

  const Demo: React.FC<{}> = () => { }
  const onSelect = (keys, event) => {
    console.log('Trigger Select', keys, event);
  };


  const onExpand = () => {
    console.log('Trigger Expand');
  };
  return (
    <div className="all-skills-Tree">
      <DirectoryTree
        // showLine
        multiple
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeData}
      />
    </div >
  );
}

export default SkillTree;

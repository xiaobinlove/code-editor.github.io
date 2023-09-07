import { FC } from 'react';
import SimpleTree from '../../components/tree';
import { useState } from 'react'
import { Tree, Input, Select } from 'antd'
import './index.less'
const treeData: any[] = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: '0-0-1-0', key: '0-0-1-88888888', children: [
              { title: '0-0-1-1-2', key: '0-0-1-1-2' },
              { title: '0-0-1-1-3', key: '0-0-1-1-4' },
              { title: '0-0-1-1-3', key: '0-0-1-1-5' },
              { title: '0-0-1-1-3', key: '0-0-1-1-6' },
              { title: '0-0-1-1-3', key: '0-0-1-1-7' },
              { title: '0-0-1-1-3', key: '0-0-1-1-38' },
              { title: '0-0-1-1-3', key: '0-0-1-1-9' },
              { title: '0-0-1-1-3', key: '0-0-1-1-10' },
              { title: '0-0-1-1-3', key: '0-0-1-1-11' },
              { title: '0-0-1-1-3', key: '0-0-1-1-12' },
              { title: '0-0-1-1-3', key: '0-0-1-1-13' },
              { title: '0-0-1-1-3', key: '0-0-1-1-15' },
              { title: '0-0-1-1-3', key: '0-0-1-1-16' },
              { title: '0-0-1-1-3', key: '0-0-1-1-17' },
              { title: '0-0-1-1-3', key: '0-0-1-1-18' },
              { title: '0-0-1-1-3', key: '0-0-1-1-19' },
              { title: '0-0-1-1-3', key: '0-0-1-1-21' },
              { title: '0-0-1-1-3', key: '0-0-1-1-22' },
              { title: '0-0-1-1-3', key: '0-0-1-1-23' },
              { title: '0-0-1-1-3', key: '0-0-1-1-24' },
              { title: '0-0-1-1-3', key: '0-0-1-1-25' },
              { title: '0-0-1-1-3', key: '0-0-1-1-26' },
              { title: '0-0-1-1-3', key: '0-0-1-1-27' },
              { title: '0-0-1-1-3', key: '0-0-1-1-28' },
              { title: '0-0-1-1-3', key: '0-0-1-1-29' },
              { title: '0-0-1-1-3', key: '0-0-1-1-30' },
            ]
          },
          { title: '0-0-1-1', key: '0-0-1-7777' },
          { title: '0-0-1-2', key: '0-0-1-999' },
          { title: '0-0-1-0', key: '0-0-1-122' },
          { title: '0-0-1-1', key: '0-0-1-2221' },
          { title: '0-0-1-2', key: '0-0-1-333' },
          { title: '0-0-1-2', key: '0-0-1-3444' },
          { title: '0-0-1-2', key: '0-0-1-555' },
          { title: '0-0-1-2', key: '0-0-1-666666' },
          { title: '0-0-1-2', key: '0-0-1-77744447' },
          { title: '0-0-1-2', key: '0-0-1-7888' },
          { title: '0-0-1-2', key: '0-0-1-8' },
          { title: '0-0-1-2', key: '0-0-1-9' },
          { title: '0-0-1-2', key: '0-0-1-10' },
          { title: '0-0-1-2', key: '0-0-1-11' },
          { title: '0-0-1-2', key: '0-0-1-12' },
          { title: '0-0-1-2', key: '0-0-1-13' },
          { title: '0-0-1-2', key: '0-0-1-14' },
          { title: '0-0-1-2', key: '0-0-1-15' },
          { title: '0-0-1-2', key: '0-0-1-16' },
          { title: '0-0-1-2', key: '0-0-1-17' },
          { title: '0-0-1-2', key: '0-0-1-18' },
          { title: '0-0-1-2', key: '0-0-1-19' },
          { title: '0-0-1-2', key: '0-0-1-20' },
          { title: '0-0-1-2', key: '0-0-1-21' },
          { title: '0-0-1-2', key: '0-0-1-22' },
          { title: '0-0-1-2', key: '0-0-1-23' },
          { title: '0-0-1-2', key: '0-0-1-24' },
          { title: '0-0-1-2', key: '0-0-1-25' },
          { title: '0-0-1-2', key: '0-0-1-26' },
          { title: '0-0-1-2', key: '0-0-1-27' },
          { title: '0-0-1-2', key: '0-0-1-28' },
          { title: '0-0-1-2', key: '0-0-1-29' },
          { title: '0-0-1-2', key: '0-0-1-30' },
          { title: '0-0-1-2', key: '0-0-1-32' },
          { title: '0-0-1-2', key: '0-0-1-31' },
          { title: '0-0-1-2', key: '0-0-1-33' },
          { title: '0-0-1-2', key: '0-0-1-34' },
          { title: '0-0-1-2', key: '0-0-1-35' },
          { title: '0-0-1-2', key: '0-0-1-36' },
          { title: '0-0-1-2', key: '0-0-1-37' },
          { title: '0-0-1-2', key: '0-0-1-38' },
          { title: '0-0-1-2', key: '0-0-1-39' },
          { title: '0-0-1-2', key: '0-0-1-40' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];
const options = [
  {
    value: '1',
    label: '1'
  }, {
    value: '2',
    label: '2'
  }
]
const TreeView: FC = () => {
  const [inputVal, setInputVal] = useState('')
  const [selectVal, setselectVal] = useState('')
  const titleRender = () => {
    return (
      <div>
        <Input size='small' value={inputVal} style={{ width: '60px', marginRight: '5px' }} onChange={(e) => { setInputVal(e.target.value) }} />
        <Select size='small' value={selectVal} style={{ width: '150px' }} options={options} onChange={(e) => { setselectVal(e) }} />
      </div>
    )
  }
  return (
    <>
      <div className='tree-view'>
        <div className='tree'>
          <h4 className='title'>Ant Design Tree 组件：</h4>
          <Tree
            className='tree'
            treeData={treeData}
            defaultExpandAll
            titleRender={titleRender}
          />
        </div>
        <div style={{ width: '50%' }}>
          <h4 className='title'>重写后的 Tree 组件：</h4>
          <SimpleTree treeData={treeData} defaultExpand="all" titleRender={titleRender} />
        </div>
      </div>
    </>
  )
}
export default TreeView
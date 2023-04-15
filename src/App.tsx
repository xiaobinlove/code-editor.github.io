import React, { useState, useMemo } from 'react'
import './App.css'
import { Tabs } from 'antd'
import ModelFiled from './components/model'
import { models } from "./data/model";
const placeholderTypes = {
  Field: 'f'
}
function App() {
  const tabItems = useMemo(() => [
    {
      key: 'model',
      label: '字段',
      children: (<ModelFiled placeholderTypes={placeholderTypes} models={models} />)
    },
    {
      key: 'function',
      label: '函数',
      children: (<div>
        函数
      </div>)
    },
    {
      key: 'operation',
      label: '逻辑运算符',
      children: (<div>
        函数
      </div>)
    }
  ], [])
  return (
      <div className="app">
          <div className="sider">
              <Tabs size="large" tabPosition="left" items={tabItems} />
          </div>
          <div className="content">
              editor
          </div>
      </div>
  )
}

export default App

import React, { useState, useMemo } from 'react'
import './App.css'
import { Tabs } from 'antd'
function App() {
  const [count, setCount] = useState(0)
  const tabItems = useMemo(() => [
    {
      key: 'model',
      label: '字段',
      children: (<div>
        children
      </div>)
    },
    {
      key: 'function',
      label: '函数',
      children: (<div>
        children
      </div>)
    }
  ], [])
  return (
      <div className="app">
          <div className="sider">
              <Tabs tabPosition="left" items={tabItems} />
          </div>
          <div className="content">
              editor
          </div>
      </div>
  )
}

export default App

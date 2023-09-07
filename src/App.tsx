import './App.css'
import router from './router'
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const items: MenuProps['items'] = [
  // {
  //   label: 'Navigation One',
  //   key: 'mail',
  //   icon: <MailOutlined />,
  // },
  {
    label: (<Link to="tree">Tree</Link>),
    key: 'tree',
    icon: <AppstoreOutlined />,
  },
  {
    label: (<Link to="editor">Editor</Link>),
    key: 'editor',
    icon: <SettingOutlined />,
  },
];
function App() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  return (
    <div className="app">
      {/* <Menu
        onClick={onClick}
        items={items}
        mode="horizontal"
      /> */}
      {router()}
    </div>
  )
}

export default App

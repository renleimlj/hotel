import React from 'react';
import './Show.css';
import 'antd/lib/layout/style/css'
import 'antd/lib/menu/style/css'
import 'antd/lib/icon/style/css'

import { Layout, Menu, Icon } from 'antd';
import Datecard from './Datecard'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Show extends React.Component {
  render() {
    return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <p id="title_name">酒店住宿管理系统</p>
     {/*  <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu> */}
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />宾客信息</span>}>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="info-circle-o" />客房查询</span>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="key" />登记入住</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="bank" />财务报表生成</span>}>
            <Menu.Item key="13">option9</Menu.Item>
            <Menu.Item key="14">option10</Menu.Item>
            <Menu.Item key="15">option11</Menu.Item>
            <Menu.Item key="16">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>

        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Datecard></Datecard>
        </Content>
      </Layout>
    </Layout>
  </Layout>)
  }
}

export default Show;

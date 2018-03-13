import React from 'react';
import './login.css';
import 'antd/lib/icon/style/css'
import 'antd/lib/form/style/css'
import 'antd/lib/input/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/checkbox/style/css'
import "whatwg-fetch"
import "babel-polyfill"

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "请输入用户名",
            password : "请输入密码"
        }
    }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  nameChange = (e) => {
      this.setState({name:e.target.value})
  } 

  passwordChange = (e) => {
    this.setState({password:e.target.value})
}

  checkup() {
      fetch("users.json")
      .then(response => response.json())
      .then(data => {
          console.log(data.employees)
          let employees = data.employees
          var s = 0
          for (var i = 0; i < employees.length; i++) {
              if (employees[i].firstName === this.state.name) {
                  if (employees[i].password !== this.state.password) {
                      alert("密码输入错误")
                      s = 1
                  } else {
                      s = 1
                    window.location.href="hotel"
                  }
              }
          }
          if (s === 0)
          alert("无该用户名")
      })
      .catch(error => {
          console.log(error)
      })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div class = "parent">
      <Form onSubmit={this.handleSubmit} className="login-form">
          <h1>酒店住宿管理系统</h1>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username"  onChange={this.nameChange}/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" onChange={this.passwordChange}/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot">Forgot password</a>
          <br/>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.checkup.bind(this)}>
            Log in
          </Button>
        </FormItem>
      </Form></div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm
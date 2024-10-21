import React from 'react';
import { Button, Form, Input } from 'antd';
import { loginUserApi } from '../utils/apis';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const onFinish = async(values) => {
    
      console.log('Success:', values);
      const { email, password } = values;
      const res = await loginUserApi(email, password);
      // debugger
      // console.log(res)
      if (res && res.EC === 0) {
        console.log(res)
        localStorage.setItem("access_token", res.access_token)
          notification.success({
              message: 'LOGIN USER',
              description: 'success',
          })
          navigate("/")
      } else {
          notification.error({
              message: 'LOGIN USER',
              description: res?.EM ?? 'error',
          })
      }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{margin: '50px'}}>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
        </Form>
    </div>
  );
};

export default Login;

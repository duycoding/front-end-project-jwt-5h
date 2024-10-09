import React from 'react';
import { Button, Descriptions, Form, Input } from 'antd';
import { createUserApi } from '../utils/apis';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const onFinish = async(values) => {
    
    console.log('Success:', values);
    const { email, name, password } = values;
    const res = await createUserApi(email, name, password);
    // console.log(res)
    if (res) {
        notification.success({
            message: 'CREATE USER',
            description: 'success',
        })
        navigate("/login")
    } else {
        notification.success({
            message: 'CREATE USER',
            description: 'error',
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
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
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
          Submit
        </Button>
      </Form.Item>
        </Form>
    </div>
  );
};

export default Register;

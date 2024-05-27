import React, { useState } from 'react';
import { Layout, Button, Checkbox, Form, Input } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
const { Content} = Layout;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const MyContent = () => {
  const [size] = useState('large');
    return (
<Content
        style={{
          padding: '0 48px',
        }}
      >
        
        <div
          style={{
            padding: 24,
            minHeight: 380,
            
          }}
        >

          

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
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
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
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
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


          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
        </div>
      </Content>

    );
}

export default MyContent;
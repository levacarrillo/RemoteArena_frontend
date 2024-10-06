import React from "react";
import { Typography, Button, Form, Input, Flex, Space } from "antd";
import "./Login.css"

export const Login = () => {
    const { Title } = Typography;

    return (
        <div className="login">
            <Title level={2}>Remote Arena</Title>
            <Flex justify="center" className="form-container">
                <Form
                    name="login"
                    autoComplete="off"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        maxWidth: 16
                    }}
                    style={{
                        width: 500
                    }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input username'
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input password'
                            }
                        ]}
                    >
                        <Input.Password allowClear />
                    </Form.Item>
                    <Flex horizontal justify="flex-end" >
                        <Form.Item>
                            <Space>
                                <Button htmlType="button">Reset</Button>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Space>
                        </Form.Item>
                    </Flex>
                </Form>
            </Flex>
            <Flex className="pumas-logo" align="flex-end">
                <img  alt="Logo" src="https://biorobotics.fi-p.unam.mx/wp-content/uploads/2019/01/logo_white-300x287.png" />
            </Flex>
        </div>
    );
};


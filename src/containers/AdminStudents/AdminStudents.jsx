import React, { useState } from "react";
import { Typography, Flex, Table, Select, Button, Modal, Form, Input } from "antd";
import './AdminStudents.css';

export const AdminStudents = () => {
    const { Title, Text } = Typography;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const columns = [
        {
            title: 'Account id',
            dataIndex: 'account_id',
            key: 'account_id',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Name(s)',
            dataIndex: 'names',
            key: 'names',
        },
        {
            title: 'Father lastname',
            dataIndex: 'fathers_lastname',
            key: 'fathers_lastname',
        },
        {
            title: 'Mothers lastname',
            dataIndex: 'mothers_lastname',
            key: 'mothers_lastname',
        },
        {
            title: 'Email 1',
            dataIndex: 'email_1',
            key: 'email_1',
        },
        {
            title: 'Email 2',
            dataIndex: 'email_2',
            key: 'email_2',
        },
        {
            title: 'Group',
            dataIndex: 'group',
            key: 'gropu',
        },
        {
            title: 'Academic year',
            dataIndex: 'academic year',
            key: 'academic year',
        },
        
    ];

    return (
        <div className="admin-students">
            <Title level={2}>Student administrator</Title>
            <Flex>
                <Select placeholder="Academic year" style={{ width: '200px'}}/>
                <Select placeholder="Group" style={{ width: '150px'}}/>
            </Flex>
            <Table columns={columns}/>
            <Flex justify="end">
                <Button onClick={() => setIsModalOpen(true)}>Add new student</Button>
            </Flex>
            <Flex className="pumas-logo" align="flex-end">
                <img  alt="Logo" src="https://biorobotics.fi-p.unam.mx/wp-content/uploads/2019/01/logo_white-300x287.png" />
            </Flex>
            <Modal
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                centered
            >
                <Form>
                    <Form.Item
                        label="Account id"
                        name="account_id"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="username"
                        name="username"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="password"
                        name="password"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Name(s)"
                        name="names"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Father's lastname"
                        name="fathers_lastname"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mother's lastname"
                        name="mothers_lastname"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email 1"
                        name="email_1"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email 2"
                        name="email_2"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

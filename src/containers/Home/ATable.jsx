import { Table, Button } from "antd";
import axios from "axios";
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    FileSearchOutlined,
    PlayCircleOutlined
} from '@ant-design/icons';
import { useState, useEffect } from "react";

export const ATable = () => {
    const [dataSource, setDataSource] = useState([]);
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'username',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: 'Assignment',
            dataIndex: 'assignment',
            key: 'assignment'
        },
        {
            title: 'Status',
            dataIndex: 'compilation_status',
            key: 'compilation_status'
        },
        {
            title: 'Uploaded date',
            dataIndex: 'uploaded_date',
            key: 'uploaded_date'
        },
        {
            title: 'Test date',
            dataIndex: 'test_date',
            key: 'test_date'
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: () => (
                <>
                    <Button icon={<FileSearchOutlined />} />
                    <Button icon={<PlayCircleOutlined />} />
                </>
            )
        },
    ];

    const getDataTable = async () => {
        axios.post('http://localhost:4000/get_assignment_files', {})
        .then(function(response) {
            console.log(response.data);
            setDataSource(response.data.map((item) => ({
                key: item.id,
                id: item.account_id,
                username: item.username,
                assignment: item.assignment,
                compilation_status: item.compilation_status ? 
                    <>Compiled <CheckCircleOutlined /></> : 
                    <>Not compiled <CloseCircleOutlined /></>,
                uploaded_date: item.uploaded_date,
                test_date: item.test_date,
            })));
        })
        .catch(function(error) {
            console.log(error)
        })
    };

    useEffect(() => {
        getDataTable();
        console.log(dataSource);
    }, []);

    return (<Table columns={columns} dataSource={dataSource} />);
};
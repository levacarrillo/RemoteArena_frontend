import React from "react";
import { UploadOutlined } from '@ant-design/icons';
import { 
    Typography, 
    Carousel, 
    Row, 
    Col, 
    Flex, 
    Card, 
    Button, 
    Checkbox, 
    Progress,
    Table
} from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

export const Home = () => {
    const { Title } = Typography;

    const [userList, setUserList] = useState([]);

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const contentStyle = {
        margin: 0,
        width: '100%',
        height: '480px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'document name',
            dataIndex: 'document_name',
            key: 'document_name'
        },
        {
            title: 'homework',
            dataIndex: 'homework',
            key: 'homework'
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'Upload date',
            dataIndex: 'Upload date',
            key: 'Upload date'
        },
        {
            title: 'Test date',
            dataIndex: 'Test date',
            key: 'Test date'
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions'
        },
    ];

    const getUserList = async () => {
        console.log('waiting getUsers')
        axios.post('http://localhost:4000/get_users', {
            firstName: 'Fred'
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error)
        })
    };

    useEffect(() => {
        getUserList();
        setUserList([])
    }, []);

    return (
        <div className="home">
            <Title level={2}>Remote Arena</Title>
            <Title level={5}>Top view, programs and controllers</Title>
            <Row>
                <Col span={12} className="carousel">
                    <Carousel afterChange={onChange}>
                        <div>
                            <h3 style={contentStyle}>
                                <img src="http://localhost:8080/stream?topic=/camera/image" alt="" />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <img src="http://localhost:8080/stream?topic=/img_map_detection" alt="" />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <img src="http://localhost:8080/stream?topic=/tracked_image" alt="" />
                            </h3>
                        </div>
                    </Carousel>
                    <Flex justify="center">
                        <Button>Prev</Button>
                        <p>Mainly view</p>
                        <Button>Next</Button>
                    </Flex>
                </Col>
                <Col span={12} className="control-panel">
                    <Row>
                        <Col span={12}>
                            <Card 
                                title="Robot status"
                            >
                                <dl>
                                    <dt>Robot selected: </dt>
                                    <dd>None</dd>
                                    <dt>Robot temperature: </dt>
                                    <dd>--</dd>

                                </dl>
                                <strong>Battery status: </strong>
                                <Progress 
                                    type="dashboard"
                                    steps={8}
                                    percent={80}
                                    trailColor="rgba(0, 0, 0, 0.06)"
                                    strokeWidth={20}
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card 
                                title="Actions"
                            >
                                <Button>Run algorithm</Button>
                                <Button>Run and record</Button>
                                <Button>Stop algorithm</Button>
                                <Button>Return Home</Button>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                title="Basic Controls"
                            >
                                <strong>Move robot</strong>
                                <Button>^</Button>
                                <Button>&lt;</Button>
                                <Button>||</Button>
                                <Button>&gt;</Button>
                                <Button>v</Button>
                                <Checkbox>Turn on light 1</Checkbox>
                                <Checkbox>Turn on light 2</Checkbox>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                title="File manager"
                            >
                                <p>Select program to upload and test:</p>
                                <Button icon={<UploadOutlined />}>Upload file</Button>
                                <p>
                                    <span>4 files uploaded</span>
                                </p>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Table columns={columns}/>
        </div>
    );
};

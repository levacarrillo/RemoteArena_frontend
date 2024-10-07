import React from "react";
import {
    UploadOutlined,
    SearchOutlined,
    FileSearchOutlined,
    CloseCircleOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';
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
    Modal,
    Form,
    Input,
    Select,
    Upload,
    Space
} from "antd";
import { useState, useEffect } from "react";
import { ATable as Table } from "./ATable";
import axios from "axios";
import "./Home.css";

export const Home = () => {
    const { Title, Text } = Typography;

    const [userList, setUserList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const getUserList = async () => {
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

    const assignmentContent = (
        <Flex vertical>
            <Select placeholder="Select assingment"  />
            <Text>Description:</Text>
            <Text code>Due date</Text>
            <Button icon={<FileSearchOutlined />} />
        </Flex>
    );

    const assingment_file_uploader = (
        <Form>
            <Form.Item
                label="Assignment"
                name="assignment"
            >
                <Select />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Upload file"
                name="uploader"
            >
                <Upload>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>
        </Form>
    );

    useEffect(() => {
        getUserList();
        setUserList([])
    }, []);

    return (
        <div className="home">
            <Title level={2}>Remote Arena</Title>
            <Title level={5}>Top view, programs and controllers</Title>
            <Row gutter={[14]} style={{ marginBottom: '10px' }}>
                <Col sm={24} lg={12} className="carousel">
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
                    <Flex justify="center" align="center" className="carousel-buttons" >
                        <Button>Prev</Button>
                        <p>Top view</p>
                        <Button>Next</Button>
                    </Flex>
                </Col>
                <Col sm={24} lg={12} className="control-panel">
                    <Row gutter={[2, 3]}>
                        <Col span={12}>
                            <Card title="Robot status">
                                <dl>
                                    <dt>Robot selected: </dt>
                                    <dd>None</dd>
                                </dl>
                                <dl>
                                    <dt>Robot temperature: </dt>
                                    <dd>--°C</dd>
                                </dl>
                                <dl>
                                    <dt>Battery status:</dt>
                                </dl>
                                <Progress 
                                    //type="dashboard"
                                    //steps={8}
                                    //size={[80]}
                                    percent={80}
                                    trailColor="rgba(0, 0, 0, 0.06)"
                                    strokeWidth={20}
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Actions">
                                <Button>Run algorithm</Button>
                                <Button>Run and record</Button>
                                <Button>Stop algorithm</Button>
                                <Button>Return Home</Button>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Basic Controls">
                                <strong>Move robot</strong>
                                <Flex justify="center">
                                    <Button>^</Button>
                                </Flex>
                                <Flex justify="center" gap="3px">
                                    <Button>&lt;</Button>
                                    <Button>||</Button>
                                    <Button>&gt;</Button>
                                </Flex>
                                <Flex justify="center">
                                    <Button>v</Button>
                                </Flex>
                                <div className="checkbox-container">
                                    <Checkbox>Turn on light 1</Checkbox>
                                    <Checkbox>Turn on light 2</Checkbox>
                                </div>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                title={
                                    <div className="assignments-title">
                                        Assignments {
                                            <Button
                                                icon={<SearchOutlined />}
                                                onClick={() => setIsModalOpen(true)}
                                            />
                                        }
                                    </div>
                                }
                                className="assignments-card"
                            >
                                <strong>Select program to upload and test:</strong>
                                <Button
                                    icon={<UploadOutlined />}
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Upload assignment
                                </Button>
                                <Flex vertical style={{ margin: '0 0 0 auto'}}>
                                    <Text><UploadOutlined /> 4 Files uploaded</Text>
                                    <Text><CloseCircleOutlined /> 2 Not compiled </Text>
                                    <Text><CheckCircleOutlined /> 1 Compiled</Text>
                                    <Text><CheckCircleOutlined /> 1 File Tested</Text>
                                </Flex>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Table />
            <Modal
                title="Assignment list"
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                centered
            >
                {assignmentContent}
                {/* {assingment_file_uploader} */}
            </Modal>
        </div>
    );
};

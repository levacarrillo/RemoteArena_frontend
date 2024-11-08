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
import { useState, useEffect, useRef } from "react";
import { ATable as Table } from "./ATable";
import axios from "axios";
import "./Home.css";

export const Home = () => {
    const { Title, Text } = Typography;

    const carouselRef = useRef(null);

    const [userList, setUserList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [carouselItems, setCarouselItems] = useState(['http://localhost:8080/stream?topic=/camera/image',
                                                        'http://localhost:8080/stream?topic=/img_map_detection',
                                                        'http://localhost:8080/stream?topic=/tracked_image',
                                                        'http://localhost:8080/stream?topic=/usb_cam_node/image_raw',
                                                ]);

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
    
    const setLightBulbsState = async (checkValues) => {
        axios.post('http://localhost:4000/set_light_bulbs_state', {
            lights: checkValues
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error)
        })
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
    
    const goToPrevious = () => {
        carouselRef.current.prev();
    };

    const goToNext = () => {
        carouselRef.current.next();
    };

    const onClickCheckbox = (checkValues) => {
        console.log('checked=', checkValues);
        setLightBulbsState(checkValues);
    };

    const runCommand = (cmd) => {
        axios.post('http://localhost:4000/run_executable', {
            command: cmd
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error)
        })
    };

    const moveRobot = (cmd) => {
        axios.post('http://localhost:4000/move_robot_command', {
            command: cmd
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
                <Col lg={0} xl={0} xxl={1}></Col>
                <Col sm={24} lg={12} xl={12} xxl={8} className="carousel">
                    <Carousel afterChange={onChange} ref={carouselRef}>
                        {
                            carouselItems.map((img) =>
                                <div>
                                    <h3 style={contentStyle}>
                                        <img src={img} alt="" />
                                    </h3>
                                </div>
                            )
                        }
                    </Carousel>
                    <Flex justify="center" align="center" className="carousel-buttons" >
                        <Button onClick={goToPrevious}>Prev</Button>
                        <p>Top view</p>
                        <Button onClick={goToNext}>Next</Button>
                    </Flex>
                </Col>
                <Col lg={0} xl={0} xxl={1}></Col>
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
                                <Button onClick={() => runCommand('run_algorithm')}>Run algorithm</Button>
                                <Button disabled onClick={() => runCommand('run_and_record')}>Run and record</Button>
                                <Button onClick={() => runCommand('stop_algorithm')}>Stop algorithm</Button>
                                <Button disabled onClick={() => runCommand('return_home')}>Return Home</Button>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Basic Controls">
                                <strong>Move robot</strong>
                                <Flex justify="center">
                                    <Button onClick={() => moveRobot('foward')}>^</Button>
                                </Flex>
                                <Flex justify="center" gap="3px">
                                    <Button onClick={() => moveRobot('left')}>&lt;</Button>
                                    <Button onClick={() => moveRobot('stop')}>||</Button>
                                    <Button onClick={() => moveRobot('right')}>&gt;</Button>
                                </Flex>
                                <Flex justify="center">
                                    <Button onClick={() => moveRobot('backward')}>v</Button>
                                </Flex>
                                <Checkbox.Group
                                    className="checkbox-container"
                                    onChange={onClickCheckbox}
                                >
                                    <Checkbox value={1}>Turn on light 1</Checkbox>
                                    <Checkbox value={2}>Turn on light 2</Checkbox>
                                </Checkbox.Group>
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
            <Row>
                <Col span={24} xxl={22}>
                    <Table />
                </Col>
            </Row>
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

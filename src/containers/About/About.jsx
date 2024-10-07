import React from "react";
import { Typography, Flex, Col, Row, Carousel, Button, Modal, Form, Input } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { FormOutlined } from '@ant-design/icons';
import './About.css';

export const About = () => {
    const { Title } = Typography;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [content, setContent] = useState({
        description: "",
        contact_name: "",
        contact_email: ""
    });

    const contentStyle = {
        margin: 0,
        height: '480px',
        color: '#fff',
        lineHeight: '480px',
        textAlign: 'center',
        background: '#364d79',
    };

    const getAboutContent = async () => {
        axios.get('http://localhost:4000/get_about')
        .then(function(response) {
            console.log(response.data);
            setContent(response.data);
        })
        .catch(function(error) {
            console.log(error)
        })
    };

    useEffect(() => {
        getAboutContent();
    }, []);


    return(
        <div className="about">
            <Title level={2}>About us <Button onClick={() => setIsModalOpen(true)} icon={<FormOutlined />}></Button></Title>
            <Row className="content">
                <Col span={12}>
                    <p className="text">
                        {content.description}
                    </p>
                    <span>{content.contact_name}</span>
                    <span>{content.contact_email}</span>
                </Col>
                <Col span={12}>
                    <Carousel arrows infinite={false} className="carousel">
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                    </Carousel>
                </Col>
            </Row>
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
                        label="Description"
                        name="description"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Contact name"
                        name="contact_name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Contact email"
                        name="contact_email"
                    >
                        <Input />
                    </Form.Item>
                </Form>

            </Modal>
        </div>    
    );
};

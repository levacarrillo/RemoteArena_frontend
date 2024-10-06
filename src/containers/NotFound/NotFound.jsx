import React from "react";
import { Typography, Flex } from "antd";
import './NotFound.css'

export const NotFound = () => {
    const { Title } = Typography;

    return (
        <div className="not-found">
            <Title level={2}>Page not found</Title>
            <Flex className="pumas-logo" align="flex-end">
                <img  alt="Logo" src="https://biorobotics.fi-p.unam.mx/wp-content/uploads/2019/01/logo_white-300x287.png" />
            </Flex>
        </div>
    );
};

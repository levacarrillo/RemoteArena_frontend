import React from "react";
import { Typography, Flex } from "antd";
import './InternalError.css'

export const InternalError = () => {
    const { Title } = Typography;

    return (
        <div className="internal-error">
            <Title level={2}>There was an internal error</Title>
            <Flex className="pumas-logo" align="flex-end">
                <img  alt="Logo" src="https://biorobotics.fi-p.unam.mx/wp-content/uploads/2019/01/logo_white-300x287.png" />
            </Flex>
        </div>
    );
};

import React from "react";
import { Typography, Calendar as CalendarT } from "antd";
import './Calendar.css'

export const Calendar = () => {
    const { Title } = Typography;

    return (
        <div className="not-found">
            <Title level={2}>Calendar</Title>
            <CalendarT />
        </div>
    );
};

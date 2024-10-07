import { Button, Menu, Popover, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import './Navbar.css';

export const Navbar = () => {

    const items = [
        {
            label: (
                <a href="https://biorobotics.fi-p.unam.mx/">
                    Biorobotics UNAM
                </a>
            ),
            key: 'biorobotics_page',
            icon:
                <div>
                    <img
                        width={40}
                        src="https://biorobotics.fi-p.unam.mx/wp-content/uploads/2020/09/logoJustina.JPEG-e1591660408331.png"
                        className="justina-icon"
                    />
                </div>
        },
        {
            label: (
                <a href='/'>Home</a>
            ),
            key: '/home',
        },
        {
            label: (
                <a href='/calendar'>Calendar</a>
            ),
            key: '/calendar',
        },
        {
            label: 'Administrator',
            key: 'SubMenu',
            children: [
                {
                    label: (
                        <a href='/adminAssignments'>Assignments</a>
                    ),
                    key: '/adminAssignments'
                },
                {
                    label: (
                        <a href='/adminAssignmentFiles'>Assignment Files</a>
                    ),
                    key: '/adminAssignmentFiles'
                },
                {
                    label: (
                        <a href='/adminStudents'>Students</a>
                    ),
                    key: '/adminStudents'
                },
                {
                    label: (
                        <a href='/adminProfessors'>Professors</a>
                    ),
                    key: '/adminProfessors'
                }
            ],
        },
        {
            label: <a href='/about'>About us</a>,
            key: '/about',
        },
        {
            label: (
                <Popover content={<Button className="logout-button">Logout</Button>}>
                    <Avatar size={64} icon={<UserOutlined />} />
                </Popover>
            ),
            key: '/logout',
            // icon: <Avatar className= size={64} icon={<UserOutlined />} />
            className: "logout"
        }
    ];
    const onClick = (e) => {
        console.log('click', e);
    };
    return (
        <Menu onClick={onClick} mode="horizontal" items={items}  className="navbar" />
    );
};

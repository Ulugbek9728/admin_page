import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import "./main.scss"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Link, Route, Switch} from "react-router-dom";
import AddCourse from "../course/add_course";
import ListCourse from "../course/list_course";
import LessonAdd from "../lesson/lessonAdd";




const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


function Main(props) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="course">
                            <Link to={"/admin/main/course/add"}>
                                <Menu.Item key="1">Course add</Menu.Item>
                            </Link>
                            <Link to={"/admin/main/course/list"}>
                                <Menu.Item key="2">Course list</Menu.Item>
                            </Link>

                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="lesson">
                            <Link to={"/admin/main/lesson/add"}>
                                <Menu.Item key="3">Lesson add</Menu.Item>
                            </Link>
                            <Link to={"/admin/main/lesson/list"}>
                                <Menu.Item key="4">Lesson list</Menu.Item>
                            </Link>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: ()=> setCollapsed(prevState => !prevState),
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >

                        <Switch>
                            <Route path={"/admin/main/lesson/add"} component={LessonAdd} />
                            <Route path={"/admin/main/course/add"} component={AddCourse} />
                            <Route path={"/admin/main/course/list"} component={ListCourse} />
                        </Switch>


                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default Main;
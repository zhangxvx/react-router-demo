import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

export class Header extends React.Component {
 
    render() {
        return (
            <Menu
                mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Link to='/' replace><Icon type="mail" />Navigation Home</Link>
                </Menu.Item>
                <Menu.Item key="">
                    <Link to='/one' replace><Icon type="" />Navigation One</Link>
                </Menu.Item>
                <Menu.Item key="alipay">
                    <Link to='/two' replace>Navigation Two</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

'use client';
import { Drawer, Menu } from 'antd';
import React, { useState } from 'react';

import {
	HomeOutlined,
	UserOutlined,
	AppstoreOutlined,
	ContactsOutlined,
	MenuOutlined,
} from '@ant-design/icons';
import Logo from '@/assets/svgs/Logo';
import Stack from '@/assets/svgs/Stack';

const MainNavbar = () => {
	const [drawerVisible, setDrawerVisible] = useState(false);

	const handleDrawerToggle = () => {
		setDrawerVisible(!drawerVisible);
	};
	const menuItems = (
		<Menu mode='horizontal'>
			<Menu.Item key='home' icon={<HomeOutlined />}>
				Home
			</Menu.Item>
			<Menu.Item key='about' icon={<UserOutlined />}>
				About
			</Menu.Item>
			<Menu.Item key='services' icon={<AppstoreOutlined />}>
				Services
			</Menu.Item>
			<Menu.Item key='contact' icon={<ContactsOutlined />}>
				Contact
			</Menu.Item>
		</Menu>
	);

	return (
		<div
			style={{
				width: '100%',
				height: '65px',
				overflow: 'hidden',
				backgroundColor: '',
			}}>
			<div
				style={{
					width: '20%',
					padding: '20px',
					display: 'flex',
					alignItems: 'center',
					gap: '10px',
				}}>
				<Logo></Logo>
				<Stack></Stack>
			</div>

			{/* <div className='menu-toggle' onClick={handleDrawerToggle}>
				<MenuOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />L
			</div> */}
			{/* <Drawer
				className='drawer'
				title='Menu'
				placement='left'
				closable={false}
				onClose={handleDrawerToggle}
				visible={drawerVisible}
				bodyStyle={{ padding: 0 }}>
				{menuItems}
			</Drawer> */}
		</div>
	);
};

export default MainNavbar;

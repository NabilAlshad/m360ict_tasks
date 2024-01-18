import { AuthHeaderValues } from '@/types/interfaces';
import { Flex } from 'antd';
import React from 'react';
import CustomButton from '../atoms/CustomButton';
import GoogleIcon from '@/assets/svgs/GoogleIcon';
import AppleIcon from '@/assets/svgs/AppleIcon';

const AuthFormHeader: React.FC<AuthHeaderValues> = ({ headerTitle = '', authTypeTitle = '' }) => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<h4>Getting Started</h4>
				<p>Create an account to contiune</p>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignContent: 'center',
					margin: '20px',
					gap: '20px',
				}}>
				<CustomButton
					styles={{
						display: 'flex',
						borderRadius: '16px',
						border: '1px solid none',
						width: '255px',
						height: '58px',
						background: '#F0F5FA',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					icon={<GoogleIcon />}>
					Sign Up With Google
				</CustomButton>
				<CustomButton
					styles={{
						display: 'flex',
						borderRadius: '16px',
						border: '1px solid none',
						width: '255px',
						height: '58px',
						background: '#F0F5FA',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					icon={<AppleIcon />}>
					Sign Up with Apple Id
				</CustomButton>
			</div>
			<p style={{ textAlign: 'center' }}>OR</p>
		</>
	);
};

export default AuthFormHeader;

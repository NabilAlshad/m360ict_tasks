import { AuthFooterProps } from '@/types/interfaces';
import Link from 'next/link';
import React from 'react';

const AuthFormFooter: React.FC<AuthFooterProps> = ({ title, authType, link }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<p>
				{title}
				<span
					style={{
						color: '#377DFF',
						fontSize: '16px',
						textDecoration: 'none',
						fontWeight: '500',
					}}>
					<Link href={link}>{authType}</Link>
				</span>
			</p>
		</div>
	);
};

export default AuthFormFooter;

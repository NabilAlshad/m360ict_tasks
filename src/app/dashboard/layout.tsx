'use client';
import MainNavbar from '@/components/templates/MainNavbar';
import Sidebar from '@/components/templates/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<MainNavbar />
			<div style={{ display: 'flex' }}>
				<Sidebar />
				<div style={{ marginLeft: '250px' }}>{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;

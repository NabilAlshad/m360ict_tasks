import DashboardIcon from '@/assets/svgs/DashboardIcon';
import SalesIcon from '@/assets/svgs/SalesIcon';
import UsersIcon from '@/assets/svgs/UsersIcon';

const Sidebar = () => {
	return (
		<div
			style={{
				position: 'fixed',
				width: '250px',

				height: '100vh',
			}}>
			<div style={{ padding: '20px' }}>
				<p style={{ color: '#B0B7C3' }}>pages</p>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						cursor: 'pointer',
						color: '#B0B7C3',
						gap: '10px',
					}}>
					<DashboardIcon />
					<p>Dashboard</p>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						color: '#B0B7C3',
						cursor: 'pointer',
						gap: '10px',
					}}>
					<UsersIcon />
					<p>Users</p>
				</div>
				<div
					style={{
						display: 'flex',
						cursor: 'pointer',
						alignItems: 'center',
						color: '#B0B7C3',
						gap: '10px',
					}}>
					<SalesIcon />
					<p>Sales</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

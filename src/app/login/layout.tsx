import MainNavbar from '@/components/templates/MainNavbar';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<MainNavbar />
			{children}
		</>
	);
};

export default AuthLayout;

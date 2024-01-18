import MainNavbar from '@/components/templates/MainNavbar';

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<MainNavbar />
			{children}
		</>
	);
};

export default SignUpLayout;

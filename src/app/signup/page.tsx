import AuthFormHeader from '@/components/molecules/AuthFormHeader';
import SignUpForm from '../../components/organisms/SignUpForm';

const page = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '5%',
				justifyContent: 'center',
			}}>
			<div style={{ width: '50%' }}>
				<AuthFormHeader
					googleButtonTitle='Sign In with Apple ID'
					appButtonTitle='Sign Up with Apple ID'
					headerTitle='Getting Started'
					authTypeTitle='Create an account to continue!'
				/>
				<SignUpForm />
			</div>
		</div>
	);
};

export default page;

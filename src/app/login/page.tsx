import AuthFormHeader from '@/components/molecules/AuthFormHeader';
import SignUpForm from '../../components/organisms/SignUpForm';

const Login = () => {
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
				<AuthFormHeader headerTitle='' authTypeTitle='' />
				<SignUpForm />
			</div>
		</div>
	);
};

export default Login;

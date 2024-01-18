'use client';
import AuthFormHeader from '@/components/molecules/AuthFormHeader';
import SignInForm from '@/components/organisms/SignInForm';
import { useGetSignInQuery } from '@/lib/features/auth/login/loginSlice';

const page = () => {
	const { data, isLoading, isError } = useGetSignInQuery();

	console.log(isLoading, isError, data);

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
					googleButtonTitle='Sign In with Google'
					appButtonTitle='Sign In with Apple ID'
					headerTitle='Sign In'
					authTypeTitle='Welcome back, you’ve been missed!'
				/>
				<SignInForm />
			</div>
		</div>
	);
};

export default page;

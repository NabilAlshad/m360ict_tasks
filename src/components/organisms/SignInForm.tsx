'use client';
import { loginValues } from '@/types/interfaces';
import { SignInInitialValues } from '@/validation/signIn/SignInInitialValues';
import { SignInSchema } from '@/validation/signIn/SignInSchema';
import { Form } from 'antd';
import { Formik, FormikProps } from 'formik';
import React from 'react';
import CustomInputField from '../atoms/CustomInputField';
import CustomPasswordField from '../atoms/CustomPasswordField';
import EmailIcon from '@/assets/svgs/EmailIcon';
import LockIcon from '@/assets/svgs/LockIcon';
import CustomCheckBox from '../atoms/CustomCheckBox';
import AuthFormFooter from '../molecules/AuthFormFooter';

const SignInForm: React.FC = () => {
	const handleSubmit = (values: any) => {
		console.log(values);
	};
	return (
		<div
			style={{
				display: 'flex',
				// flexDirection: 'column',
				justifyContent: 'center',
				alignContent: 'center',
			}}>
			<Formik
				initialValues={SignInInitialValues}
				validationSchema={SignInSchema}
				onSubmit={handleSubmit}>
				{(formikProps: FormikProps<loginValues>) => (
					<Form>
						<CustomInputField
							styles={{
								width: ' 540px',
								height: '58px',
								marginBottom: '10px',
								borderRadius: '16px',
							}}
							name='email'
							placeholder='Your Email'
							prefix={<EmailIcon />}
							type='email'
						/>

						<CustomPasswordField
							name='password'
							styles={{
								width: ' 540px',
								marginBottom: '10px',
								borderRadius: '16px',
								height: '58px',
							}}
							placeholder='Your Password'
							type='password'
							prefix={<LockIcon />}
						/>
						<CustomCheckBox title='Remember Me' name='rememberMe' />

						<button
							style={{
								width: '540px',
								borderRadius: '16px',
								border: '1px solid #377DFF',
								color: 'white',
								background: '#377DFF',
								height: '58px',
							}}
							type='submit'>
							Sign In
						</button>
						<AuthFormFooter title='Don’t have an account yet? ' link='/signup' authType='Sign Up' />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SignInForm;

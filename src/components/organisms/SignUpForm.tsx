'use client';

import { Form, Formik, FormikProps } from 'formik';
import React from 'react';

import CustomInputField from '../atoms/CustomInputField';
import CustomPasswordField from '../atoms/CustomPasswordField';
import { SignUpInitialValues } from '../../validation/signUp/SignUpInitialValues';
import { SignUpSchema } from '../../validation/signUp/SignUpSchema';
import LockIcon from '@/assets/svgs/LockIcon';
import EmailIcon from '@/assets/svgs/EmailIcon';
import UserNameIcon from '@/assets/svgs/UserNameIcon';
import { Button } from 'antd';
import CustomCheckBox from '../atoms/CustomCheckBox';
import { SignUpValues } from '@/types/interfaces';
import AuthFormFooter from '../molecules/AuthFormFooter';

const SignUpForm: React.FC = () => {
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
				initialValues={SignUpInitialValues}
				validationSchema={SignUpSchema}
				onSubmit={handleSubmit}>
				{(formikProps: FormikProps<SignUpValues>) => (
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
						<CustomInputField
							styles={{
								width: ' 540px',
								height: '58px',
								borderRadius: '16px',
								marginBottom: '10px',
							}}
							name='username'
							prefix={<UserNameIcon />}
							placeholder='Your Name'
							type='text'
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
						<CustomCheckBox title='I agree to the Terms & Conditions' name='termsAndConditions' />
						{/* <div style={{ display: 'inlineBlock' }}>
							// <CustomCheckBox name='termsAndConditions' />
						</div> */}
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
							Sign Up
						</button>
						<AuthFormFooter title='Already have an account?' authType='Sign In' link='/login' />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SignUpForm;

import * as yup from 'yup';

export const SignInSchema = yup.object({
	email: yup.string().required('Please enter a valid email address.'),
	password: yup.string().required('Please enter a password'),
	rememberMe: yup.boolean().oneOf([true], 'You need to accept the terms and conditions'),
});

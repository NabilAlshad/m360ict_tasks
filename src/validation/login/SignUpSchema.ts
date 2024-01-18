import * as yup from 'yup';

export const SignUpSchema = yup.object({
	email: yup.string().required('Please enter a valid email address.'),
	username: yup.string().required('Please enter a username'),
	password: yup.string().required('Please enter a password'),
	termsAndConditions: yup.boolean().oneOf([true], 'You need to accept the terms and conditions'),
});

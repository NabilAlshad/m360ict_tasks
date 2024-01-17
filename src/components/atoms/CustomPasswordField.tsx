import { Input } from 'antd';
import { Field, useField } from 'formik';
import React, { useState } from 'react';

interface FieldProps {
	name: string;
	type?: string;
	placeholder: string;
}

const CustomInputField: React.FC<FieldProps> = ({ name, type }) => {
	const [field, meta] = useField(name);
	const [showPassword, setShowPassword] = useState<Boolean>(false);

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div>
			<div>
				<Input {...field} name={name} type={showPassword ? 'text' : 'password'}></Input>
				<button onClick={handleShowPassword}>show password</button>
			</div>
			{meta?.touched && meta?.error && <div>{meta?.error}</div>}
		</div>
	);
};

export default CustomInputField;

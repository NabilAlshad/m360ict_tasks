import { Input } from 'antd';
import { Field, useField } from 'formik';
import React, { useState } from 'react';

interface FieldProps {
	name: string;
	type?: string;
	styles: React.CSSProperties;
	placeholder?: string;
	prefix?: any;
}

const CustomInputField: React.FC<FieldProps> = ({ name, styles, type, placeholder, prefix }) => {
	const [field, meta] = useField(name);
	const [showPassword, setShowPassword] = useState<Boolean>(false);

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			<div style={{ position: 'relative' }}>
				<Input
					style={styles}
					{...field}
					prefix={prefix}
					name={name}
					placeholder={placeholder}
					type={showPassword ? 'text' : 'password'}></Input>
				<button
					style={{ position: 'absolute', top: '10px', right: '20px' }}
					onClick={handleShowPassword}>
					show password
				</button>
			</div>
			{meta?.touched && meta?.error && <div style={{ color: 'red' }}>{meta?.error}</div>}
		</>
	);
};

export default CustomInputField;

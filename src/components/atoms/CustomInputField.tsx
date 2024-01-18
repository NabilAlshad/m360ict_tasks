import { Input } from 'antd';
import { Field, useField } from 'formik';
import React from 'react';

interface FieldProps {
	name: string;
	type: string;
	styles: React.CSSProperties;
	prefix?: any;
	placeholder?: string;
}

const CustomInputField: React.FC<FieldProps> = ({ name, type, styles, placeholder, prefix }) => {
	const [field, meta] = useField(name);

	return (
		<div>
			<Input
				style={styles}
				{...field}
				name={name}
				placeholder={placeholder}
				prefix={prefix}
				type={type}></Input>
			{meta?.touched && meta?.error && <div style={{ color: 'red' }}>{meta?.error}</div>}
		</div>
	);
};

export default CustomInputField;

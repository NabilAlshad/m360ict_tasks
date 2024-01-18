import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
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
	// const [showPassword, setShowPassword] = useState<Boolean>(false);

	// const handleShowPassword = () => {
	// 	setShowPassword(!showPassword);
	// };
	const [passwordVisible, setPasswordVisible] = React.useState(false);
	return (
		<>
			<Input.Password
				style={styles}
				{...field}
				prefix={prefix}
				name={name}
				placeholder={placeholder}
				// placeholder='input password'
				iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
			/>

			{meta?.touched && meta?.error && <div style={{ color: 'red' }}>{meta?.error}</div>}
		</>
	);
};

export default CustomInputField;

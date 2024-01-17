import { Field, useField } from 'formik';
import React from 'react';

interface FieldProps {
	name: string;
	type: string;
}

const CustomInputField: React.FC<FieldProps> = ({ name, type }) => {
	const [field, meta] = useField(name);

	return (
		<div>
			<Field name={name} type={type}></Field>
			{meta?.touched && meta?.error && <div>{meta?.error}</div>}
		</div>
	);
};

export default CustomInputField;

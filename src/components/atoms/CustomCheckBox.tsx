import { Checkbox } from 'antd';
import { useField } from 'formik';
import React from 'react';

interface customCheckboxInterface {
	name: any;
	title: string;
}

const CustomCheckBox: React.FC<customCheckboxInterface> = ({ name, title }) => {
	const [field, meta] = useField(name);
	return (
		<div style={{ marginTop: '10px', marginBottom: '20px' }}>
			<Checkbox style={{ color: '#B0B7C3' }} {...field}>
				{title}
			</Checkbox>
			{meta?.touched && meta?.error && <div style={{ color: 'red' }}>{meta?.error}</div>}
		</div>
	);
};

export default CustomCheckBox;

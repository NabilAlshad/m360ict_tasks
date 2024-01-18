import { Checkbox } from 'antd';
import { useField } from 'formik';
import React from 'react';

interface customCheckboxInterface {
	name: any;
}

const CustomCheckBox: React.FC<customCheckboxInterface> = ({ name }) => {
	const [field, meta] = useField(name);
	return (
		<div style={{ marginTop: '10px', marginBottom: '20px' }}>
			<Checkbox style={{ color: '#B0B7C3' }} {...field}>
				I agree to the Terms & Conditions
			</Checkbox>
			{meta?.touched && meta?.error && <div style={{ color: 'red' }}>{meta?.error}</div>}
		</div>
	);
};

export default CustomCheckBox;

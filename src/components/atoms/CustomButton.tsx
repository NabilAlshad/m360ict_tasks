import { Button } from 'antd';
import { CustomButtonTypes } from '@/types/interfaces';

const CustomButton: React.FC<CustomButtonTypes> = ({ styles, buttonType, icon, children }) => {
	return (
		<Button style={styles} type={buttonType} icon={icon}>
			{children}
		</Button>
	);
};

export default CustomButton;

export interface loginValues {
	email: string;
	username: string;
	password: string;
}
export interface AuthHeaderValues {
	headerTitle: String;
	authTypeTitle: String;
}

export interface CustomButtonTypes {
	buttonType?: any | string;
	icon?: React.ReactNode;
	children: JSX.Element[] | JSX.Element | string;
	styles?: React.CSSProperties;
}
export interface SignUpValues {
	email: string;
	username: string;
	password: string;
	termsAndConditions: Boolean;
}

export interface loginValues {
	email: string;
	rememberMe: false;
	password: string;
}
export interface AuthHeaderValues {
	headerTitle: String;
	authTypeTitle: String;
	googleButtonTitle: string;
	appButtonTitle: string;
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

export interface AuthFooterProps {
	title: string;
	authType: string;
	link: string;
}
export interface postSignUpValues {
	email: string;
	password: string;
}

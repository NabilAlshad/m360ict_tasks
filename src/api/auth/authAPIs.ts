import api from '../config/axiosInstance';

export const signUpApi = async (payload: { data: string }) => {
	const { data } = payload;

	try {
		const response = await api.post('api/register');
		console.log(response);
		return response;
	} catch (error) {
		return error;
	}
	// const response = await fetch('https://api.example.com/post-data', {
	//   method: 'POST',
	//   headers: {
	//     'Content-Type': 'application/json',
	//     // Add any additional headers as needed
	//   },
	//   body: JSON.stringify({ data }),
	// });

	// if (!response.ok) {
	//   // Handle errors, for example:
	//   const errorData = await response.json();
	//   throw new Error(errorData.message);
	// }

	// return response.json();
};

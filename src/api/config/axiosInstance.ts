import axios from 'axios';

const baseUrl = 'https://reqres.in/';

const api = axios.create({
	baseURL: `${baseUrl}`,
	timeout: 30000,
	// headers: {
	// 	Authorization: `Bearer VCdDydlprS9E1fIGYGAApQu20ST7GH`,
	// },
});

export default api;

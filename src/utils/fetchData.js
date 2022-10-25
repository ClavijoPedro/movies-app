import axios from './customAxios';

export const fetchData = async (url) => {
	try {
		const response = await axios.get(url);
		const data = response.data;
		return data;
	} catch (error) {
		console.log('fetchData Error:', error.message);
		return {error: error.message}
	}
};

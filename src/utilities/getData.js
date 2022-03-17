import axios from 'axios';

export async function getData(endpoint) {
	let response = await axios.get(`${endpoint}`);
	return response.data;
}

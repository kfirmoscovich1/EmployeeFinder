import axios from 'axios';

const BASE_URL = 'https://randomuser.me/api/';

export const fetchEmployees = async (seed = 'default', results = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}?results=${results}&seed=${seed}`);
        return response.data.results;
    } catch (err) {
        console.error('API fetch failed:', err);
    }
};

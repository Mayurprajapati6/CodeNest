import axios from "../config/axiosConfig";

export const pingApi = async () => {
    try {
        const response = await axios.get('/api/v1/ping');
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
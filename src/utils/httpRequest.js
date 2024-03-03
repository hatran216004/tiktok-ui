import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    // response sẽ là một đối tượng phản hồi (response object) được trả về từ Axios
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;

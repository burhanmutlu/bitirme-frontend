import axios from 'axios';

export const signup = (body) => {
    return axios.post('/api/v1/register', body);
}

export const login = (body) => {
    return axios.post('/api/v1/login', body)
}

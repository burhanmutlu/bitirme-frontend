import axios from 'axios';

const token = localStorage.getItem('token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export const signup = (body) => {
    return axios.post('/api/v1/register', body);
}

export const login = (body) => {
    return axios.post('/api/v1/login', body);
}

export const activateUser = (token) => {
    return axios.patch(`/api/v1/users/${token}/active`);
}

export const getAllFiles = (id) => {
    return axios.get(`/api/v1/files/user/${id}`, config);
}

export const getFilesById = (id) => {
    return axios.get(`/api/v1/files/${id}`, config);
}

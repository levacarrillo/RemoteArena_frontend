import api from './api';

export const getUsersCatalogue = async (data) => api.post('http://localhost:4000/get_users', data);
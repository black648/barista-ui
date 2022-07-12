import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/api/auth/exists/email/' + email);
export const checkUsernameExists = (username) => axios.get('/api/auth/exists/username/' + username);

export const apiJoin = ({email, username, password}) => axios.post('/login/join', { email, username, password });
export const apiLogin = ({mberId, password}) => axios.post('/login/login', { mberId, password });

export const checkStatus = () => axios.get('/api/auth/check');
export const apiLogout = () => axios.post('/api/auth/logout');
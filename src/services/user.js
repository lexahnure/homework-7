import { rest } from './rest';

const login = data => rest.post(`public/login`, data);
const register = data => rest.post(`public/user`, data);

const checkUser = () => rest.get(`public/checkUser`);
const logout = () => rest.get('logout');
const updateUser = data => rest.put('user', data);

export { login, checkUser, register, logout, updateUser };

import { rest } from './rest';

const login = data => rest.post(`public/login`, data);
const register = data => rest.post(`public/user`, data);

const checkUser = () => rest.get(`public/checkUser`);

export { login, checkUser, register };

import axios from 'axios';
import store from '../store/store'

const instance = axios.create({
  baseURL: 'https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api',
});

instance.interceptors.request.use(config => {
  const user = store.state.user;
  
  if (user && user.signInUserSession && user.signInUserSession.idToken) {
    const token = user.signInUserSession.idToken.jwtToken;
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  
  return config;
}, error => {
  return Promise.reject(error);
});

export default instance;

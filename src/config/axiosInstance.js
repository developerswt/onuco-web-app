import axios from 'axios';
import store from '../store/store'

const instance = axios.create({
  baseURL: 'https://bbjh9acpfc.ap-southeast-1.awsapprunner.com/api',
 //https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api
 //https://localhost:7233/api/UserCourseSubscription?courseId=1
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

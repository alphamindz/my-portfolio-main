import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// लॉगिन करने के बाद टोकन को हर रिक्वेस्ट के Header में भेजने के लिए
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const login = (formData) => API.post('/auth/login', formData);
export const fetchProjects = () => API.get('/projects');
export const addProject = (newProject) => API.post('/projects', newProject);

export default API;
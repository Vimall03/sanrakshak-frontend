import axios from 'axios'
import { useAuth } from '@/context/AuthContext';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  // other configurations
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Access access token and refresh token from AuthContext
    const auth = useAuth();
    const accessToken = auth.token;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const auth = useAuth();

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post('/api/refresh-token');
        const newAccessToken = response.data.accessToken;

        // Update access token in AuthContext
        auth.setIsAuthenticated(true);
        auth.setAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (error) {
        console.error('Refresh token API error:', error);
      }

    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
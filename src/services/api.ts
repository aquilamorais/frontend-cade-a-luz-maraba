import axios from 'axios';
import { useNavigate } from 'react-router';

const SUPABASE_URL = 'https://zhjlrwaoornyrrvgeecx.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const navigate = useNavigate();

export const api = axios.create({
    baseURL: `${SUPABASE_URL}/rest/v1`,
    headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            navigate('/login');
        }
        return Promise.reject(error);
    }
);
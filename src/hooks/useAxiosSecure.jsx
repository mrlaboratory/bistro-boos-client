import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';



const useAxiosSecure = () => {
    const { logOutUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:3000',
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            // console.log(config);
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // await logOutUser();
                    // navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logOutUser, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;
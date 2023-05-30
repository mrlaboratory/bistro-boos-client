import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useUserRole from '../hooks/useUserRole';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AdminRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const { data, refetch, isLoading, error } = useUserRole()
    const navigate = useNavigate()
console.log(loading, isLoading );
    if (loading || isLoading) {
        return <Spinner></Spinner>
    }

    if (user && user?.email && data?.role === "Admin") {
        return (
            <div>
                {children}
            </div>
        );
    } else {
        toast.error('This page only for admin')
        navigate('/dashboard')
    }



};

export default AdminRoute;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from '../hooks/useAxiossecure';
import useUserRole from '../hooks/useUserRole';
import useUser from '../hooks/useUser';

const UserManage = () => {
    const { user } = useContext(AuthContext)
    const { data: users, refetch } = useUser()
    const [axiosSecure] = useAxiosSecure()
    const { data } = useUserRole()
    console.log('role', data);


    const handleRole = async (email, r) => {
        const role = {
            role: r
        }
        const res = await axiosSecure.post(`/user/admin/${email}`, role);
        refetch()
    }

    return (
        <div>
            <h2 className='text-xl font-bold'>Total users {users?.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((u, i) => <tr className={`${user?.email === u.email ? 'text-green-500 font-bold' : ''}`} key={u._id}>
                                    <th>{i + 1}</th>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u?.role == 'Admin' ? 'Admin' : 'User'}</td>
                                    <td>
                                        {
                                            u?.role == 'Admin' ? (user?.email !== u.email && <button onClick={() => handleRole(u.email, 'User')} className='btn btn-sm'>Make User</button>) : <button onClick={() => handleRole(u.email, 'Admin')} className='btn btn-sm'>Make Admin</button>
                                        }

                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManage;
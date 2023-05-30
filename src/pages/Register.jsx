import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const {createUser, user, path} = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const userRegister = d => {
        console.log(d)
        createUser(d.email,d.password)
        .then(d => {
            const userInfo = {
                name : d.user.displayName, 
                email : d.user.email
            }
            fetch('http://localhost:3000/users', {
                method: 'POST', 
                headers: {
                    'content-type':'application/json'
                }, 
                body: JSON.stringify(userInfo)
            })
            .then(res => res.json())
            .then(da => console.log(da))
            toast.success('account created successfully !!')
            console.log(d)
        })
        .catch(e => console.log(e))
    }

    useEffect(()=> {
        if(user && user?.email){
          navigate(path, {replace : true})
        }
      
      },[user])

    return (
        <div className='container mx-auto flex justify-center items-center'>
            <form onSubmit={handleSubmit((data) => userRegister(data))} className='p-10 w-[400px]'>

                <input {...register('name')} type="name" placeholder="Your name" className="input input-bordered  w-full mt-2" /> <br />

                <input {...register('email', { required: true })} type="email" placeholder="Your Email" className="input input-bordered  w-full mt-2" /> <br />
                <input  {...register('photo')} type="text" placeholder="Photo url" className="input input-bordered  w-full mt-2" />  <br />
                <input  {...register('password', {required: true })} type="password" placeholder="Your password" className="input input-bordered  w-full mt-2" />  <br />
                <Link to='/login'>You have account ?  Login now </Link>
                <button className='btn w-full mt-3'>Register </button>
            </form>
        </div>
    );
};

export default Register;
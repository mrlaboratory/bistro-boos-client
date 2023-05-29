import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const userRegister = d => {
        console.log(d)
    }

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
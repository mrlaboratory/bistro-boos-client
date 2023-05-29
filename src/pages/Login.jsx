import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';



const Login = () => {
  const { loginUser, path, user } = useContext(AuthContext)
  const captchaRef = useRef()
  const [dissable, setDissable] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const passowrd = form.password.value
    const captcha = captchaRef.current.value
    console.log(email, passowrd, captcha)
    loginUser(email, passowrd)
      .then(res => {
        console.log(res)
        toast.success('login successfully !!')
      })
      .catch(e => {
        toast.error(e.message)
        console.log(e)
      })
  }

  const handleeValidate = () => {
    const captcha = captchaRef.current.value
    if (validateCaptcha(captcha) == true) {
      setDissable(false)
    } else {
      console.log('did not match')
      setDissable(true)
    }
  }

  useEffect(()=> {
    if(user && user?.email){
      navigate(path, {replace : true})
    }
  
  },[user])


  return (
    <div className='container mx-auto'>
      <div className="hero min-h-screen bg-base-200 p-5">
        <div className="hero-content flex flex-col md:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input required name='email' type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input required name='password' type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input  name='captcha' ref={captchaRef} type="text" placeholder="captcha" className="input input-bordered" />
                <button type='button' onClick={handleeValidate} className='btn w-full btn-sm'>Validate </button>
              </div>
              <Link to='/register'>Create a new account !</Link>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
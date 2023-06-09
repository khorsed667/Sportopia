import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const captcharef = useRef()

    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handelCaptcha = () =>{
        const captcha = captcharef.current.value;
        console.log(captcha);
        if (validateCaptcha(captcha)==true) {
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Join now!</h1>
                    <p className="py-6">Welcome to our vibrant summer school website, where a world of thrilling sports awaits! Join us and embark on an exhilarating journey of athletic exploration and unforgettable summer memories.</p>
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="name" ref={captcharef} name="captcha" placeholder="Fill the captcha" className="input input-bordered" />
                            <button onClick={handelCaptcha} className='btn-xs btn-outline mt-2'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-success" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Providers/AuthProviders';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const [showPassword, setPasswordVisibility] = useState(false)
    const [disabled, setDisabled] = useState(true);

    const { singIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handelCaptcha = (e) => {
        const captcha = e.target.value;
        console.log(captcha);
        if (validateCaptcha(captcha) == true) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!showPassword)
    }


    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                //TODO: Implement sweet alert!
                navigate(from, { replace: true });
            })
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
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" />
                            {
                                showPassword ? (
                                    <FaEyeSlash
                                        onClick={togglePasswordVisibility}
                                        className="absolute cursor-pointer text-green-600 top-[52px] left-[293px]"
                                    />
                                ) : (
                                    <FaEye
                                        onClick={togglePasswordVisibility}
                                        className="absolute cursor-pointer text-green-600 top-[52px] left-[293px]"
                                    />
                                )
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="name" onBlur={handelCaptcha} name="captcha" placeholder="Fill the captcha" className="input input-bordered" />
                        </div>
                        {/* TODO: need to disable this button */}
                        <div className="form-control mt-6">
                            <input disabled={false} className="btn btn-success" type="submit" value="Login" />
                        </div>
                        <div><span>New to Spoetopia? please <Link to='/singup' className='text-green-500'>SingUp</Link></span></div>
                    </form>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
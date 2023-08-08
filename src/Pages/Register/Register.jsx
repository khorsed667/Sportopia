import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";


const Register = () => {

    const nevigate = useNavigate();
    const { singUp, updateUserProfile } = useContext(AuthContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        singUp(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(()=>{
                        console.log('User profile Updated Successfully');
                        const userInfo = {name:data.name, email:data.email}
                        fetch('https://sportofia-server-khorsed667.vercel.app/user',{
                            method: 'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(userInfo)
                        })
                        .then(res => res.json())
                        .then(data =>{
                            if(data.insertedId){
                                reset();
                                nevigate('/');
                                Swal.fire(
                                    'Success!',
                                    'Welcome to Soprtofia.',
                                    'success'
                                )
                            }
                        })

                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Join now!</h1>
                    <p className="py-6">Welcome to our vibrant summer school website, where a world of thrilling sports awaits! Join us and embark on an exhilarating journey of athletic exploration and unforgettable summer memories.</p>
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span>Name is required!</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="photo" {...register("photo", { required: true })} placeholder="photo" className="input input-bordered" />
                            {errors.photo && <span>Photo Url is required!</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span>Email is required!</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'minLength' && <p className="text-red-500" role="alert">Need to be atleast 6 character!</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-500" role="alert">Not more than 20 character!</p>}
                            {errors.password?.type === 'required' && <p className="text-red-500" role="alert">password firld is mist required!</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-500">Password need to with one Uppercase, one lower case, one number and one special character!</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirmPassword" placeholder="retype password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success" type="submit" value="SingUp" />
                        </div>
                        <div><span>Already have an account? please <Link to='/login' className='text-green-500'>login</Link></span></div>
                    </form>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
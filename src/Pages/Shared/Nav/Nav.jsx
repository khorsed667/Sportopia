import { Link } from 'react-router-dom';
import img from './../../../assets/Course/avatar.jpg'
import logo from './../../../assets/Course/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useClass from '../../../hooks/useClass';

const Nav = () => {

    const { user, logOut } = useContext(AuthContext);

    const [carts] = useClass();

    const handelLogOut = ()  =>{
        logOut();
    }

    const navLink = <>
        <Link className='mx-4' to='/'>Home</Link>
        <Link className='mx-4' to='/instractor'>Instructors</Link>
        <Link className='mx-4' to='/classes'>Classes</Link>
        <Link className='mx-4' to='/dashboard'>Deshbord</Link>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img src={logo} className='w-[100px] rounded-lg' alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user ? <>
                        <Link onClick={handelLogOut} className='menu'>Logout</Link>
                        </> : <>
                      <Link to='/login' className='menu'>Login</Link>
                        </>
                    }
                    <img className='w-[40px] rounded-full' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
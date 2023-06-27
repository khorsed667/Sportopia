import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {

    const { googleSingup } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handelLogin = () => {
        googleSingup()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);


                const userInfo = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('https://sportofia-server-khorsed667.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                            //TODO: Implement sweet alert!
                            navigate(from, { replace: true });
                        })



            })
    }

    return (
        <div>
            <div className="divider">
                <button onClick={handelLogin} className='my-8 bg-green-500 text-white p-3 rounded-full'><FaGoogle></FaGoogle></button>
            </div>
        </div>
    );
};

export default GoogleLogin;
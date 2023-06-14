import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <h1 className="text-6xl text-white font-bold mb-8">404</h1>
            <p className="text-3xl text-white mb-4">Oops! Page not found</p>
            <p className="text-lg text-white mb-8">
                The page you are looking for might have been removed or is temporarily
                unavailable.
            </p>
            <Link to='/'>
                <button className="bg-white text-green-500 font-bold py-2 px-4 rounded shadow">
                    Go back to Homepage
                </button>
            </Link>
        </div>
    );
};

export default Error;

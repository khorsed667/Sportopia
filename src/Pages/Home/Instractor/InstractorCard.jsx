import { BsFacebook } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const InstractorCard = ({ item }) => {

    const { image, name, classesTaken } = item;

    return (
        <div className="card w-[80%] mx-auto h-[90%] bg-base-100 shadow-xl">
            <figure><img src={image} alt="instactor" /></figure>
            <div className="card-body xl:p-8 lg:p-3">
                <div className="flex justify-between items-center">
                    <p className="text-xl font-medium">{name}</p>
                    <p>Class Taken: {classesTaken}</p>
                </div>
                <div className="divider my-0">Contact</div>
                <div className="icons flex justify-between items-center w-1/2 mx-auto">
                    <BsFacebook className='text-green-500 text-xl cursor-pointer'></BsFacebook>
                    <SiGmail className='text-green-500 text-xl cursor-pointer'></SiGmail>
                    <FaLinkedin className='text-green-500 text-xl cursor-pointer'></FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default InstractorCard;
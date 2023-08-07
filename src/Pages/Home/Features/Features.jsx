import { FaPlayCircle, FaDumbbell, FaUsers } from 'react-icons/fa';
import Button from '../../Shared/Button';

const features = [
  {
    icon: <FaPlayCircle />,
    title: 'Live Streaming',
    description: 'Experience the thrill of summer sports in real-time with our live streaming feature.',
  },
  {
    icon: <FaDumbbell />,
    title: 'Interactive Training Programs',
    description: 'Enhance your skills and improve your performance with our interactive training programs.',
  },
  {
    icon: <FaUsers />,
    title: 'Community Engagement',
    description: 'Connect with sports enthusiasts through our vibrant community engagement feature.',
  },
];


const Features = () => {
    return (
        <div>
            <div className="f-container my-10">
                <p className='text-center my-5 text-5xl font-semibold'>Our Features</p>
                <p className='w-4/12 text-center mx-auto'>Discover the Exciting Features That Make Our Summer Sports Experience Unforgettable</p>
                <div className="f-card grid md:grid-cols-3 sm:w-3/5 mx-auto md:w-full xsm:grid-cols-1">
                {
                    features.map((item, index) => <div key={index} className='border-2 m-3 h-[350px] rounded-lg flex justify-center text-center items-center flex-col xl:p-10 lg:p-3 xsm:p-1 bg-white'>
                         <span className='text-green-600 text-5xl'>{item.icon}</span>
                         <p className='font-semibold text-xl my-3'>{item.title}</p>
                         <p>{item.description}</p>
                         <Button text={'Read More'}></Button>
                    </div>)
                }
                </div>
            </div>
        </div>
    );
};

export default Features;
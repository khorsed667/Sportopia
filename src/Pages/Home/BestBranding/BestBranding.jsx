import { FaArrowRight } from 'react-icons/fa';
import bestSchool from './../../../assets/common/bestSchool.jpg';
import Button from '../../Shared/Button';

const BestBranding = () => {
    return (
        <div className='flex justify-center my-10'>
            <div className="brand-container flex justify-center items-center xl:w-5/6">
                <div className="img-section">
                    <img className='object-container xsm:hidden lg:block md:w-[1300px]' src={bestSchool} alt="bestScl" />
                </div>
                <div className="text-container xsm:px-5 lg:ms-1 xl:ms-3 md:px-[8%] lg:px-0">
                    <span className='text-5xl font-semibold'>Best Summer School Experience in South Asia</span>
                    <p className='my-2'>Welcome to our premier summer school, where we invite you to discover the best summer school experience in South Asia. Our program is meticulously designed to provide students with a transformative educational journey like no other.</p>
                    <span className='flex items-center p-1'><FaArrowRight className='me-2 text-green-600 text-xl'></FaArrowRight><p className='font-semibold'>Diverse Academic Offerings</p></span>
                    <span className='flex items-center p-1'><FaArrowRight className='me-2 text-green-600 text-xl'></FaArrowRight><p className='font-semibold'>Expert Faculty and Mentors</p></span>
                    <span className='flex items-center p-1'><FaArrowRight className='me-2 text-green-600 text-xl'></FaArrowRight><p className='font-semibold'>Engaging Extracurricular Activities</p></span>
                    <Button text={'Read More'}></Button>
                </div>
            </div>
        </div>
    );
};

export default BestBranding;
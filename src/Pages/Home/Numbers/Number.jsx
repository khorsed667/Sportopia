import { RiCustomerServiceFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiGoogleclassroom } from 'react-icons/si';
import { ImManWoman } from 'react-icons/im';
import background from './../../../assets/number-bg.jpg'

const Number = () => {
    return (
        <div className="number-container bg-cover" style={{backgroundImage:`url(${background})`}}>
            <div className="number-section p-6">
                <div className="number-headline lg:w-1/2 mx-auto md:px-20 text-center">
                    <p className="text-center my-5 text-5xl font-semibold">
                        Facts by the Number
                    </p>
                    <p className="secondaryText">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quia et laboriosam nesciunt ad veniam non voluptas corrupti dolore cupiditate.
                    </p>
                </div>
                <div className="number-info grid xl:grid-cols-4 md:grid-cols-2 gap-12 mt-7 mx-14">
                    <div className='flex items-center justify-center rounded-xl bg-white h-[80px] border-2 border-black'>
                        <div className="img w-1/4 bg-black rounded-xl me-3 flex justify-center items-center h-[50px]"><BsFillPersonFill className='text-2xl text-white'></BsFillPersonFill></div>
                        <div className="text text-center">
                            <p className="text-xl font-bold">16K+</p>
                            <p className="secondaryText">Happy Students</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center rounded-xl bg-white h-[80px] border-2 border-black'>
                        <div className="img w-1/4 bg-black rounded-xl me-3 flex justify-center items-center h-[50px]"><SiGoogleclassroom className='text-2xl text-white'></SiGoogleclassroom></div>
                        <div className="text text-center">
                            <p className="text-xl font-bold">120+</p>
                            <p className="secondaryText">Numbers of Classes</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center rounded-xl bg-white h-[80px] border-2 border-black'>
                        <div className="img w-1/4 bg-black rounded-xl xsm:me-0 flex justify-center items-center h-[50px]"><RiCustomerServiceFill className='text-2xl text-white'></RiCustomerServiceFill></div>
                        <div className="text text-center">
                            <p className="text-xl font-bold">3600+</p>
                            <p className="secondaryText">Students care response</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center rounded-xl bg-white h-[80px] border-2 border-black'>
                        <div className="img w-1/4 bg-black rounded-xl me-3 flex justify-center items-center h-[50px]"><ImManWoman className='text-2xl text-white'></ImManWoman></div>
                        <div className="text text-center">
                            <p className="text-xl font-bold">200K+</p>
                            <p className="secondaryText">Total Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Number;
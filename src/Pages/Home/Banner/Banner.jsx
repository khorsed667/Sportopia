
import banner1 from './../../../assets/banner/banner-1.jpg'
import banner2 from './../../../assets/banner/banner-2.jpg'
import banner3 from './../../../assets/banner/banner-3.jpg'
import banner4 from './../../../assets/banner/banner-4.jpg'
import banner5 from './../../../assets/banner/banner-5.jpg'
import banner6 from './../../../assets/banner/banner-6.jpg'

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 md:w-1/2 w-full'>
                        <h2 className='md:text-6xl w-full text-4xl font-bold'>Discover the Ultimate Sports Adventure</h2>
                        <p className=''>Action-packed summer camp for diverse sports activities. Ignite your passion for athleticism like never before at Sportopia!</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 md:w-1/2 w-full'>
                        <h2 className='md:text-6xl w-full text-4xl font-bold'>Experience Thrilling Sports</h2>
                        <p>Expert coaching, dynamic training, and friendly competitions. Unforgettable and exhilarating sports experiences await you at Sportopia!</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 md:w-1/2 w-full'>
                        <h2 className='md:text-6xl w-full text-4xl font-bold'>Unforgettable Summer of Sports</h2>
                        <p>Skill-building, friendly competitions, team spirit, and fun-filled activities. Create lasting memories and forge lifelong friendships at Sportopia!</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 md:w-1/2 w-full'>
                        <h2 className='md:text-6xl w-full text-4xl font-bold'>Unlock Your Athletic Journey</h2>
                        <p>Vibrant camp fostering passion, sportsmanship, and team spirit. Discover joy, valuable life lessons, and cherished memories at Sportopia!</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 md:w-1/2 w-full'>
                        <h2 className='md:text-6xl w-full text-4xl font-bold'>Unlock Your Athletic Journey</h2>
                        <p>Vibrant camp fostering passion, sportsmanship, and team spirit. Discover joy, valuable life lessons, and cherished memories at Sportopia!</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 md:w-1/2 w-full'>
                        <h2 className='md:text-6xl w-full text-4xl font-bold'>Unlock Your Athletic Journey</h2>
                        <p>Vibrant camp fostering passion, sportsmanship, and team spirit. Discover joy, valuable life lessons, and cherished memories at Sportopia!</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;
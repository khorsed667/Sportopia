
import Banner from "../Banner/Banner";
import Class from "../Class/Class";
import InstraSweiper from "../InstaSwiper/InstraSweiper";
import Motive from "../Motive/Motive";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Class></Class>
            {/* <Instractors></Instractors> */}
            <InstraSweiper></InstraSweiper>
            <Motive></Motive>
        </div>
    );
};

export default Home;
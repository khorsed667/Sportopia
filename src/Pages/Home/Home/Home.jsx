
import Banner from "../Banner/Banner";
import BestBranding from "../BestBranding/BestBranding";
import Class from "../Class/Class";
import Features from "../Features/Features";
import Instractors from "../Instractor/Instractors";
import Join from "../Joining/Join";
import Motive from "../Motive/Motive";
import Number from "../Numbers/Number"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Number></Number>
            <BestBranding></BestBranding>
            <Class></Class>
            <Features></Features>
            <Instractors></Instractors>
            <Motive></Motive>
            <Join></Join>
        </div>
    );
};

export default Home;

import Heading from "../../Components/Heading/Heading";
import { useState } from "react";
import InstractorCard from "./InstractorCard";


const Instractors = () => {

    const [instractors, setinstractor] = useState([])

    fetch('instractor.json')
        .then(res => res.json())
        .then(data => setinstractor(data))

    return (
        <div>
            <div>
                <p className="text-center font-bold text-3xl my-5 text-green-400">Here Meet with Our <br /> Popular Instractors...</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    instractors.map((item, index) => <InstractorCard
                    key={index}
                    item={item}
                    ></InstractorCard>)
                }
            </div>
        </div>
    );
};

export default Instractors;
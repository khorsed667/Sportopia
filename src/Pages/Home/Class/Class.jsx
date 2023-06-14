import { useState } from "react";
import Heading from "../../Components/Heading/Heading";
import ClsCard from "./ClsCard";


const Class = () => {

    const [classes, setClasses] = useState([])

    fetch('classes.json')
    .then(res => res.json())
    .then(data => setClasses(data))

    return (
        <div className="my-5">
            <p className="text-center font-bold text-3xl my-5 text-green-400">Explore Exciting Summer Sports Classes</p>
            
            <div className="grid md:grid-cols-3 sm:ms-5 gap-5">
                {
                    classes.map((cls, index) => <ClsCard
                    key={index}
                    cls={cls}
                    ></ClsCard>)
                }
            </div>
        </div>
    );
};

export default Class;
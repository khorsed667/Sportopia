import { useState } from "react";
import ClsCard from "./ClsCard";
import Title from "../../Components/Title/Title";


const Class = () => {

    const [classes, setClasses] = useState([])

    fetch('classes.json')
    .then(res => res.json())
    .then(data => setClasses(data))

    return (
        <div className="my-5">
            <Title
            heading={'Summer Classes'}
            subHeading={'Blast your inner champ with'}
            ></Title>
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
import { useState } from "react";
import Heading from "../Components/Heading/Heading";
import ClassCard from "./ClassCard";


const Classes = () => {

    const [classe, setClass] = useState([]);
    console.log(classe);

    fetch('allClasses.json')
    .then(res => res.json())
    .then(data => setClass(data))

    return (
        <div>
            <Heading
            subHeading='To unleash your inner champoin'
            headings='Choose your class'
            ></Heading>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    classe.map((cls,index) => <ClassCard
                    key={index}
                    cls={cls}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;
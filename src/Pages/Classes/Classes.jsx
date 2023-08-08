import { useState } from "react";
import ClassCard from "./ClassCard";
import Title from "../Components/Title/Title";


const Classes = () => {

    const [classe, setClass] = useState([]);

    fetch('https://sportofia-server-khorsed667.vercel.app/class')
    .then(res => res.json())
    .then(data => setClass(data))

    return (
        <div>
            <Title
            subHeading={'To unlesh your inner champion'}
            heading={'Choose your classes'}
            ></Title>
            <div className="grid xsm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
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
import { useState } from "react";
import ClassCard from "./ClassCard";


const Classes = () => {

    const [classe, setClass] = useState([]);

    fetch('http://localhost:5000/class')
    .then(res => res.json())
    .then(data => setClass(data))

    return (
        <div>
            <p className="text-center font-bold text-3xl my-5 text-green-400">To unlesh your inner champion <br /> Choose your classes</p>
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
import { useState } from "react";


const Classes = () => {

    const [classe, setClass] = useState([]);
    console.log(classe);

    fetch('allClasses.json')
    .then(res => res.json())
    .then(data => setClass(data))

    return (
        <div>
            <p>total number of class: {classe.length}</p>
        </div>
    );
};

export default Classes;
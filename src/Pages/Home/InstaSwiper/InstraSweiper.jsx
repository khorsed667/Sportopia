import { useState } from "react";


const InstraSweiper = () => {

    const [instractors, setinstractor] = useState([])

    fetch('instractor.json')
        .then(res => res.json())
        .then(data => setinstractor(data))

    return (
        <div className="flex my-5 bg-green-100">
            <div className="carousel carousel-center w-1/2 h-1/2 p-4 space-x-4 bg-green-100 rounded-box">
                {
                    instractors.map((ins, index) => <div
                        key={index}
                        className="card w-96 bg-base-100 shadow-xl"
                        style={{ position: 'relative' }}
                    >
                        <div className="card-body">
                            <h2 className="card-title">{ins.name}</h2>
                            <p>{ins.email}</p>
                        </div>
                        <figure>
                            <img className="h-[200px] w-full" src={ins.image} alt="Shoes" />
                        </figure>
                        <div
                            className="absolute top-0 right-0 m-2 p-2 bg-base-200 text-base-content rounded-md opacity-0 transition-opacity duration-300"
                            style={{ backdropFilter: 'blur(8px)' }}
                        >
                            <button className="btn btn-sm btn-primary">Details</button>
                        </div>
                    </div>)
                }
            </div>
            <div className="ms-5 flex justify-center items-center">
                <p className=" font-bold text-6xl">Meet with Our <br /> <span className="text-green-600">Expert Instractors</span></p>
            </div>
        </div>
    );
};

export default InstraSweiper;
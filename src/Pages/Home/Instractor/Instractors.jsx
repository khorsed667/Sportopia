import { useState } from "react";
import InstractorCard from "./InstractorCard";

const Instractors = () => {
  const [instractors, setinstractor] = useState([]);

//   console.log(instractors);

  fetch("instractor.json")
    .then((res) => res.json())
    .then((data) => setinstractor(data));

  return (
    <div className="instractor-section">
      <div className="instractor-container">
        <div className="hading-text my-5">
          <p className="text-center xsm:p-1 md:p-0 my-5 text-5xl font-semibold">
            Meet Instractors
          </p>
          <p className="xsm:w-1/2 md:w-4/12 text-center mx-auto">
            Discover the Exciting Features That Make Our Summer Sports Experience Unforgettable
          </p>
        </div>
        <div className="show-instractor grid md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto">
            {
                instractors.map((item, index) => <InstractorCard
                key={index}
                item={item}
                ></InstractorCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default Instractors;

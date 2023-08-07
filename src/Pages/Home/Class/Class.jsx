import { useState } from "react";
import ClsCard from "./ClsCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Title from "../../Components/Title/Title";

const Class = () => {
  // Fetch classes data....

  const [classes, setClasses] = useState([]);

  fetch("classes.json")
    .then((res) => res.json())
    .then((data) => setClasses(data));

  // Pagination Functions....

  const [currentPage, setCurrentPage] = useState(1);
  const classesPerPage = 3;
  const totalPages = Math.ceil(classes.length / classesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * classesPerPage;
  const displayedClasses = classes.slice(
    startIndex,
    startIndex + classesPerPage
  );

  return (
    <div className="my-5">
      <Title
        heading={"Summer Classes"}
        subHeading={"Blast your inner champ with"}
      ></Title>

            {/* Div for Class Cards */}

      <div className="grid xsm:grid-cols-1  md:grid-cols-3 xl:w-[90%] mx-auto">
        {displayedClasses.map((cls, index) => (
          <ClsCard key={index} cls={cls}></ClsCard>
        ))}
      </div>

            {/* Div for pagination Components */}

      <div className="pagination flex justify-center items-center mx-auto mt-3">
        <button
          className="text-3xl"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <FiChevronLeft />
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="text-3xl"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Class;

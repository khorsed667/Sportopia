

const ClassCard = ({ cls }) => {

    const { image, name, instructorName, availableSeats, price } = cls

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} className="h-[200px] w-full" alt="class" /></figure>
            <div className="card-body relative">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Instractor Name: {instructorName}</p>
                    <p>Available seats: {availableSeats}</p>
                    <p>Price: ${price}</p>
                </div>
                <div className="card-actions absolute top-24 left-72 justify-end">
                    <button className="btn  bg-green-700 text-white">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
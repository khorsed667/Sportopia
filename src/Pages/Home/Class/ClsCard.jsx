

const ClsCard = ({cls}) => {
    const {name, instructor, student, image, price} = cls
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} className="h-[200px] w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge bg-green-700 border-none badge-secondary">NEW</div>
                </h2>
                <p>Instractor: {instructor}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{price}</div>
                    <div className="badge badge-outline">{student} seats available</div>
                </div>
            </div>
        </div>
    );
};

export default ClsCard;
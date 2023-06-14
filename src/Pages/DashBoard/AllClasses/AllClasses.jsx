import usebookedClass from "../../../hooks/usebookedClass";


const AllClasses = () => {

    const [classes] = usebookedClass();

    return (
        <div className="w-full">
            <p>class is loading</p>
            <div className="overflow-x-auto">
                <table className="table mx-4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Instractor Name</th>
                            <th>Instractor Email</th>
                            <th>Available seat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                {item.name}
                                </td>
                                <td>
                                    {item.instructorName}
                                </td>
                                <td>{item.instructorEmail}</td>
                                <th>
                                    {item.availableSeats}
                                </th>
                                <th>
                                    <button className="btn btn-outline btn-success">Actions</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClasses;
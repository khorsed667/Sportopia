import { useContext } from "react";
import usebookedClass from "../../../hooks/usebookedClass";
import { AuthContext } from "../../Providers/AuthProviders";


const InstraClasses = () => {

    const [classes] = usebookedClass();
    const {user} = useContext(AuthContext)
    const intractorClass = classes.filter(cls => cls.instructorEmail == user.email);

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
                            <th>Name</th>
                            <th>Available seat</th>
                            <th>Enrolled Student</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            intractorClass.map((item, index) => <tr
                            key={item._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.availableSeats}</td>
                                <th>
                                    0
                                </th>
                                <th>
                                <button className="btn btn-outline btn-success">Update</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstraClasses;
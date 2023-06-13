import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {

    const { data: user = [], refetch } = useQuery(['user'], async () => {
        const res = await fetch('http://localhost:5000/user')
        return res.json();
    })

    return (
        <div className="w-full">
            <p className="text-center my-5 text-xl text-green-400">Total Users : {user.length}</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            user.map((usr, index) => <tr
                            key={usr._id}
                            >
                                <th>{index + 1}</th>
                                <td>{usr.name}</td>
                                <td>{usr.email}</td>
                                <td>Admin</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
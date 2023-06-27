import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const AllUsers = () => {

    const { data: user = [], refetch } = useQuery(['user'], async () => {
        const res = await fetch('https://sportofia-server-khorsed667.vercel.app/user')
        return res.json();
    })

    const handelAdmin = (usr) => {
        fetch(`https://sportofia-server-khorsed667.vercel.app/user/admin/${usr._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${usr.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handelInstractor = (usr) => {
        fetch(`https://sportofia-server-khorsed667.vercel.app/user/instractor/${usr._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${usr.name} is Instractor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

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
                            <th>Role 1</th>
                            <th>Role 2</th>
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
                                <td onClick={() => handelAdmin(usr)}>{usr.role === 'admin' ? 'Admin' : <button className="btn btn-outline btn-success">Admin</button>}</td>
                                <td onClick={() => handelInstractor(usr)}>{usr.role === 'instractor' ? 'Instractor' : <button className="btn btn-outline btn-success">Instractor</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUsers;
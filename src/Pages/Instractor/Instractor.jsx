import { useQuery } from "@tanstack/react-query";


const Instractor = () => {

    const { data: user = [] } = useQuery(['user'], async () => {
        const res = await fetch('http://localhost:5000/user')
        return res.json();
    })

    const instra = user.filter(ins => ins.role === 'instractor')
    console.log(instra);

    return (
        <div>
            <p className="text-center font-bold text-3xl my-5 text-green-400">instractors : {instra.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>See Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            instra.map((ins, index) => <tr
                            key={ins._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={ins.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {ins.name}
                                </td>
                                <td>{ins.email}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">See Classes</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Instractor;
import { Link, Outlet } from "react-router-dom";


const Dashing = () => {

    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-green-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <button className="btn btn-outline my-2 bg-white"><Link to='/dashboard/classes'>Manage Classes</Link></button>
                            <button className="btn btn-outline my-2 bg-white"><Link to='/dashboard/allusers'>Manage Users</Link></button>
                        </> : <>
                            <button className="btn btn-outline my-2 bg-white"><Link to='/dashboard/selectedclass'>Selected Class</Link></button>
                            <button className="btn btn-outline my-2 bg-white"><Link to='/dashboard/enrolledclass'>Enroller class</Link></button>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashing;
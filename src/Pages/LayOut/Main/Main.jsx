import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../Shared/Nav/Nav";
import Footer from "../../Shared/Footer/Footer";


const Main = () => {

    const location = useLocation()
    const removeLogin = location.pathname.includes('login') || location.pathname.includes('singup')

    return (
        <div>
            {removeLogin || <Nav></Nav>}
            <Outlet></Outlet>
            {removeLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useClass from "../../hooks/useClass";


const ClassCard = ({ cls }) => {

    const { image, name, instructorName, availableSeats, price } = cls

    const [, refetch] = useClass()
    const { user } = useContext(AuthContext);
    const nevigate = useNavigate();


    const handleAddToCart = (cls) => {
        console.log(cls);
        if (user && user.email) {
            const item = {image, name, instructorName, availableSeats, price, usermail: user.email}
            fetch('https://sportofia-server-khorsed667.vercel.app/cart',{
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(item)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class successfully added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please, Login to select items...',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    nevigate('/login', {state: { from: location }})
                }
            })
        }
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} className="h-[200px] w-full" alt="class" /></figure>
            <div className="card-body relative">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Instractor Name: {instructorName}</p>
                    <p>Available seats: {availableSeats}</p>
                    <p>Price: ${price}</p>
                    <button onClick={() => handleAddToCart(cls)} className="btn xsm:block lg:none bg-green-700 text-white">Select</button>
                </div>
                {/* <div className="card-actions absolute lg:top-24 lg:left-72 justify-end">
                    <button onClick={() => handleAddToCart(cls)} className="btn xsm:none lg:block bg-green-700 text-white">Select</button>
                </div> */}
            </div>
        </div>
    );
};

export default ClassCard;
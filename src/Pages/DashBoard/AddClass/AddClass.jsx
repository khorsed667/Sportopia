import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from 'react-hook-form';
import useAxiousSecure from "../../../hooks/useAxiousSecure";


const AddClass = () => {

    const imgUploadApi = import.meta.env.VITE_IMG_SECRET;
    const ImgUploadUrl = `https://api.imgbb.com/1/upload?key=${imgUploadApi}`

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiousSecure();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(ImgUploadUrl,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, instructorName, instructorEmail, availableSeats, price} = data;
                const newItem = {name, instructorName, instructorEmail, availableSeats : parseFloat(availableSeats), price: parseFloat(price), image:imgURL}
                console.log(newItem);
                axiosSecure.post('/class', newItem)
                .then(data =>{
                    console.log('after post new menu item', data.data);
                })
            }
        })
    };

    return (
        <div className="w-full mx-5">
            <p className="text-center my-4 text-2xl text-green-400">Add Class</p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-5">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Name of Class</span>
                    </label>
                    <input type="text" {...register("name", {required: true})} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Instractor Name</span>
                    </label>
                    <input type="text" {...register("instructorName", {required: true})} readOnly value={user?.displayName} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Instractor Email</span>
                    </label>
                    <input type="email" {...register("instructorEmail", {required: true})} readOnly value={user?.email} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Total Seat</span>
                    </label>
                    <input type="text" {...register("availableSeats", {required: true})} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="text" {...register("price", {required: true})} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <input type="file"  {...register("image", {required: true})} className="file-input w-full mt-4 " />
                <input className="btn btn-outline btn-success mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;
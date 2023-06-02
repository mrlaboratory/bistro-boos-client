import React from 'react';
import HeadTitle from '../components/HeadTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../hooks/useAxiossecure';
import { toast } from 'react-hot-toast';
const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [axiosSecure] = useAxiosSecure()

    const imageHostingKey = import.meta.env.VITE_IMG_TOKEN 
    const imeHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
    const onSubmit = data => {
      
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imeHostingUrl, {
            method: 'POST',
            body: formData,
        })
        .then(re => re.json())
        .then(imgData => {
            console.log(imgData.data.display_url);
            data.image = imgData.data.display_url
            data.price = parseInt(data.price)
            // console.log(data)
            axiosSecure.post('/menu',data)
            .then(d => {
                if(d.data.acknowledged){
                    toast.success('Item added')
                }
            })
           

        })
        
    };

    return (
        <div>
            <div>
                <HeadTitle
                    heading='Add new item'
                ></HeadTitle>
            </div>

            <div className='flex justify-center mt-3'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-[500px]'>
                    <input {...register("name", { required: true })} type="text" placeholder="Name" className="input w-full  rounded-lg border-2" />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-3'>
                        <select placeholder='Select category' {...register("category", { required: true })} className="select select-bordered w-full">
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                        <input {...register("price", { required: true })} type="text" placeholder="Price " className="input w-full  rounded-lg border-2" />



                    </div>

                    <textarea {...register("recipe")} placeholder='Details' className="input my-3 w-full p-5 rounded-lg border-2 h-[200px]" id="" cols="30" rows="10"></textarea>
                    <input {...register("image", { required: true })} type="file" placeholder="Upload image " className="file-input file-input-bordered w-full border-2 my-3" />
                    <button className='btn btn-primary w-full '>Add item </button>

                </form>
            </div>

        </div>
    );
};

export default AddItem;
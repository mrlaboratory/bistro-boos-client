import React from 'react';
import HeadTitle from '../components/HeadTitle';
import useCart from '../hooks/useCart';
import { CiCircleRemove } from 'react-icons/Ci';
import { AiTwotoneEdit } from 'react-icons/Ai';
import Swal from 'sweetalert2';


const UserCart = () => {
    const [data, refetch] = useCart()
    console.log(data)

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/carts/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(d => {
                        if (d.acknowledged) {
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              refetch()
                        }
                    })
                    .catch(e => console.log(e))


            }
        })
    }
    return (
        <div>
            <div className='flex justify-center'>
                <HeadTitle
                    heading='MANAGE ALL ITEMS'
                    subHeading='---Hurry Up!---'
                ></HeadTitle>
            </div>

            <div className='p-5 rounded-lg bg-white'>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-bold my-3'>Total items: {data?.length}</h2>
                    <h2 className='text-xl font-bold my-3'>Total Price : {Math.round(data?.reduce((a, c) => a + c.itemData
                        .price, 0))}$</h2>
                    <button className='text-white bg-[#D1A054] btn btn-sm'>Pay</button>
                </div>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((item, i) => <tr key={item._id}>
                                        <th>{i + 1}</th>
                                        <td> <img src={item.itemData.image} className='w-[50px] rounded-lg' alt="" /> </td>
                                        <td>{item.itemData.name}</td>
                                        <td> {item.itemData.price}$ </td>
                                        <td>
                                            <button className='p-1 rounded-full bg-[#D1A054] text-white mr-2'><AiTwotoneEdit className='text-white text-xl font-bold'></AiTwotoneEdit></button>
                                            <button onClick={() => handleDelete(item._id)} className='p-1 rounded-full  bg-[#D1A054] text-white'><CiCircleRemove className='text-white text-xl font-bold'></CiCircleRemove></button>
                                        </td>
                                    </tr>)
                                }



                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserCart;
import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const {_id, name, supplier, details, chef, taste, photo, category } = coffee;
    const handleDelete=(id)=>{
        console.log(id)
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
             
              fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success'
                      )

                }
            })


            }
          })
    }
    return (
        <div>
            <div className="max-w-sm ">
                <Card  imgSrc={photo}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {supplier}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {details}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {chef}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {taste}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {category}
                    </p>
                <Button.Group className='justify-center flex'>
                    <Button color="gray">
                        View
                    </Button>
                    <Link to={`updateCoffee/${_id}`}><Button color="gray">
                        Edit
                    </Button></Link>
                    <Button className='text-red-600' onClick={()=>handleDelete(_id)} color="gray">
                    Delete
                    </Button>
                </Button.Group>
                </Card>
            </div>

        </div>
    );
};

export default CoffeeCard;
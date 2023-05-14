import { Button, Card } from 'flowbite-react';
import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const {_id, name, supplier, details, chef, taste, photo, category } = coffee
    const handleDelete=(id)=>{
        console.log(id)
    }
    return (
        <div>
            <div className="max-w-sm">
                <Card imgSrc={photo}>
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
                    <Button color="gray">
                        Edit
                    </Button>
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
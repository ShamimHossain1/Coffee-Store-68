import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, supplier, details, chef, taste, photo, category } = coffee
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const photo = form.img.value;
        const category = form.category.value;
        const updatedCoffeeDetails = { name, supplier, details, chef, taste, photo, category }
        console.log(updatedCoffeeDetails);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCoffeeDetails)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })


        console.log('add coffee')
    }
    return (
        <div>

            <h1 className="text-center text-5xl my-10 font-semibold">Update Coffee: {name}</h1>

            <div>

                <form onSubmit={handleUpdate} action="" className=' mt-10'>
                    <div className='flex justify-center gap-5'>
                        <div className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="small"
                                        value="Name"
                                    />
                                </div>
                                <TextInput
                                    defaultValue={name}
                                    name='name'
                                    id="small"
                                    type="text"

                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Supplier"
                                    />
                                </div>
                                <TextInput
                                    defaultValue={supplier}
                                    name='supplier'
                                    id="base"
                                    type="text"

                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="large"
                                        value="Category"
                                    />
                                </div>
                                <TextInput
                                    defaultValue={category}
                                    name='category'
                                    id="large"
                                    type="text"

                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="small"
                                        value="chef"
                                    />
                                </div>
                                <TextInput
                                    defaultValue={chef}
                                    name='chef'
                                    id="small"
                                    type="text"

                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Taste"
                                    />
                                </div>
                                <TextInput
                                    defaultValue={taste}
                                    name='taste'
                                    id="base"
                                    type="text"

                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="large"
                                        value="Details"
                                    />
                                </div>
                                <TextInput
                                    defaultValue={details}
                                    name='details'
                                    id="large"
                                    type="text"

                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/5 mx-auto mt-2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="base"
                                value="Image URL"
                            />
                        </div>
                        <TextInput
                            defaultValue={photo}
                            name='img'
                            id="base"
                            type="text"

                        />
                    </div>

                    <Button type="submit" className='mx-auto mt-3'> Submit</Button>
                </form>

            </div>
        </div>
    );
};

export default UpdateCoffee;
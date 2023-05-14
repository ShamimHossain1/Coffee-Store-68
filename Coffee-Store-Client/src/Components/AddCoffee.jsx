import { Button, Label, TextInput } from 'flowbite-react';
import Swal from 'sweetalert2'
import React from 'react';

const AddCoffee = () => {
    const handleAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const photo = form.img.value;
        const category = form.category.value;
        const newCoffeeDetails = {name, supplier, details, chef, taste, photo, category}
        console.log(newCoffeeDetails);

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCoffeeDetails)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

        })

      
        console.log('add coffee')
    }
    return (
        <div>
            <h2 className='flex justify-center mt-16'>Add Coffee</h2>
            <form onSubmit={handleAdd} action="" className=' mt-10'>
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
                    name='img'
                        id="base"
                        type="text"

                    />
                </div>

                <Button type="submit" className='mx-auto mt-3'> Submit</Button>
            </form>

        </div>
    );
};

export default AddCoffee;
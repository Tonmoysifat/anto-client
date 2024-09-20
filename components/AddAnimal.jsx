import React, {useState} from 'react';
import BaseApi from "@/components/BaseApi";
const AddAnimal = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('file', imageFile);

        const res = await fetch(`${BaseApi.BaseURL()}/addAnimal`, {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            alert('Animal added successfully!');
            setName('');
            setCategory('');
            setImageFile(null);
        } else {
            alert('Failed to add animal.');
        }
    };

    return (
        <div>
            <button
                className="px-7 py-2 border border-white text-white rounded-3xl"
                onClick={() => document.getElementById('my_modal_2').showModal()}
            >
                Add Animal
            </button>
            <dialog id="my_modal_2" className="modal rounded-3xl p-9">
                <div className="modal-box bg-white text-black rounded-md">
                    <form method="dialog" className="modal-backdrop">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-4">Add Animal</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            required
                            type="text"
                            placeholder="Animal Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input text-black input-bordered my-2 w-full rounded-lg text-black border-0 px-4 py-3"
                        />
                        <input
                            required
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="input text-black input-bordered my-2 w-full rounded-lg text-black border-0 px-4 py-3"
                        />
                        <input

                            type="file"
                            placeholder="Image"
                            onChange={(e) => setImageFile(e.target.files[0])}
                            className="input text-black input-bordered my-2 w-full rounded-lg text-black border-0 px-4 py-3"
                        />
                        <button type="submit" className="bg-black px-4 py-3 my-2 rounded-lg text-white w-full">Add
                            Animal
                        </button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AddAnimal;
import React, {useState} from 'react';
import BaseApi from "@/components/BaseApi";

const AddCategory = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCategory = {name};
        const res = await fetch(`${BaseApi.BaseURL()}/addCategory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCategory),
        });
        if (res.ok) {
            alert('Category added successfully!');
            setName('');
        }
    };

    return (
        <div>
            <button
                className="px-7 py-2 border border-white text-white rounded-3xl"
                onClick={() => document.getElementById('my_modal_3').showModal()}
            >
                Add Category
            </button>

            <dialog id="my_modal_3" className="modal rounded-3xl p-9">
                <div className="modal-box bg-white text-black rounded-md">
                    <form method="dialog" className="modal-backdrop">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-4">Add Category</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            required
                            type="text"
                            placeholder="Category Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input text-black input-bordered my-2 w-full rounded-lg text-black border-0 px-4 py-3"
                        />
                        <button type="submit" className="bg-black px-4 py-3 my-2 rounded-lg text-white w-full">Add
                            Category
                        </button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AddCategory;
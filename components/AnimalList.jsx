import React from 'react';

const AnimalList = ({animals}) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 mt-8">
            {animals.map((animal,i) => (
                <div key={i.toString()} className="text-center">
                    <div className="text-center shadow-lg card px-0 py-10 rounded-lg">
                        <img src={animal.imageUrl} alt={animal.name} className=" mx-auto"/>
                    </div>

                    <p className="mt-2 font-bold text-white">{animal.name}</p>
                </div>
            ))}
        </div>
    );
};

export default AnimalList;
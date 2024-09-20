import React, { useState } from 'react';

const CategoryFilter = ({ categories, setFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryClick = (categoryName) => {
        setFilter(categoryName);
        setSelectedCategory(categoryName);
    };

    return (
        <div className="flex flex-wrap gap-4">
            {categories.map((category,i) => (
                <button
                    key={i.toString()}
                    onClick={() => handleCategoryClick(category.name)}
                    className={`px-7 py-2 rounded-3xl border-2 ${
                        selectedCategory === category.name
                            ? 'border-green-500 text-green-500'
                            : 'border-red-500 text-red-500'
                    }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;

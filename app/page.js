"use client"
import AnimalList from "@/components/AnimalList";
import {useEffect, useState} from "react";
import CategoryFilter from "@/components/CategoryFilter";
import AddAnimal from "@/components/AddAnimal";
import AddCategory from "@/components/AddCategory";
import BaseApi from "@/components/BaseApi";

export default function Home() {
    const [animals, setAnimals] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const fetchAnimals = async () => {
            const res = await fetch(`${BaseApi.BaseURL()}/getAnimals?category=${filter}`);
            const data = await res.json();
            setAnimals(data);
        };

        const fetchCategories = async () => {
            const res = await fetch(`${BaseApi.BaseURL()}/getCategories`);
            const data = await res.json();
            setCategories(data);
        };

        fetchAnimals();
        fetchCategories();
    }, [filter,animals]);
    return (
        <div className="min-h-screen bg-black text-white p-8 sm:p-20">
            <div className="flex justify-between">
                <div className="flex justify-center space-x-4 mb-8">
                    <CategoryFilter categories={categories} setFilter={setFilter}/>
                </div>
                <div className="flex justify-center space-x-4">
                    <AddAnimal/>
                    <AddCategory/>
                </div>
            </div>

            <div className="mt-12">
                <AnimalList animals={animals}/>
            </div>
        </div>
    );
}

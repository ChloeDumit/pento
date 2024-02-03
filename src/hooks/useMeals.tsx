import { useState, useEffect } from "react";
import axios from "axios";

export type Meal = {
    strMeal: string;
    strCategory: string;
    strArea: string;
    idMeal: string;
    strMealThumb: string;
}

type MealApiResponse = {
    meals: Meal[];
}


export const useMeals = (searchValue?: string, category?: string, area?: string) => {
    const [data, setData] = useState<Meal[]>([]);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            try {
                console.log(area)
                let apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchValue;

                const mealsResponse = await axios.get<MealApiResponse>(apiUrl);

                setIsPending(false);
                setData(mealsResponse.data.meals);
            } catch (error) {
                setError(`${error} Could not Fetch Data `);
                setIsPending(false);
            }
        };
        fetchData();

        const intervalId = setInterval(fetchData, 10000);
        return () => clearInterval(intervalId);
    }, [searchValue, category]);
    return { data, isPending, error };
};
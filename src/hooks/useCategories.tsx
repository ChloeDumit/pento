import { useState, useEffect } from "react";
import axios from "axios";

type Category = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

type CategoryApiResponse = {
    meals: Category[];
}


export const useCategories = () => {
    const [data, setData] = useState<Category[]>([]);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            try {

                const response = await axios.get<CategoryApiResponse>('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
                setIsPending(false);


                setData(response.data.meals);

            } catch (error) {
                setError(`${error} Could not Fetch Data `);
                setIsPending(false);
            }
        };
        fetchData();
    }, []);
    return { data, isPending, error };
};
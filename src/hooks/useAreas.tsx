import { useState, useEffect } from "react";
import axios from "axios";

type Area = {
    idArea: string;
    strArea: string;
    strAreaThumb: string;
    strAreaDescription: string;
}

type AreaApiResponse = {
    meals: Area[];
}


export const useAreas = () => {
    const [data, setData] = useState<Area[]>([]);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            try {

                const response = await axios.get<AreaApiResponse>('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
                setIsPending(false);
                console.log(response.data)

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
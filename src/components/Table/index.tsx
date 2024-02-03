import { Text, Spinner, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useMeals, Meal } from '../../hooks/useMeals';
import { RecipeTableComponent } from './TableBody';
import { Pagination } from './Pagination';

interface RecipeTableProps {
    searchValue: string;
    categoryFilterValue: string;
    areaFilterValue: string;
}

export const RecipeTable: React.FC<RecipeTableProps> = ({ searchValue, categoryFilterValue, areaFilterValue }) => {
    const { data, isPending } = useMeals(searchValue, categoryFilterValue, areaFilterValue);

    const [filteredData, setFilteredData] = useState<Meal[]>();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        if (data) {
            let newData = data.filter(meal =>
                (!categoryFilterValue || meal.strCategory === categoryFilterValue) &&
                (!areaFilterValue || meal.strArea === areaFilterValue)
            );
            setFilteredData(newData);
            setCurrentPage(1);
        }
    }, [data, categoryFilterValue, areaFilterValue]);

    if (!filteredData) {
        return <Text>No data</Text>
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const offset = (currentPage - 1) * itemsPerPage;
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = filteredData.slice(offset, offset + itemsPerPage);

    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

    return (
        <Box>
            {isPending ? <Spinner /> : <RecipeTableComponent currentItems={currentItems} />}
            <Pagination pages={pages} currentPage={currentPage} handlePageChange={handlePageChange} />
        </Box>
    )
}

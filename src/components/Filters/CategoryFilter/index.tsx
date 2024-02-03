import React from 'react';
import { Container, Select, Spinner } from '@chakra-ui/react';
import { useCategories } from '../../../hooks/useCategories';

interface FilterProps {
    setCategoryFilterValue: (filterValue: string) => void;
}

export const CategoryFilter: React.FC<FilterProps> = ({ setCategoryFilterValue }) => {
    const { data, isPending, error } = useCategories();

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryFilterValue(e.target.value);
    }

    return (
        <Container>
            {isPending ? (< Spinner />) : (
                <Select placeholder='Category' w='200px' onChange={handleFilterChange}>
                    {data.map((category) => (
                        <option key={category.idCategory} value={category.strCategory}>{category.strCategory}</option>
                    ))}
                </Select>
            )}
        </Container>
    )
}
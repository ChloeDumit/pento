import React from 'react';
import { Container, Select, Spinner } from '@chakra-ui/react';
import { useAreas } from '../../../hooks/useAreas';

interface FilterProps {
    setAreaFilterValue: (filterValue: string) => void;
}

export const AreaFilter: React.FC<FilterProps> = ({ setAreaFilterValue }) => {
    const { data, isPending, error } = useAreas();

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAreaFilterValue(e.target.value);
    }

    return (
        <Container>
            {isPending ? (< Spinner />) : (
                <Select placeholder='Area' w='200px' onChange={handleFilterChange}>
                    {data.map((area) => (
                        <option key={area.idArea} value={area.strArea}>{area.strArea}</option>
                    ))}
                </Select>
            )}
        </Container>
    )
}
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import React from 'react';
import { Meal } from '../../../hooks/useMeals';

interface RecipeTableComponentProps {
    currentItems: Meal[];
}

export const RecipeTableComponent: React.FC<RecipeTableComponentProps> = ({ currentItems }) => (
    <TableContainer>
        <Table variant='simple' size='lg' >
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th></Th>
                    <Th>Name</Th>
                    <Th>Area</Th>
                    <Th>Category</Th>
                </Tr>
            </Thead>
            <Tbody>
                {currentItems.map((meal) => (
                    <Tr key={meal.idMeal}>
                        <Td>#{meal.idMeal}</Td>
                        <Td><img style={{ maxWidth: '60px' }} src={meal.strMealThumb} /></Td>
                        <Td>{meal.strMeal}</Td>
                        <Td>{meal.strArea}</Td>
                        <Td>{meal.strCategory}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContainer>
)
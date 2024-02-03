import React from 'react';
import { Box, Center, Text, Container, Heading, WrapItem, Wrap } from '@chakra-ui/react';
import { SearchBar } from '../components/SearchBar';
import { AreaFilter } from '../components/Filters/AreaFilter';
import { CategoryFilter } from '../components/Filters/CategoryFilter';
import { RecipeTable } from '../components/Table';

export const HomePage = () => {
    const [searchValue, setSearchValue] = React.useState<string>('');
    const [categoryFilterValue, setCategoryFilterValue] = React.useState<string>('');
    const [areaFilterValue, setAreaFilterValue] = React.useState<string>('');

    return (
        <Container gap='24px' flexDirection='column' display='flex' padding='24px' w='100%' maxWidth='1366px'>
            <Center>
                <Heading as="h1" size="xl">Pento Recipe App</Heading>
            </Center>

            <Box gap='24px' display='flex' flexDirection='column'>
                <Box gap='200px'>
                    <SearchBar setSearchValue={setSearchValue} />
                </Box>

                <Box display='flex' flexDirection='row' justifyContent='center'>
                    <Text fontSize='sm' color='black' fontWeight='bold' paddingTop='10px'>Filters:</Text>
                    <Wrap>
                        <WrapItem>
                            <AreaFilter setAreaFilterValue={setAreaFilterValue} />
                        </WrapItem>
                        <WrapItem>
                            <CategoryFilter setCategoryFilterValue={setCategoryFilterValue} />
                        </WrapItem>
                    </Wrap>
                </Box>
            </Box>

            <Center>
                <RecipeTable searchValue={searchValue} categoryFilterValue={categoryFilterValue} areaFilterValue={areaFilterValue} />
            </Center>
        </Container>
    )
}
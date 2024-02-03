import React from 'react';
import { Container, Input, InputGroup, InputRightAddon, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";

interface SearchBarProps {
    setSearchValue: (searchValue: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchValue }) => {

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <Container>
            <InputGroup>
                <Input type="search" placeholder="Search..." border="1px solid #949494" onChange={handleSearchChange} />
                <InputRightElement
                    pointerEvents='none'
                    children={<SearchIcon color="gray.600" />}
                />
            </InputGroup>
        </Container>

    )
}

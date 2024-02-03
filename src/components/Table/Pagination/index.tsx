import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
interface PaginationProps {
    pages: number[];
    currentPage: number;
    handlePageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ pages, currentPage, handlePageChange }) => (
    <Box display="flex" justifyContent="center" alignItems="center" mt="4">
        <ButtonGroup size="sm" variant="outline">
            {pages.map(page => (
                <Button key={page} onClick={() => handlePageChange(page)} isActive={currentPage === page}>
                    {page}
                </Button>
            ))}
        </ButtonGroup>
    </Box>
)
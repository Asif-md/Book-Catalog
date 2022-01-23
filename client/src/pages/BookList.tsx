import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Chip, TableCell, TableRow } from '@mui/material';

interface IProps {
    book: {
        _id: string;
        title: string;
        year: number;
        description: string;
    }[];
}

const BookList: FC<IProps> = ({ book }) => {
    return (
        <>
            {book.map((row: any) => (
                <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                        <Link to={`/book/${row._id}`} style={{ textDecoration: 'none' }}>
                            <Button variant="contained">{row._id}</Button>
                        </Link>
                    </TableCell>
                    <TableCell>
                        <Chip label={row.title} />
                    </TableCell>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.description}</TableCell>
                </TableRow>
            ))}
        </>
    );
};

export default BookList;

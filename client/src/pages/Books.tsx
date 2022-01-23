import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
    Typography,
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table
} from '@mui/material';

// local imports
import API from '../api/api';
import Loader from '../components/Loading';
import BookList from './BookList';

interface IHeadings {
    headings: {
        ID: string;
        Title: string;
        Year: string;
        Description: string;
    }[];
}

const headColumns = ['Book ID', 'Title', 'Year', 'Description'];

const Books: React.FunctionComponent<IHeadings & RouteComponentProps<any>> = ({ headings }) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoader] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setLoader(true);
        let url = '/get/books';
        API.get(url).then((res) => {
            if (res.status === 200) {
                setData(res.data.books);
                setLoader(false);
            }
        });
    };

    return (
        <div
            style={{
                width: 900,
                margin: '0 auto',
                marginTop: '2%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Typography variant="h4">Book Catalog List</Typography>
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 650, maxWidth: 900 }}
                            size="medium"
                            aria-label="a dense table"
                        >
                            <TableHead>
                                <TableRow>
                                    {headColumns.map((column) => (
                                        <TableCell>{column}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <BookList book={data} />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
        </div>
    );
};

export default withRouter(Books);

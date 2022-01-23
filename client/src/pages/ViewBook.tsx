import React, { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import moment from 'moment';
import { Button, Divider, Typography, CardContent, CardActions, Card, Chip } from '@mui/material';

// local imports
import API from '../api/api';
import '../App.css';
import IPage from '../interfaces/page';
import Loader from '../components/Loading';

const ViewBook: FC<RouteComponentProps<any>> = (props) => {
    const [data, setData] = useState<IPage['book'] | any>({});
    const [isLoading, setLoader] = useState(false);

    useEffect(() => {
        let id = props.match.params.id;
        console.log(id);
        console.log(props);

        if (id) {
            getDataByID(id);
        }
    }, [props]);

    const getDataByID = (id: string) => {
        setLoader(true);
        let url = `/get/book/${id}`;
        API.get(url).then((res) => {
            if (res.status === 200) {
                setLoader(false);
                setData(res.data.book);
            }
        });
    };

    return (
        <div className="App">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Typography sx={{ fontSize: 18 }} component="div">
                        <b>{data.title}</b> book details
                    </Typography>
                    <Card sx={{ minWidth: 400 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Book ID
                            </Typography>
                            <Typography sx={{ fontSize: 18 }} component="div">
                                {/* be{bull}nev{bull}o{bull}lent */}
                                {data._id}
                            </Typography>
                            <Typography
                                sx={{ fontSize: 14, mt: 3 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Title
                            </Typography>
                            <Typography variant="h6" component="div">
                                {/* be{bull}nev{bull}o{bull}lent */}
                                {data.title}
                            </Typography>
                            <Typography sx={{ mt: 3 }} color="text.secondary">
                                Description
                            </Typography>
                            <Typography variant="h6" component="div">
                                {data.description}
                            </Typography>
                            <Typography sx={{ mt: 3 }} color="text.secondary">
                                Year
                            </Typography>
                            <Typography variant="h4" component="div">
                                <Chip label={data.year} />
                            </Typography>
                            <Typography sx={{ mt: 3 }} color="text.secondary">
                                Created At
                            </Typography>
                            <Typography variant="h5" component="div">
                                {moment(data.createdAt).format('DD/MM/YYYY')}
                            </Typography>
                        </CardContent>
                        <Divider />
                        <CardActions>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Button variant="contained">Go to the Book List!</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </>
            )}
        </div>
    );
};

export default withRouter(ViewBook);

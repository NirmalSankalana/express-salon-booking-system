import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/features/cartSlice';
import { Link } from 'react-router-dom';

export const AddedServiceCard = (props) => {
    const dispatch = useDispatch()
    return (
        <Grid item marginTop={1}>
            <Card sx={{ display: 'flex', width: "100%", height: "10rem", borderRadius: "1rem" }} >
                <Link to={`/service/${props._id}`}>
                    <CardMedia
                        component="img"
                        sx={{ width: "12.5rem" }}
                        image={require(`../images/s${props.image}.jpg`)}
                        alt="Live from space album cover"
                    />
                </Link>
                <Link to={`/service/${props._id}`}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h6">
                                {props.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {props.description}
                            </Typography>
                        </CardContent>

                    </Box>
                </Link>
                <Link to={`/service/${props._id}`}>
                    <Box>
                        <Typography variant='h6'>
                            AUD {props.price}
                        </Typography>
                        <Typography variant='h6'>
                            {props.time} Mins
                        </Typography>
                    </Box>
                </Link>
                <Box>
                    <IconButton onClick={() => dispatch(removeFromCart(props._id))}>
                        <DoDisturbOnOutlinedIcon />
                    </IconButton>
                </Box>

            </Card>
        </Grid>
    )
}

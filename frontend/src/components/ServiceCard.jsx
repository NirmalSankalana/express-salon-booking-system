import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/features/cartSlice';
import { Link } from 'react-router-dom'

export const ServiceCard = (props) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={props.name} >
            <Card sx={{ maxWidth: 345 }}>
                <Link to={`/service/${props._id}`}>
                    <CardMedia
                        component="img"
                        height="200"
                        // image={require(props.image)}
                        image={require(`../images/s${props.image}.jpg`)}
                        // src = {``}
                        alt={props.name}
                    />
                    <CardContent sx={{ maxHeight: "7.5rem", overflow: "hidden" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                </Link>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingX: "1rem" }}>
                    <Link to={`/service/${props._id}`}>
                        <Typography variant='h6' >{props.time}mins</Typography>
                    </Link>
                    <IconButton size="small" onClick={() => dispatch(addToCart(props))} disabled={cart.cart.find(service => service._id === props._id) ? true : false}>
                        <AddCircleIcon style={{ fontSize: "2rem" }} />
                    </IconButton>
                    <Link to={`/service/${props._id}`}>
                        <Typography variant='h6'>AUD {props.price}</Typography>
                    </Link>
                </CardActions>
            </Card>
        </Grid >
    )
}

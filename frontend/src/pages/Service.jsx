import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";
import homeimg from "../images/home.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";

export const Service = () => {
    const services = useSelector((state) => state.services);
    const cart = useSelector((state) => state.cart);
    const params = useParams();
    const { id } = params;
    const service = services.services.find((i) => i._id === id);
    const dispatch = useDispatch();
    return (
        <>
            <NavBar />

            <Grid container>
                <Grid xs={12} sm={12} md={6} lg={8}>
                    <Box
                        sx={{
                            margin: 0,
                            padding: 0,
                            minHeight: "100vh",
                            backgroundImage: `url(${homeimg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={4} marginTop={10} paddingX={5}>
                    <Typography variant="h4">{service.name}</Typography>
                    <Typography>{service.description}</Typography>
                    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                        <Typography variant="h5">AUD {service.price}</Typography>
                        <Typography variant="h5">{service.time} mins</Typography>
                    </Stack>

                    <FormControl fullWidth>
                        {cart.cart.find((s) => s._id === service._id) ? (
                            <Button
                                sx={{
                                    marginTop: "0.5rem",
                                    backgroundColor: "#ba000d",
                                    color: "#fff",
                                    borderRadius: "2rem",
                                    paddingX: "1rem",
                                    "&:hover": {
                                        backgroundColor: "#ba000d",
                                    },
                                }}
                                onClick={() => dispatch(removeFromCart(service._id))}
                            >
                                Remove the Service from Booking
                            </Button>
                        ) : (
                            <Button
                                sx={{
                                    marginTop: "0.5rem",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    borderRadius: "2rem",
                                    paddingX: "1rem",
                                    "&:hover": {
                                        backgroundColor: "#000",
                                    },
                                }}
                                onClick={() => dispatch(addToCart(service))}
                            >
                                Add Service to Booking
                            </Button>
                        )}
                        {/* <Button sx={{
                            marginTop: "0.5rem",
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: "2rem",
                            paddingX: "1rem",
                            "&:hover": {
                                backgroundColor: "#000",
                            },
                        }} onClick={() => dispatch(addToCart(service))}
                            disabled={cart.cart.find(s => s._id === service._id) ? true : false}>Add Service to Cart</Button> */}
                    </FormControl>
                </Grid>
            </Grid>
        </>
    );
};

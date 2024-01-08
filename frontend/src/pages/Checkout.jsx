import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from "../components/NavBar";
import { Container } from "@mui/system";
import { AddedServiceCard } from "../components/AddedServiceCard";
import {
    Grid,
    TextField,
    Stack,
    Select,
    MenuItem,
    Button,
    FormControl,
    Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { getEmployees } from "../redux/features/employeeSlice";
import {
    clearCart,
} from "../redux/features/cartSlice";

export const Checkout = () => {
    //useSelector hook allows access(subscribe) to the state stored in a Redux store
    // When an action is dispatched, useSelector() will do a reference comparison of the previous selector result value and the current result value. If they are different, the component will be forced to re-render.
    const cart = useSelector((state) => state.cart);
    const employees = useSelector((state) => state.employees);
    const [dateTime, setDateTime] = useState(cart.dateTime);
    const [serviceProvicer, setServiceProvider] = useState(cart.employee);
    const params = useParams();
    const { id } = params;
    // use dispatch returns a reference to the dispatch function from the Redux store.
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getEmployees());
    }, [id]);

    const getTotalPrice = () => {
        let total = 0;
        cart.cart.forEach((service) => {
            total += service.price;
        });
        return total;
    };

    const getTotalTime = () => {
        let total = 0;
        cart.cart.forEach((service) => {
            total += service.time;
        });
        return total;
    };

    const bookNowHandler = async () => {
        try {
            const bookingData = {
                client: '6592cc665e54392a7bfbf4db',
                bookedServices: cart.cart.map(service => ({ service: service._id })),
                employee: serviceProvicer,
                price: getTotalPrice(),
                startingTime: dayjs(dateTime).format('YYYY-MM-DDTHH:mm:ss'),
                endingTime: dayjs(dateTime).add(getTotalTime(), 'minutes').format('YYYY-MM-DDTHH:mm:ss'),
                isPaid: false,
                paidAt: false,
            };

            const response = await axios.post('/api/booking', bookingData);

            if (response.data.status === "success") {
                console.log("Hipip Horaay");
            }

            console.log('Booking successful:', response.data);

            dispatch(clearCart());
        } catch (error) {
            console.error("Booking Failed: ", error.message);
        }
    }


    return (
        <>
            <NavBar />
            <Container sx={{ display: "flex" }}>
                {cart.cart.length === 0 ? (
                    <Typography sx={{ marginTop: "10rem" }}>
                        You haven't selected any services. Please go to{" "}
                        <Link to="/services" style={{ color: "blue" }}>
                            Services
                        </Link>{" "}
                        page to select services
                    </Typography>
                ) : (
                    <Grid container spacing={2} paddingTop={12.5}>
                        <Grid xs={12} sm={12} md={8} lg={8}>
                            {cart.cart.map((service) => (
                                <AddedServiceCard
                                    _id={service._id}
                                    name={service.name}
                                    image={service.image}
                                    description={service.description}
                                    price={service.price}
                                    time={service.time}
                                    key={service._id}
                                />
                            ))}
                            <Typography sx={{ marginTop: "1rem" }}>
                                Book More{" "}
                                <Link to="/services" style={{ color: "blue" }}>
                                    Services
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid xs={12} sm={12} md={4} lg={4}>
                            <FormControl sx={{ float: "right" }}>
                                <Stack spacing={3}>
                                    <Typography>
                                        Total Price:{getTotalPrice() || 0} AUD
                                    </Typography>
                                    <Typography>
                                        Total Time: {getTotalTime() || 0} mins
                                    </Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Select a Employee"
                                        value={serviceProvicer}
                                        defaultValue={cart.employee}
                                        onChange={(e) => setServiceProvider(e.target.value)}
                                        sx={{ borderRadius: "1rem" }}
                                    >
                                        {employees.employees.map((employee) => (
                                            <MenuItem value={employee._id}>{employee.name}</MenuItem>
                                        ))}
                                    </Select>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            renderInput={(props) => <TextField {...props} />}
                                            minTime={dayjs().set("hour", 8)}
                                            maxTime={dayjs().set("hour", 18)}
                                            minutesStep={20}
                                            label="DateTimePicker"
                                            value={dateTime}
                                            onChange={(newDateTime) => {
                                                setDateTime(newDateTime);
                                            }}
                                        />
                                    </LocalizationProvider>
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
                                        onClick={bookNowHandler}
                                    >
                                        Book Now
                                    </Button>
                                </Stack>
                            </FormControl>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </>
    );
};

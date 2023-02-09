import React, { useEffect, useState } from "react";
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
import { getEmployees } from "../redux/features/employeeSlice";
import {
    addDateTimeToBooking,
    addEmployeeToBooking,
} from "../redux/features/cartSlice";

export const Checkout = () => {
    const cart = useSelector((state) => state.cart);

    const employees = useSelector((state) => state.employees);
    const [dateTime, setDateTime] = useState(cart.dateTime);
    const [serviceProvicer, setServiceProvider] = useState(cart.employee);
    console.log("datetime:", dateTime);
    console.log("service provider:", serviceProvicer);
    const params = useParams();
    const { id } = params;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getEmployees());
    }, [id]);
    console.log(cart)
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

    const bookNowHandler = () => {
        navigate('/signin?redirect=/booking')
        dispatch(addDateTimeToBooking(dateTime))
        dispatch(addEmployeeToBooking(serviceProvicer))
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

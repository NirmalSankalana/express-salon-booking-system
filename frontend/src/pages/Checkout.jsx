import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Container } from '@mui/system'
import { AddedServiceCard } from '../components/AddedServiceCard'
import { Box, Card, Grid, TextField, Stack, Select, InputLabel, MenuItem, Button, FormControl } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker, MobileDatePicker, TimePicker } from '@mui/x-date-pickers'
import { useParams } from 'react-router-dom'
import { getEmployees } from '../redux/features/employeeSlice'

export const Checkout = () => {
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const cart = useSelector((state) => state.cart)
    const [employee, setEmployee] = useState('')
    const services = useSelector((state) => state.services)
    const employees = useSelector((state) => state.employees)


    const params = useParams()
    const { id } = params
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEmployees());
    }, [id])
    console.log(cart.cart)
    return (
        <>
            <NavBar />
            <Container sx={{ display: 'flex' }}>
                <Grid container spacing={2} paddingTop={12.5}>
                    <Grid xs={12} sm={12} md={8} lg={8}>
                        {
                            cart.cart.map((service) => (
                                <AddedServiceCard
                                    _id={service._id}
                                    name={service.name}
                                    image={service.image}
                                    description={service.description}
                                    price={service.price}
                                    time={service.time} key={service._id} />
                            ))
                        }
                    </Grid>
                    <Grid xs={12} sm={12} md={4} lg={4}>

                        <FormControl sx={{}}>
                            <Stack spacing={3}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={employee}
                                    label="Age"
                                    onChange={(e) => setEmployee(e.target.value)}
                                    sx={{ borderRadius: "1rem" }}
                                >{
                                        employees.employees.map((employee) => (
                                            <MenuItem value={employee._id}>{employee.name}</MenuItem>
                                        ))
                                    }


                                </Select>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                        label="Date desktop"
                                        inputFormat="MM/DD/YYYY"
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}

                                    />

                                    <TimePicker
                                        label="Time"
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}

                                    />
                                </LocalizationProvider>
                                <Button sx={{
                                    marginTop: "0.5rem",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    borderRadius: "2rem",
                                    paddingX: "1rem",
                                    "&:hover": {
                                        backgroundColor: "#000",
                                    },
                                }}>Pay Now</Button>
                            </Stack>
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

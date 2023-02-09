import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

export const Booking = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate()
    useEffect(() => {
        if (user.userObject.name === "") {
            navigate("/signin")
        }
    }, [user, navigate])
    return (
        <>
            {/* <NavBar /> */}
            <Container>
                <Typography variant="h4">Payment Page</Typography>
            </Container>
        </>

    )
}

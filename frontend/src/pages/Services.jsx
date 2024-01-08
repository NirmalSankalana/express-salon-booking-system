import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ServiceCard } from '../components/ServiceCard'
import { CircularProgress, Grid } from '@mui/material'
// import data from '../data'
import { NavBar } from '../components/NavBar'
import { Container } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../redux/features/servicesSlice';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
export const Services = () => {
    const { services, loading } = useSelector((state) => state.services)
    const dispatch = useDispatch()
    const params = useParams()
    const { _id } = params
    // const [services, setServices] = useState([]);
    useEffect(() => {
        // const fetchData = async () => {
        //     const fetchedServices = await axios.get('/api/services');
        //     setServices(fetchedServices.data);
        // }
        // fetchData();
        dispatch(getServices());
    }, [_id])

    return (
        <>
            <NavBar />

            <Container sx={{ display: 'flex', justifyContent: "center" }}>
                <Helmet>
                    <title>Services</title>
                </Helmet>
                {loading ? <CircularProgress />
                    :
                    <Grid container spacing={2} paddingTop={10}>

                        {
                            services.map((service) => (

                                <ServiceCard
                                    _id={service._id}
                                    name={service.name}
                                    image={service.image}
                                    description={service.description}
                                    price={service.price}
                                    time={service.time} key={service._id} />

                            ))
                        }
                    </Grid>

                }

            </Container>
        </>


    )
}

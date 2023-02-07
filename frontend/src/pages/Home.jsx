import React from 'react'
import { NavBar } from '../components/NavBar.jsx'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import homeimg from "../images/home.jpg"

export const Home = () => {
    // return (
    //     <Box sx={{ margin: 0, padding: 0, width: "100%", height: "100vh", overflow: "hidden", position: "relative" }}>
    //         <Typography variant='h2' sx={{ position: "absolute", top: "50%", left: "20%", transform: "translate(-10%, -50%)" }}>We show your skin, hair, and body the care and attention they deserve.</Typography>
    //         <Box
    //             component="img"
    //             sx={{
    //                 width: "100%",
    //                 minHeight: "100vh",
    //                 fit: 'cover',
    //                 // position: "center"
    //             }}
    //             alt="The house from the offer."
    //             src={homeimg}
    //         />


    //     </Box>
    // )
    return <Box sx={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${homeimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"

    }}>
        <Box sx={{ position: 'absolute', top: "40vh", paddingLeft: "10rem", paddingRight: "10rem" }}>
            <NavBar />
            <Typography variant='h2'>We show your skin, hair, and body the care and attention they deserve.</Typography>
            <Button variant="contained" size="large"
                sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "2rem",
                    paddingY: "0.5rem",
                    paddingX: "2rem",
                    "&:hover": {
                        backgroundColor: "#000",
                    },
                }}>Book Now</Button>
        </Box>
    </Box>


}

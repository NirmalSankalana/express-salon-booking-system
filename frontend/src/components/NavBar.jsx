import {
    AppBar,
    Toolbar,
    Button,
    Stack,
    Badge,
} from "@mui/material";
import React from "react";
import { ReactComponent as LogoWhite } from "../images/logo-white.svg";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
export const NavBar = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart)
    const getTotalTime = () => {
        let total = 0
        cart.cart.forEach(service => {
            total += service.time
        })
        return total
    }

    return (
        <AppBar
            position="fixed"
            sx={{ backgroundColor: "#000", color: "#fff", paddingX: "3rem" }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button component={Link} to="/"><LogoWhite /></Button>

                <Stack>
                    <Link to="/services" className="navbar">Services</Link>
                </Stack>
                <Badge badgeContent={getTotalTime() || 0} color="success" max={300}>
                    <Button
                        component={Link} to="/checkout"
                        size="large"
                        sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            borderRadius: "2rem",
                            paddingX: "1rem",
                            "&:hover": {
                                backgroundColor: "#fff",
                            },
                        }}

                    >
                        Book Now
                    </Button>
                </Badge>
            </Toolbar>
        </AppBar>
    );
};

import { AppBar, Toolbar, Button, Stack, Badge, Avatar, Box, ButtonGroup, IconButton, Menu, MenuItem, Divider, ListItemIcon } from "@mui/material";
import React from "react";
import { ReactComponent as LogoWhite } from "../images/logo-white.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stringAvatar } from "../config/avatarHelper";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import Logout from '@mui/icons-material/Logout';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import { userSignOut } from "../redux/features/userSlice";
import { clearCart } from "../redux/features/cartSlice";
export const NavBar = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const getTotalTime = () => {
        let total = 0;
        cart.cart.forEach((service) => {
            total += service.time;
        });
        return total;
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const signOutHandler = () => {
        dispatch(userSignOut())
        dispatch(clearCart())
    }

    return (
        <AppBar
            position="fixed"
            sx={{ backgroundColor: "#000", color: "#fff", paddingX: "3rem" }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button component={Link} to="/">
                    <LogoWhite />
                </Button>

                <Stack>
                    <Link to="/services" className="navbar">
                        Services
                    </Link>
                </Stack>
                <ButtonGroup>
                    {user.userObject.name !== "" ? (
                        <React.Fragment>
                            <IconButton onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}>
                                <Avatar {...stringAvatar(user.userObject.name)} />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> {user.userObject.name}
                                </MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/mybookings">
                                    <ListItemIcon>
                                        <BookOnlineIcon fontSize="small" />
                                    </ListItemIcon>
                                    Bookings
                                </MenuItem>

                                <MenuItem onClick={handleClose} component={Link} to="#signout" onClick={signOutHandler}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Sign out
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <IconButton onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}>
                                <Avatar />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >

                                <MenuItem onClick={handleClose} component={Link} to="/signup">
                                    <ListItemIcon>
                                        <LoginSharpIcon fontSize="small" />
                                    </ListItemIcon>
                                    Sign Up
                                </MenuItem>

                                <MenuItem onClick={handleClose} component={Link} to="/signin">
                                    <ListItemIcon>
                                        <LoginSharpIcon fontSize="small" />
                                    </ListItemIcon>
                                    Sign In
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                    <Badge badgeContent={getTotalTime() || 0} color="success" max={300}>
                        <Button
                            component={Link}
                            to="/checkout"
                            size="small"
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
                </ButtonGroup>


            </Toolbar>
        </AppBar>
    );
};

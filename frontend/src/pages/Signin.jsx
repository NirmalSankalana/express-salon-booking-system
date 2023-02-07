import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactComponent as LogoBlack } from "../images/logo-black.svg";
import { Helmet } from 'react-helmet-async';
import { Link, redirect, useLocation } from 'react-router-dom';


const theme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const search = useLocation()
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/'
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <Container component="main" maxWidth="xs" sx={{ height: "100vh", display: 'flex', alignItems: 'center' }}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >

                    <Button component={Link} to="/"><LogoBlack /></Button>
                    <Typography component="h2" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            sx={{ borderColor: "#000" }}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            size='large'
                            variant="contained"
                            sx={{
                                mt: 1, mb: 2, backgroundColor: "#000", borderRadius: "1rem", "&:hover": {
                                    backgroundColor: "#A5A5A5",
                                },
                            }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/" >
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={`signup?redirect=${redirect}`}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}
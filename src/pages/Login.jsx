import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuthContext } from '@/hooks/context/useAuthContext';
import { useEffect, useState } from 'react';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
    typography: {
        "fontFamily": `"Nunito", sans-serif`,
    }
});

export default function Login() {

    const { user, dispatch, login } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await login();
        }
        catch (error) {
            alert(error)
        }

    };

    useEffect(() => {
        if (user) {
            setIsLoading(false);
            window.location.reload();
        }
    }, [user]);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <form method="post" className='h-screen flex items-center justify-center'>
                    <div className="form-wrapper  flex flex-col items-center w-full">
                        <div className='bg-primary text-white p-2 rounded-full'>
                            <LockOutlinedIcon fontSize='large' />
                        </div>
                        <h2 className='mt-4 text-lg'>Welcome to</h2>
                        <h1 className='text-4xl font-bold text-primary'>Wakeguard</h1>
                        <Button
                            type="submit"
                            disabled={isLoading}
                            onClick={handleSubmit}
                            color='primary'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1 }}
                            startIcon={<GoogleIcon />}
                        >
                            Login with Google
                        </Button>
                    </div>
                </form>
            </Container>
        </ThemeProvider>
    );
}
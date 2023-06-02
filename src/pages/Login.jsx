import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
    typography: {
        "fontFamily": `"Nunito", sans-serif`,
    }
});

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();

    };

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
                            onClick={handleSubmit}
                            color='primary'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1}}
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
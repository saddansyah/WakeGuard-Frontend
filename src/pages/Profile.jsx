import Menu from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import { Avatar, ButtonBase, InputAdornment, TextField } from "@mui/material";

import { Navbar } from "@/utils/componentsLoader";
import { useAuthContext } from '@/hooks/context/useAuthContext';


const Profile = () => {
    const { user, dispatch } = useAuthContext();

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
        window.location.replace('login')
    }
    return (
        <>
            <Navbar>
                <img src={user && user?.photoURL} style={{ width: '3em', height: '3em', borderRadius: 1000 }} alt="user profile" />
                <Menu />
            </Navbar>
            <h1 className="font-bold text-2xl text-primary mb-6">My Profile</h1>
            <div className="profile-summary items-center justify-center flex flex-row gap-8 h-fit">
                <Avatar src={user && user?.photoURL} sx={{ width: 120, height: 120, fontSize: 50 }}>{user && user?.displayName[0]}</Avatar>
            </div>
            <div className="profile-info mt-12">
                <h2 className="font-bold mb-2">Profile Information</h2>
                <div className="card">
                    <div className="mb-3">
                        <TextField
                            fullWidth
                            disabled
                            id="name"
                            label="Name"
                            value={user && user?.displayName}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <TextField
                            fullWidth
                            disabled
                            id="email"
                            label="Email"
                            value={user && user?.email}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="logout mt-12 mb-20">
                <ButtonBase component="button" className="w-full" onClick={handleLogout}>
                    <div className="card bg-red-500 text-white text-center font-semibold w-full">Log Out</div>
                </ButtonBase>
            </div>
        </>
    );
}

export default Profile;
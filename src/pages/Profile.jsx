import Menu from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import { Avatar, ButtonBase, InputAdornment, TextField } from "@mui/material";
import { Navbar } from "@/utils/componentsLoader";

const Profile = () => {

    const dummyUser = {
        username: 'wakeguard',
        name: 'Wakeguard User',
        email: 'gmail@wakeguard.com',
        phoneNumber: '081293812939'
    }

    const handleLogout = () => {
        sessionStorage.removeItem('user');

        window.location.replace('login')
    }
    return (
        <>
            <Navbar>
                <Avatar>SA</Avatar>
                <Menu />
            </Navbar>
            <h1 className="font-bold text-2xl text-primary mb-6">My Profile</h1>
            <div className="profile-summary flex flex-row gap-8 items-start h-fit">
                <Avatar src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/05/18/1067981407.jpg" sx={{ width: 120, height: 120, fontSize: 50 }}>SA</Avatar>
                <div className="content-right">
                    <div className="username card p-3">
                        <h2 className="text-xl font-semibold">@{dummyUser.username}</h2>
                    </div>
                    <div className="edit-button mt-3"></div>
                    <ButtonBase component="div">
                        <div className="p-2 rounded-lg bg-accent text-white">
                            <span><ModeEditIcon /></span> Edit Profile
                        </div>
                    </ButtonBase>
                </div>
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
                            value={dummyUser.name}
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
                            value={dummyUser.email}
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
                    <div className="">
                        <TextField
                            fullWidth
                            disabled
                            id="phoneNumber"
                            label="Phone Number"
                            value={dummyUser.phoneNumber}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
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
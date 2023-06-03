
// Framer Motion
import { motion } from 'framer-motion'

// MUI Icons
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


// MUI Components
import { Fab, ButtonBase } from '@mui/material';

// React
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// Styles
import '@/components/styles/BottomNavbar.css'


const BottomNavbar = () => {
    const [value, setValue] = useState('home');
    const navigate = useNavigate();
    const handleChange = (event, newValue, newTo) => {
        setValue(newValue);
        navigate(newTo);
    };

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="bg-white fixed bottom-0 left-0 right-0 z-10 w-full max-w-lg mx-auto h-16 shadow-[0_-5px_10px_-5px_rgba(0,0,0,0.09)] rounded-t-md">
                    <ul className="grid gap-2 justify-items-stretch h-full grid-cols-5 mx-auto font-medium text-xs">
                        <ButtonBase component="li">
                            <NavLink to="/" exact="true" className={({ isActive }) => isActive ? 'text-accent  transition-all w-full' : 'text-gray-700  transition-all w-full'}>
                                <div className='flex flex-col font-light items-center justify-center h-full'>
                                    <HomeIcon />
                                    <p className=''>Home</p>
                                </div>
                            </NavLink>
                        </ButtonBase>
                        <ButtonBase component="li">
                            <NavLink to="/emergency" exact="true" className={({ isActive }) => isActive ? 'text-accent  transition-all w-full' : 'text-gray-700  transition-all w-full'}>
                                <div className='flex flex-col font-light items-center justify-center h-full'>
                                    <ContactEmergencyIcon />
                                    <p className=''>Emergency</p>
                                </div>
                            </NavLink>
                        </ButtonBase>
                        <div className='relative bottom-5 scale-[1.3] flex flex-col gap-1 items-center justify-center h-full font-light'>
                            <Fab color='primary' size='large'>
                                <NavLink to="/driving-mode" exact="true" className={({ isActive }) => isActive ? 'active-driving-mode' : 'text-white transition-all'}>
                                    <div className='scale-150'>
                                        <DirectionsCarIcon />
                                    </div>
                                </NavLink>
                            </Fab>
                        </div>
                        <ButtonBase component="li">
                            <NavLink to="/driving-tips" exact="true" className={({ isActive }) => isActive ? 'text-accent  transition-all w-full' : 'text-gray-700  transition-all w-full'}>
                                <div className=' flex flex-col font-light items-center justify-center h-full'>
                                    <InfoIcon />
                                    <p className=''>Driving Tips</p>
                                </div>
                            </NavLink>
                        </ButtonBase>
                        <ButtonBase component="li">
                            <NavLink to="/profile" exact="true" className={({ isActive }) => isActive ? 'text-accent  transition-all w-full' : 'text-gray-700  transition-all w-full'}>
                                <div className=' flex flex-col font-light items-center justify-center h-full'>
                                    <AccountCircleIcon />
                                    <p className=''>Profile</p>
                                </div>
                            </NavLink>
                        </ButtonBase>
                    </ul>
                </div>
            </motion.div>
        </>
    );
}

export default BottomNavbar;
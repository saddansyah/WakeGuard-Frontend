// MUI Icons
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// MUI Components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ButtonBase from '@mui/material/ButtonBase';

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
            <div className="fixed bottom-0 left-0 right z-50 w-full h-16 shadow-[0_-35px_60px_-5px_rgba(0,0,0,0.1)] rounded-t-md">
                <ul className="grid container gap-2 justify-items-stretch h-full grid-cols-5 mx-auto font-medium text-xs">
                    <ButtonBase component="li">
                        <NavLink to="/" exact="true" className={({ isActive }) => isActive ? 'text-accent  transition-all' : 'text-gray-700  transition-all'}>
                            <div className='flex flex-col font-light items-center justify-center h-full'>
                                <HomeIcon />
                                <p className=''>Home</p>
                            </div>
                        </NavLink>
                    </ButtonBase>
                    <ButtonBase component="li">
                        <NavLink to="/emergency" exact="true" className={({ isActive }) => isActive ? 'text-accent  transition-all' : 'text-gray-700  transition-all'}>
                            <div className='flex flex-col font-light items-center justify-center h-full'>
                                <ContactEmergencyIcon />
                                <p className=''>Emergency</p>
                            </div>
                        </NavLink>
                    </ButtonBase>
                    <ButtonBase component="div">
                        <div className='relative bottom-2 flex flex-col gap-1 items-center justify-center h-full font-light'>
                            <NavLink to="/driving-mode" exact="true" className={({ isActive }) => isActive ? 'active-driving-mode' : 'text-gray-700  transition-all w-full'}>
                                <div className='bg-secondary p-2 scale-150 bottom-2 relative rounded-full'>
                                    <DirectionsCarIcon />
                                </div>

                            </NavLink>
                            <p className='text-gray-700'>Mode</p>
                        </div>
                    </ButtonBase>
                    <ButtonBase component="li">
                        <NavLink to="/driving-tips" exact="true" className={({ isActive }) => isActive ? 'text-accent  transition-all' : 'text-gray-700  transition-all'}>
                            <div className=' flex flex-col font-light items-center justify-center h-full'>
                                <InfoIcon />
                                <p className=''>Tips</p>
                            </div>
                        </NavLink>
                    </ButtonBase>
                    <ButtonBase component="li">
                        <NavLink to="/profile" exact="true" className={({ isActive }) => isActive ? 'text-accent  transition-all' : 'text-gray-700  transition-all'}>
                            <div className=' flex flex-col font-light items-center justify-center h-full'>
                                <AccountCircleIcon />
                                <p className=''>Profile</p>
                            </div>
                        </NavLink>
                    </ButtonBase>
                </ul>
            </div>
        </>
    );
}

export default BottomNavbar;
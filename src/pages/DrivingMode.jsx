import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

import Menu from "@mui/icons-material/Menu";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Avatar, Fade, ButtonBase } from "@mui/material";

import { Navbar } from "@/utils/componentsLoader";
import { useAuthContext } from '@/hooks/context/useAuthContext';

const DrivingMode = () => {
    const navigate = useNavigate();
    const { user, dispatch } = useAuthContext();

    const handleStart = () => {
        navigate('/driving-mode/start', { replace: true });
    }

    return (
        <>
            <motion.div exit={{ opacity: 0 }}>
                <Navbar>
                    <img src={user && user?.photoURL} style={{ width: '3em', height: '3em', borderRadius: 1000 }} alt="user profile" />
                    <Menu />
                </Navbar>
                <div className="wrapper h-[65vh] flex flex-col justify-center items-center">
                    <div className="content-top mb-6 text-center">
                        <h1 className="font-bold text-2xl text-accent mx-auto">Driving Mode</h1>
                        <p className="description text-sm font-light mx-12 mt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ullam?</p>
                    </div>
                    <div className="driving-button mt-24">
                        <Fade in={true}>
                            <ButtonBase component="button" sx={{ borderRadius: 500 }} onClick={handleStart}>
                                <div className='flex flex-col gap-1 items-center justify-center h-full font-light'>
                                    <div className='bg-gradient-to-r from-primary from-70% to-secondary from-30% text-white p-12 outline outline-[15px] -outline-offset-2 outline-secondary rounded-full'>
                                        <div><DirectionsCarIcon sx={{ fontSize: 120 }} className="" /></div>
                                        {/* <p className="text-xs absolute top-[50%] left-[50%]">Start</p> */}
                                    </div>
                                </div>
                            </ButtonBase>
                        </Fade>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default DrivingMode;
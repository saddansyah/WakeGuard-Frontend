import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SpeedIcon from '@mui/icons-material/Speed';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Navbar, Clock, Speedometer } from "@/utils/componentsLoader";

const DrivingModeStart = () => {

    const navigate = useNavigate();


    return (<>
        <motion.div exit={{ opacity: 0 }}>
            <div className="body bg-primary absolute top-0 right-0 left-0 z-50 p-6 h-screen transition-all">
                <Navbar>
                    <button onClick={() => navigate('/driving-mode')}>
                        <ArrowBackIcon className="text-white" />
                    </button>
                </Navbar>

                <div className="wrapper-focus-mode h-[65vh] flex flex-col mt-[30%] justify-start items-center">
                    <div className="alert card py-1 px-4 rounded-full mb-24 text-primary">
                        <span className="mr-1">You are still awake</span> <VisibilityIcon/>
                    </div>
                    <Clock />
                    <div className="speedometer text-white bg-gradient-to-r from-cyan-400 to-secondary p-6 rounded-xl flex flex-col items-center space-y-1">
                        <p className="text-lg">Speedometer <SpeedIcon /></p>
                        <span className="font-bold text-4xl"><Speedometer /> km/h</span>
                    </div>
                </div>
            </div>
        </motion.div>
    </>);
}

export default DrivingModeStart;
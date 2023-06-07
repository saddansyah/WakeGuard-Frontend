import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SpeedIcon from '@mui/icons-material/Speed';
import VisibilityIcon from '@mui/icons-material/Visibility';

import useModel from "@/hooks/useModel";
import { Navbar, Clock, Speedometer } from "@/utils/componentsLoader";

const DrivingModeStart = () => {

    const displaySize = {
        width: 640,
        height: 480
    };

    const navigate = useNavigate();
    const webcamRef = useRef(null);
    const [result, setResult] = useState('Awake');
    const [initializing, setInitializing] = useState(false);
    const { runModel } = useModel({ webcamRef, setResult });

    useEffect(() => {
        runModel(setInitializing);
    }, [])


    return (<>
        <motion.div initial={{ opacity: 0, zIndex: 0 }} animate={{ opacity: 1, zIndex: 1000 }} exit={{ opacity: 0, zIndex: 1000 }}>
            <div className="body bg-primary absolute top-0 right-0 left-0 z-50 p-6 h-screen transition-all">
                <Navbar>
                    <button onClick={() => navigate('/driving-mode')}>
                        <ArrowBackIcon className="text-white" />
                    </button>
                </Navbar>
                <div className="wrapper-focus-mode h-[65vh] flex flex-col mt-[30%] justify-start items-center">
                    {initializing && <h3 className="text-white font-semibold">Initializing...</h3>}
                    <div className={`alert card py-1 px-4 rounded-full mb-24 text-primary ${result === 'Drowsy' && 'bg-red-400 text-white border-red-500'}`}>
                        <span className="mr-1">{result === 'Awake' && 'You are still awake'}{result === 'Drowsy' && 'You look so sleepy'}</span> <VisibilityIcon />
                    </div>
                    <Clock />
                    <div className="speedometer text-white bg-gradient-to-r from-cyan-400 to-secondary p-6 rounded-xl flex flex-col items-center space-y-1">
                        <p className="text-lg">Speedometer <SpeedIcon /></p>
                        <span className="font-bold text-4xl"><Speedometer /> km/h</span>
                    </div>
                </div>
                <div className="webcam">
                    <Webcam
                        ref={webcamRef}
                        id="video"
                        muted={true}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zindex: 5,
                            width: displaySize.width,
                            height: displaySize.height,
                        }}
                        className="invisible"
                        width={displaySize.width}
                        height={displaySize.height}
                    />
                </div>
            </div>
        </motion.div>
    </>);
}

export default DrivingModeStart;
import Menu from "@mui/icons-material/Menu";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Avatar, Fade, ButtonBase } from "@mui/material";
import { Navbar } from "@/utils/componentsLoader";

const DrivingMode = () => {
    return (
        <>
            <Navbar>
                <Avatar>SA</Avatar>
                <Menu />
            </Navbar>
            <div className="wrapper h-[65vh] flex flex-col justify-center items-center">
                <div className="content-top mb-6 text-center">
                    <h1 className="font-bold text-2xl text-accent mx-auto">Driving Mode</h1>
                    <p className="description text-sm font-light mx-12 mt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ullam?</p>
                </div>
                <div className="driving-button mt-24">
                    <Fade in={true}>
                            <ButtonBase component="button" sx={{ borderRadius: 500 }}>
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
        </>
    );
}

export default DrivingMode;
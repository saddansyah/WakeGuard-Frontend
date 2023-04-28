import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BottomNavbar = () => {
    return (
        <>
            <div className="fixed bottom-0 left-0 right z-50 w-full h-16 shadow-[0_-35px_60px_-5px_rgba(0,0,0,0.1)] rounded-t-md">
                {/* <div className='relative bottom-8'> */}
                    <ul class="grid container gap-2 justify-items-stretch h-full grid-cols-5 mx-auto font-medium text-xs">
                        <a href='/'>
                            <li className='flex flex-col font-light items-center justify-center h-full'>
                                <HomeIcon className='text-primary'/>
                                <p className=''>Home</p> 
                            </li>
                        </a>
                        <a href='/emergency'>
                            <li className='flex flex-col font-light items-center justify-center h-full'>
                                <ContactEmergencyIcon className='text-primary'/>
                                <p className=''>Emergency</p> 
                            </li>
                        </a>
                        <a href='/driving-mode'>
                            <li className='relative bottom-2 flex flex-col gap-1 items-center justify-center h-full font-light'>
                                <div className='bg-secondary p-2 scale-150 bottom-2 relative rounded-full'>
                                    <DirectionsCarIcon className='text-white'/>
                                </div>
                                <p className=''>Mode</p> 
                            </li>
                        </a>
                        <a href='/driving-tips'>
                            <li className=' flex flex-col font-light items-center justify-center h-full'>
                                <InfoIcon className='text-primary'/>
                                <p className=''>Tips</p> 
                            </li>
                        </a>
                        <a href='/profile'>
                            <li className=' flex flex-col font-light items-center justify-center h-full'>
                                <AccountCircleIcon className='text-primary'/>
                                <p className=''>Profile</p> 
                            </li>
                        </a>
                    </ul>
                </div>
            {/* </div> */}
        </>
    );
}

export default BottomNavbar;
// MUI Icons
import Menu from "@mui/icons-material/Menu";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CallIcon from '@mui/icons-material/Call';

// MUI Components
import Avatar from "@mui/material/Avatar";

// Component Loader
import { Navbar } from "@/utils/componentsLoader";
import { Link } from "react-router-dom";

const dummyContact = [
    {
        name: "Pak Pulici",
        number: "08112394902"
    },
    {
        name: "Pak Pulizi",
        number: "08112393124"
    },
    {
        name: "Pak Polici",
        number: "08113394902"
    }
]

const Home = () => {
    const user = "WakeGuard";
    return (
        <>
            <Navbar>
                <Avatar>WG</Avatar>
                <Menu />
            </Navbar>
            <div className="head-title mb-12 text-accent">
                <h1 className="font-bold text-2xl ">Hello, {user}</h1>
                <p className="font-light text-gray-500">as User</p>
            </div>

            <div className="driving-mode mb-6">
                <h2 className="font-bold mb-2">Go To Driving Mode</h2>
                <div className="card flex flex-row justify-between w-full">
                    <div className="image relative basis-2/3">
                        <img src="" alt="image here" />
                    </div>
                    <div className="content-right basis-1/3 flex flex-col items-center">
                        <Link to={'/driving-mode'}>
                            <div className='bg-accent text-white w-fit p-2 rounded-full'>
                                <DirectionsCarIcon />
                            </div>
                        </Link>
                        <p className=" text-accent text-center text-xs">Launch Driving Mode</p>
                    </div>
                </div>
            </div>

            <div className="one-tap-call mb-6">
                <h2 className="font-bold mb-2">One-tap Call</h2>
                <div className="cards grid grid-cols-1 gap-2">
                    {dummyContact && dummyContact.map((item) =>
                        <div key={item.number} className="contact card flex flex-row text-sm">
                            <div className="contact-info basis-4/5">
                                <h4 className="font-semibold text-primary">{item.name}</h4>
                                <p className="">{item.number}</p>
                            </div>
                            <div className="action basis-1/5 flex justify-center items-center">
                                <div className='bg-secondary text-white w-fit p-2 rounded-full sca'>
                                    <CallIcon />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="recent-tips mb-6">
                <h2 className="font-bold mb-2">Recent Driving Tips</h2>
                <div className="card bg-yellow-400 text-center">
                    <p>Under Construction 🚧</p>
                </div>
            </div>
        </>
    );
}

export default Home;
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Avatar } from "@mui/material";
import { Navbar } from "@/utils/componentsLoader";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar>
                <button onClick={() => navigate(-1)}>
                    <ArrowBack />
                </button>
            </Navbar>
            <div className="px-4 py-12 items-center flex justify-center flex-col-reverse gap-16">
                <div className="w-full relative pb-12">
                    <div className="relative">
                        <div className="absolute">
                            <div className="">
                                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    Looks like you've found the
                                    doorway to the great nothing 😞
                                </h1>
                                <p>Error: Page Not Found</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                        </div>

                    </div>
                </div>
                {/* <div>
                    <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
                </div> */}
            </div>
        </>
    );
}

export default NotFound;
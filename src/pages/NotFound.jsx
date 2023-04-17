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
            <div>
                <h1 className="font-bold text-lg text-center">404 Not Found</h1>
            </div>
        </>
    );
}

export default NotFound;
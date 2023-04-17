import Menu from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { Navbar } from "@/utils/componentsLoader";

const Emergency = () => {
    return (
        <>
            <Navbar>
                <Avatar>SA</Avatar>
                <Menu />
            </Navbar>
            <h1 className="font-bold text-2xl text-primary mb-6">Emergency</h1>
        </>
    );
}

export default Emergency;
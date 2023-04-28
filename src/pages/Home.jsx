import Menu from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { Navbar } from "@/utils/componentsLoader";

const Home = () => {
    const user = "WakeGuard";

    return (
        <>
            <Navbar>
                <Avatar>WG</Avatar>
                <Menu />
            </Navbar>
            <h1 className="font-bold text-2xl text-primary mb-6">Hello, {user}</h1>
        </>
    );
}

export default Home;
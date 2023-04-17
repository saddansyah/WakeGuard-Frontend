import Menu from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { Navbar } from "@/utils/componentsLoader";

const Profile = () => {
    return (
        <>
            <Navbar>
                <Avatar>SA</Avatar>
                <Menu />
            </Navbar>
            <h1 className="font-bold text-2xl text-primary mb-6">Profile</h1>
        </>
    );
}

export default Profile;
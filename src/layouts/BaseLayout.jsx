import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <>
            <div className="bg-zinc-800 p-6 h-[100vh]">
                <Outlet />
            </div>
        </>
    );
}

export default BaseLayout;
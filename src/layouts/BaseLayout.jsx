import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <>
            <div className="bg-white relative max-w-lg w-screen text-black mx-auto">
                <Outlet />
            </div>
        </>
    );
}

export default BaseLayout;
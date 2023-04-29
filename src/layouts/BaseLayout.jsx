import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="bg-white mb-12 w-screen text-black">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default BaseLayout;
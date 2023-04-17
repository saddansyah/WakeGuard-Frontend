import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="bg-white p-6 h-screen w-full max-w-md text-black">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default BaseLayout;
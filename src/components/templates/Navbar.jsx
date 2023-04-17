const Navbar = ({ children }) => {
    return (
        <>
            <div className="w-full flex flex-row justify-between mb-6">
                {children}
            </div>
        </>
    );
}

export default Navbar;
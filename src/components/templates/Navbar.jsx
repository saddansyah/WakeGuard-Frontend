const Navbar = ({ children }) => {
    return (
        <>
            <div className="w-full flex flex-row justify-between mb-12">
                {children}
            </div>
        </>
    );
}

export default Navbar;
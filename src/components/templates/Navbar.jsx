const Navbar = ({ children }) => {
    return (
        <>
            <div className="w-full flex flex-row justify-between mb-12 bg-whi">
                {children}
            </div>
        </>
    );
}

export default Navbar;
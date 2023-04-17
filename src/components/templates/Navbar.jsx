const Navbar = () => {
    return (
        <>
            <ul className="flex gap-2 underline">
                <li>
                    <a href='/'>Home </a>
                </li>
                <li>
                    <a href='/driving-mode'>Driving Mode</a>
                </li>
                <li>
                    <a href='/emergency'>Emergency</a>
                </li>
                <li>
                    <a href='/driving-tips'>Driving Tips</a>
                </li>
                <li>
                    <a href='/profile'>Profile</a>
                </li>
            </ul>
        </>
    );
}

export default Navbar;
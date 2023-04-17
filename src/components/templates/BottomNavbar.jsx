const BottomNavbar = () => {
    return (
        <>
            <ul className="underline">
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

export default BottomNavbar;
import { useState, useEffect } from "react";

const Speedometer = () => {
    const [location, setLocation] = useState({ latitude: '0', longitude: '0', speed: 0 });
    const [speed, setSpeed] = useState();

    const setPosition = (position) => {
        console.log(position)
        setLocation((item) => { return { latitude: position.coords.latitude, longitude: position.coords.longitude, speed: (position.coords.speed)*3.6 || 0 } })
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition);
        }
        else {
            return "Not supported for geolocation"
        }
    }

    useEffect(() => {
        const locationId = setInterval(getLocation, 300);
        return function cleanup() {
            clearInterval(locationId);
        };
    }, []);

    return (<>
        {location.speed.toFixed(2)}
    </>);
}

export default Speedometer;
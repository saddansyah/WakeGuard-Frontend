import { useEffect, useState } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const refreshClock = () => {
        setDate(new Date());

    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (<>
        <div className="clock mb-6 text-center">
            <h1 className="font-bold text-7xl text-white mx-auto">{date.toLocaleString('id-ID').split(',')[1]}</h1>
            <h4 className="text-2xl text-secondary mx-auto">{date.toLocaleString('id-ID').split(',')[0]}</h4>
        </div>
    </>);
}

export default Clock;
import { useEffect } from "react";

const DynamicTitle = ({children, title}) => {
    useEffect(() => {
        document.title = `Wakeguard - ${title || 'Page'}`;
    }, [title]);

    return children;
}

export default DynamicTitle;
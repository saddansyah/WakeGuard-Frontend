import { Skeleton } from "@mui/material";

const ContactLoading = () => {
    return (<>
        <div className="flex flex-col gap-3">
            <Skeleton variant="rounded" height={60} />
            <Skeleton variant="rounded" height={60} />
        </div>
    </>);
}

export default ContactLoading;
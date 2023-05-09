import { Skeleton } from "@mui/material";

const SkeletonLoading = () => {
    return (
        <>
        <div className="loader px-6 flex flex-col gap-6">
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular"  height={60} />
            <Skeleton variant="rounded" height={60} />
        </div>
        </>
    );b 
}

export default SkeletonLoading;
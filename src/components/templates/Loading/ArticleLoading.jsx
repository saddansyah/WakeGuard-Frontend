import { Skeleton } from "@mui/material";

const ArticleLoading = () => {
    return (
        <>
            <div className="flex flex-col gap-3 mb-3">
                <Skeleton variant="rounded" height={90} />
                <Skeleton variant="rounded" height={10} width={120} />
                <Skeleton variant="rounded" height={40} />
            </div>
            <div className="flex flex-col gap-3">
                <Skeleton variant="rounded" height={90} />
                <Skeleton variant="rounded" height={10} width={120} />
                <Skeleton variant="rounded" height={40} />
            </div>
        </>
    );
}

export default ArticleLoading;
import { Link } from "react-router-dom";
import { ButtonBase, Chip } from "@mui/material";

const ArticleCard = ({ article }) => {
    return (<>
        <div
            key={article.postId}
            className="card block text-sm w-full"
        >
            <div className="image relative self-start mb-4">
                <img
                    src={article.imageUrl}
                    alt="image here"
                    className="thumbnail w-full rounded-lg"
                />
            </div>
            <div className="tips-info flex flex-col justify-between gap-4">
                <div className="middle">
                    <div className="chips flex flex-row gap-2">
                        {article?.category?.map((category) => <div key={category.categoryId} className="py-1.5 px-2 text-xs bg-gray-200 rounded-full w-fit inline-block mb-2">{category.categoryName}</div>)}
                    </div>
                    <h3 className="font-bold text-black text-xl mb-2">{article.title}</h3>
                    <p className="text-gray-500">{article.excerpt}...</p>
                </div>
                <Link replace to={`/driving-tips/${article.id}`} className="w-fit">
                    <ButtonBase component="div">
                        <div className="cursor-pointer bg-accent text-white w-fit py-1.5 px-4 rounded-lg">Read More...</div>
                    </ButtonBase>
                </Link>
            </div>
        </div>
    </>);
}

export default ArticleCard;
const ArticleCard = ({ article }) => {
    return (<>
        <div
            key={article.post_id}
            className="card flex flex-col text-sm sm:flex-row"
        >
            <div className="image relative basis-2/3 ">
                <img
                    src={article.imageUrl}
                    alt="image here"
                    className="thumbnail mx-auto md:w-64 md:h-full rounded-xl"
                />
            </div>
            <div className="tips-info flex flex-col justify-between ">
                <div className="middle mx-2">
                    <h4 className="font-semibold text-black">{article.title}</h4>
                    <p className="">{article.body}</p>
                </div>
            </div>
        </div>
    </>);
}

export default ArticleCard;
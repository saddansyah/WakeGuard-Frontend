import { useNavigate, useParams } from "react-router";
import { ButtonBase } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";

// Markdown
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";


import { Navbar } from "@/utils/componentsLoader";
import useFetch from "@/hooks/useFetch";
import { useArticleContext } from "@/hooks/context/useArticleContext";
import { useDisplayContext } from "@/hooks/context/useDisplayContext";

const ArticleDetails = () => {
    const navigate = useNavigate();
    const { articles, dispatch } = useArticleContext();
    const { isPending, message, setLoading, setMessage } = useDisplayContext();

    const params = useParams();
    const baseUrl = import.meta.env.VITE_APP_DUMMY_URL

    useFetch({ url: baseUrl + `/articles/${params.postId}`, dispatch, type: 'get_article', setLoading, setMessage });

    return (<>
        <Navbar>
            <ButtonBase component="div" className="h-fit">
                <button onClick={() => navigate('/driving-tips')}>
                    <ArrowBack />
                </button>
            </ButtonBase>
        </Navbar>
        <div className="title mb-6">
            <h1 className="font-bold text-2xl text-primary mb-2">{articles.title}</h1>
            <p className="text-sm text-gray-400">Published at <span className="font-bold">{articles.createdAt}</span></p>
        </div>
        <img src={articles.imageUrl} alt={articles.id} className="rounded-lg mb-6" />
        <div className="chips flex flex-row gap-2 mb-4">
            {articles?.category?.map((category) => <div key={category.categoryId} className="py-1.5 px-2 text-xs bg-gray-200 rounded-full w-fit inline-block mb-2">{category.categoryName}</div>)}
        </div>
        <ReactMarkdown className="prose mb-20" rehypePlugins={[rehypeRaw]}>
            {articles.body}
        </ReactMarkdown>

    </>);
}

export default ArticleDetails;
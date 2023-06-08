import { useNavigate, useParams } from "react-router";
import { ButtonBase, Skeleton } from "@mui/material";
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
    const { article, dispatch } = useArticleContext();
    const { isPending, message, setLoading, setMessage } = useDisplayContext();
    console.log(article);
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
        {article[0] ?
            <>
                <Skeleton variant="rectangular" height={90} />
                <Skeleton variant="rectangular" height={20} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </> : ''
        }
        <div className="title mb-6">
            <h1 className="font-bold text-2xl text-primary mb-2">{article?.title}</h1>
            <p className="text-sm text-gray-400">Published at <span className="font-bold">{article?.createdAt?.split('T')[0]}</span></p>
        </div>
        <img src={article?.imageUrl} alt={article?.id} className="rounded-lg mb-6" />
        <div className="chips flex flex-row gap-2 mb-4">
            {article?.category?.map((category, id) => <div key={id} className="py-1.5 px-2 text-xs bg-gray-200 rounded-full w-fit inline-block mb-2">{category}</div>)}
        </div>
        <ReactMarkdown className="prose mb-20" rehypePlugins={[rehypeRaw]}>
            {article?.body}
        </ReactMarkdown>

    </>);
}

export default ArticleDetails;
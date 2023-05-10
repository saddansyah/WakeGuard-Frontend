import Menu from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

import { Navbar, SearchBar, ArticleLoading, ArticleCard, NoArticleCard } from "@/utils/componentsLoader";
import useFetch from "@/hooks/useFetch";
import { useArticleContext } from "@/hooks/context/useArticleContext";
import { useDisplayContext } from "@/hooks/context/useDisplayContext";

const DrivingTips = () => {

  const url = import.meta.env.VITE_APP_DUMMY_URL + '/articles';
  const { articles, dispatch } = useArticleContext();
  const { isPending, message, setLoading, setMessage } = useDisplayContext();

  useFetch({ url, dispatch, type: 'get_articles', setLoading, setMessage });


  return (
    <>
      <Navbar>
        <Avatar>WG</Avatar>
        <SearchBar placeholder={'Search article..'} />
      </Navbar>
      <h1 className="font-bold text-2xl text-primary mb-6">Driving Tips</h1>

      <div className="wrapper mb-20">
        <div className="cards grid gap-2">
          {!articles.length && (isPending ? <ArticleLoading /> : <NoArticleCard/>)}
          {articles[0] && articles?.map((article, id) => <ArticleCard key={id} article={article} />)}
        </div>
      </div>
    </>
  );
};

export default DrivingTips;

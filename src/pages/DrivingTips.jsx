import Menu from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

import { Navbar, SearchBar, ArticleLoading, ArticleCard, NoArticleCard, SelectCategories } from "@/utils/componentsLoader";
import useFetch from "@/hooks/useFetch";
import { useArticleContext } from "@/hooks/context/useArticleContext";
import { useDisplayContext } from "@/hooks/context/useDisplayContext";
import { useAuthContext } from "@/hooks/context/useAuthContext";

const DrivingTips = () => {

  const baseUrl = import.meta.env.VITE_APP_DUMMY_URL;
  const { articles, dispatch } = useArticleContext();
  const { user } = useAuthContext();
  const { isPending, message, setLoading, setMessage } = useDisplayContext();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = articles?.map(article => article.category)

  useFetch({ url: baseUrl + '/articles', dispatch, type: 'get_articles', setLoading, setMessage });

  // Searching
  const [searchText, setSearchText] = useState('')
  const [filteredArticles, setFilteredArticles] = useState([]);
  useEffect(() => setFilteredArticles(articles), [articles])

  const filter = (value) => {
    const filtered = articles?.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) || item.excerpt.toLowerCase().includes(value.toLowerCase())
    );

    filtered[0] ? setFilteredArticles(filtered) : setFilteredArticles([]);
  }

  return (
    <>
      <Navbar>
        <img src={user && user?.photoURL} style={{ width:'3em', height:'3em', borderRadius: 1000 }} alt="user profile" />
        <SearchBar
          placeholder={'Search articles..'}
          searchText={searchText}
          setSearchText={setSearchText}
          filter={filter}
        />
      </Navbar>
      <h1 className="font-bold text-2xl text-primary mb-6">Driving Tips</h1>
      <SelectCategories categories={selectedCategories} setCategories={setSelectedCategories} />
      <div className="wrapper mb-20">
        <div className="cards grid gap-2">
          {!filteredArticles?.length && (isPending ? <ArticleLoading /> : <NoArticleCard />)}
          {filteredArticles?.map((article, id) => <ArticleCard key={article._id} article={article} />)}
        </div>
      </div>
    </>
  );
};

export default DrivingTips;

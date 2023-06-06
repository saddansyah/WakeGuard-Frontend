import Menu from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

import { Navbar, SearchBar, ArticleLoading, ArticleCard, NoArticleCard, SelectCategories } from "@/utils/componentsLoader";
import useFetch from "@/hooks/useFetch";
import { useArticleContext } from "@/hooks/context/useArticleContext";
import { useDisplayContext } from "@/hooks/context/useDisplayContext";

const DrivingTips = () => {

  const baseUrl = import.meta.env.VITE_APP_DUMMY_URL;
  const { articles, dispatch } = useArticleContext();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = articles?.map(article => article.category)
  const { isPending, message, setLoading, setMessage } = useDisplayContext();

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

  console.log(categories)
  return (
    <>
      <Navbar>
        <Avatar>WG</Avatar>
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
          {!filteredArticles.length && (isPending ? <ArticleLoading /> : <NoArticleCard />)}
          {filteredArticles[0] && filteredArticles?.map((article, id) => <ArticleCard key={article._id} article={article} />)}
        </div>
      </div>
    </>
  );
};

export default DrivingTips;

import Menu from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

import { Navbar, SearchBar, ArticleLoading, ArticleCard, NoArticleCard, SelectCategories } from "@/utils/componentsLoader";
import useFetch from "@/hooks/useFetch";
import { useArticleContext } from "@/hooks/context/useArticleContext";
import { useDisplayContext } from "@/hooks/context/useDisplayContext";
import useGetCategories from "@/hooks/useGetCategories";

const DrivingTips = () => {

  const baseUrl = import.meta.env.VITE_APP_DUMMY_URL;
  const { articles, dispatch } = useArticleContext();
  const [categories, setCategories] = useState([]);
  const { isPending, message, setLoading, setMessage } = useDisplayContext();

  useFetch({ url: baseUrl + '/articles', dispatch, type: 'get_articles', setLoading, setMessage });
  useGetCategories({ setCategories, setLoading, setMessage });

  // Searching
  const [searchText, setSearchText] = useState('')
  const [filteredArticles, setFilteredArticles] = useState([]);
  useEffect(() => setFilteredArticles(articles), [articles])

  const filter = (value) => {
    const filtered = articles?.filter((item) =>
      item.attributes.title.toLowerCase().includes(value.toLowerCase()) || item.attributes.excerpt.toLowerCase().includes(value.toLowerCase())
    );

    filtered[0]? setFilteredArticles(filtered) : setFilteredArticles([]);
  }

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
      <SelectCategories categories={categories} setCategories={setCategories} />
      <div className="wrapper mb-20">
        <div className="cards grid gap-2">
          {!filteredArticles.length && (isPending ? <ArticleLoading /> : <NoArticleCard />)}
          {filteredArticles[0] && filteredArticles?.map((article, id) => <ArticleCard key={id} article={article} />)}
        </div>
      </div>
    </>
  );
};

export default DrivingTips;

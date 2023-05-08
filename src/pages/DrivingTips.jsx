import Menu from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

import { Navbar, SearchBar } from "@/utils/componentsLoader";
import useFetch from "@/hooks/useFetch";
import { useArticleContext } from "@/hooks/context/useArticleContext";

const DrivingTips = () => {

  const url = import.meta.env.VITE_APP_DUMMY_URL + '/articles';
  const { articles, dispatch } = useArticleContext();

  useFetch({ url, dispatch, type: 'get_articles' });

  return (
    <>
      <Navbar>
        <Avatar>WG</Avatar>
        <SearchBar placeholder={'Search article..'} />
      </Navbar>
      <h1 className="font-bold text-2xl text-primary mb-6">Driving Tips</h1>

      <div className="wrapper mb-20">
        <div className="cards grid gap-2">
          {articles &&
            articles.map((item) => (
              <div
                key={item.headline}
                className="card flex flex-col text-sm sm:flex-row"
              >
                <div className="image relative basis-2/3 ">
                  <img
                    src={item.image_url}
                    alt="image here"
                    className="thumbnail mx-auto md:w-64 md:h-full rounded-xl"
                  />
                </div>
                <div className="tips-info flex flex-col justify-between ">
                  <div className="middle mx-2">
                    <h4 className="font-semibold text-black">{item.headline}</h4>
                    <p className="">{item.teks}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DrivingTips;

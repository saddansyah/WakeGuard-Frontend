import Menu from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { Navbar, SearchBar } from "@/utils/componentsLoader";

import driver1 from "../assets/driver1.png";
import driver2 from "../assets/driver2.jpg";

const dummyTips = [
  {
    image: driver1,
    headline: "Cara Tidur",
    teks: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    image: driver2,
    headline: "Cara Makan",
    teks: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
const DrivingTips = () => {
  return (
    <>
      <Navbar>
        <Avatar>WG</Avatar>
        <SearchBar placeholder={'Search article..'}/>
      </Navbar>
      <h1 className="font-bold text-2xl text-primary mb-6">Driving Tips</h1>

      <div className="wrapper mb-20">
        <div className="cards grid gap-2">
          {dummyTips &&
            dummyTips.map((item) => (
              <div
                key={item.headline}
                className="card flex flex-col text-sm sm:flex-row"
              >
                <div className="image relative basis-2/3 ">
                  <img
                    src={item.image}
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

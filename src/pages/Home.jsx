// MUI Icons
import Menu from "@mui/icons-material/Menu";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import { ReactComponent as CarIcon } from "../assets/car_illustration.svg";
import CarIcon from "@/assets/car_illustration.svg";

// MUI Components
import Avatar from "@mui/material/Avatar";

// Component Loader
import { Navbar, ContactCard, ContactLoading, NoContactCard, ArticleCard, ArticleLoading, NoArticleCard } from "@/utils/componentsLoader";
import { Link } from "react-router-dom";

// Hooks
import useFetch from "@/hooks/useFetch";
import { useContactContext } from "@/hooks/context/useContactContext";
import { useDisplayContext } from "@/hooks/context/useDisplayContext";
import { useArticleContext } from "@/hooks/context/useArticleContext";
import { useAuthContext } from '@/hooks/context/useAuthContext';


const Home = () => {
    const { user } = useAuthContext();
    const baseUrl = import.meta.env.VITE_APP_DUMMY_URL

    const { contacts, dispatch: dispatchContact } = useContactContext();
    const { articles, dispatch: dispatchArticle } = useArticleContext();
    const { isPending, message, setLoading, setMessage } = useDisplayContext();

    useFetch({ url: baseUrl + '/contacts', dispatch: dispatchContact, type: 'get_contacts', setLoading, setMessage });
    useFetch({ url: baseUrl + '/articles', dispatch: dispatchArticle, type: 'get_articles', setLoading, setMessage });

    return (
        <>
            <Navbar>
                <img src={user && user?.photoURL} style={{ width: '3em', height: '3em', borderRadius: 1000 }} alt="user profile" />
                <Menu />
            </Navbar>
            <div className="head-title mb-12 text-accent">
                <h1 className="font-bold text-2xl ">Hello, {user?.displayName}</h1>
                <p className="font-light text-gray-500">as User</p>
            </div>

            <div className="driving-mode mb-6">
                <h2 className="font-bold mb-2">Go To Driving Mode</h2>
                <div className="card p-0 flex flex-row justify-between w-full h-28">
                    <div className="w-60 bg-no-repeat bg-cover bg-left relative " style={{ backgroundImage: `url(${CarIcon})` }}></div>
                    <div className="p-4 content-right basis-1/3 flex items-center justify-center h-full">
                        <div className=" flex flex-col items-center">
                            <Link to={'/driving-mode'}>
                                <div className='bg-accent text-white w-fit p-2 rounded-full'>
                                    <DirectionsCarIcon />
                                </div>
                            </Link>
                            <p className=" text-accent text-center text-xs">Launch Driving Mode</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="one-tap-call mb-6">
                <h2 className="font-bold mb-2">One-tap Call</h2>
                <div className="cards grid grid-cols-1 gap-2">
                    {!contacts?.length && (isPending ? <ContactLoading /> : <NoContactCard />)}
                    {contacts?.map((contact, id) => contact.isPinned && <ContactCard key={contact._id} contact={contact} />)}
                </div>
            </div>

            <div className="recent-tips mb-20">
                <h2 className="font-bold mb-2">Recent Driving Tips</h2>
                {!articles?.length && (isPending ? <ArticleLoading /> : <NoArticleCard />)}
                {articles?.map((article, id) => <ArticleCard key={article._id} article={article} />)[0]}
            </div>
        </>
    );
}

export default Home;
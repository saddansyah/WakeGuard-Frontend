// Base Layout for entire app: include mobile padding
import BaseLayout from "@/layouts/BaseLayout";

// Layout for main layout (login register are excluded): navbar
import App from "@/App";

// Main view of each pages
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Home from "@/pages/Home";
import DrivingMode from "@/pages/DrivingMode";
import DrivingModeStart from "@/pages/DrivingModeStart";
import DrivingTips from "@/pages/DrivingTips";
import Emergency from "@/pages/Emergency";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";
import ArticleDetails from "@/pages/ArticleDetails";


export {
    App,
    NotFound,
    BaseLayout,
    Login,
    Register,
    Home,
    DrivingMode,
    DrivingModeStart,
    DrivingTips,
    Emergency,
    Profile,
    ArticleDetails
}
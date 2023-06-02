import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from "react-router-dom";

// User-defined
import {
  App,
  NotFound,
  BaseLayout,
  Login,
  Register,
  Home,
  DrivingMode,
  DrivingTips,
  Emergency,
  Profile,
  ArticleDetails
} from '@/utils/pagesLoader';

import DynamicTitle from "@/utils/dynamicTitle";

const isLoggedIn = () => {

  // Auth logic...

  return false;
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<BaseLayout />}>
    <Route exact path='/' element={isLoggedIn() ? <App /> : <Navigate to='auth/login' replace />}>
      <Route path='/' element={<DynamicTitle title="Home"><Home /></DynamicTitle>} />
      <Route path='/driving-mode' element={<DynamicTitle title="Driving Mode"><DrivingMode /></DynamicTitle>} />
      <Route path='/emergency' element={<DynamicTitle title="Emergency"><Emergency /></DynamicTitle>} />
      <Route path='/driving-tips' element={<DynamicTitle title="Driving Tips"><DrivingTips /></DynamicTitle>} />
      <Route path='/driving-tips/:postId' element={<DynamicTitle title="Driving Tips"><ArticleDetails /></DynamicTitle>} />
      <Route path='/profile' element={<DynamicTitle title="Profile"><Profile /></DynamicTitle>} />
      <Route path='*' element={<DynamicTitle title="404 Not Found"><NotFound /></DynamicTitle>} />
    </Route>
    <Route exact path='auth' element={isLoggedIn() ? <Navigate to='/' replace /> : <Login />}>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>
  </Route >
))

export {
  isLoggedIn,
  router
}



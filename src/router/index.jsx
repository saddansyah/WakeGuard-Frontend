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
    Profile
  } from '@/utils/pagesLoader';

  const isLoggedIn = () => {

    // Auth logic...
    
    return true;
  }
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<BaseLayout/>}>
      <Route exact path='/' element={isLoggedIn() ? <App/> : <Navigate to='auth/login' replace />}>
        <Route path='/' element={<Home/>} />
        <Route path='/driving-mode' element={<DrivingMode/>} />
        <Route path='/emergency' element={<Emergency/>} />
        <Route path='/driving-tips' element={<DrivingTips/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
      <Route exact path='auth' element={isLoggedIn() ? <Navigate to='/' replace/> : <Login/>}>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Route>
    </Route >
  ))

  export {
    isLoggedIn,
    router
  }



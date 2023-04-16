import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import { App, NotFound } from '@/utils/pagesLoader';
import { SkeletonLoading } from '@/utils/componentsLoader';
import './index.css'

// check serviceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js') // async
    .then((reg) => console.log('serviceWorker is registered'))
    .catch((err) => console.error(err))
}

// router
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route path='/' element={<App/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<SkeletonLoading/>} />
  </React.StrictMode>,
)

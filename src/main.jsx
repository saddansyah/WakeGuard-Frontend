import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";

// User-defined module import
import { router } from './router';
import '@/utils/pagesLoader'; // need to be explicitly imported
import { SkeletonLoading } from '@/utils/componentsLoader';

import './index.css'

// Service Workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js') // async
    .then((reg) => console.log('serviceWorker is registered'))
    .catch((err) => console.error(err))
}

// Context Provider
import ArticleContextProvider from '@/contexts/ArticleContext';
import ContactContextProvider from '@/contexts/ContactContext';


// Init
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactContextProvider>
      <ArticleContextProvider>
        <RouterProvider router={router} fallbackElement={<SkeletonLoading />} />
      </ArticleContextProvider>
    </ContactContextProvider>
  </React.StrictMode>
)

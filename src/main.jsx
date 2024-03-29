import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import { AnimatePresence } from "framer-motion";

// User-defined module import
import { router } from './router';
import '@/utils/pagesLoader'; // need to be explicitly imported
import { SkeletonLoading } from '@/utils/componentsLoader';

import './index.css'

// Context Provider
import ArticleContextProvider from '@/contexts/ArticleContext';
import ContactContextProvider from '@/contexts/ContactContext';
import DisplayContextProvider from '@/contexts/DisplayContext';
import AuthContextProvider from '@/contexts/AuthContext';


// MUI Default Font
const theme = createTheme({
  typography: {
    "fontFamily": `"Nunito", sans-serif`,
  }
});


// Init
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DisplayContextProvider>
        <ContactContextProvider>
          <ArticleContextProvider>
            <AnimatePresence>
              <ThemeProvider theme={theme}>
                <RouterProvider router={router} fallbackElement={<SkeletonLoading />} />
              </ThemeProvider>
            </AnimatePresence>
          </ArticleContextProvider>
        </ContactContextProvider>
      </DisplayContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)

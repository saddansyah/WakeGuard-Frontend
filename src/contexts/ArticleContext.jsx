import { createContext, useReducer } from "react";

export const ArticleContext = createContext();

export const articleReducer = (state, action) => {
    switch (action.type) {
        case 'get_articles':
            return {
                articles: action.payload.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by datetime
            }
        case 'added_article':
            return {
                articles: [action.payload, ...state.article]
            }
        case 'changed_article':
            return {
                articles: state.article.map((item) => {return item._id !== action.payload._id ? item : action.payload}).sort((a, b) => {return Number(b.isPinned) - Number(a.isPinned)})
            }
        case 'deleted_article':
            return {
                articles: state.article.filter((item) => { return item._id !== action.payload._id })
            }
        default:
            return state
    }
}

const ArticleContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(articleReducer, {
        articles: []
    });

    return (
        <ArticleContext.Provider value={{ ...state, dispatch}}>
            {children}
        </ArticleContext.Provider>
    );
}

export default ArticleContextProvider;
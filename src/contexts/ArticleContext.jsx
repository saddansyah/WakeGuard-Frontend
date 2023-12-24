import { createContext, useReducer } from "react";

export const ArticleContext = createContext();

export const articleReducer = (state, action) => {
    switch (action.type) {
        case 'get_articles':
            return {
                articles: action.payload?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)), // Sort by datetime
                article: state.article
            }
        case 'get_article':
            return {
                articles: [...state.articles],
                article: action.payload
            }
        case 'added_article':
            return {
                articles: [action.payload, ...state.articles],
                article: state.article
            }
        case 'changed_article':
            return {
                articles: state.articles?.map((item) => { return item.id !== action.payload.id ? item : action.payload }).sort((a, b) => { return Number(b.isPinned) - Number(a.isPinned) }),
                article: state.article
            }
        case 'deleted_article':
            return {
                articles: state.articles?.filter((item) => { return item.id !== action.payload.id }),
                article: state.article
            }
        default:
            return state
    }
}

const ArticleContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(articleReducer, {
        articles: [],
        article: ''
    });

    return (
        <ArticleContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ArticleContext.Provider>
    );
}

export default ArticleContextProvider;
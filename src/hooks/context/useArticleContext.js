import { useContext } from "react";
import { ArticleContext } from "@/contexts/ArticleContext";

export const useArticleContext = () => {
    const context = useContext(ArticleContext);

    if (!context) {
        throw Error('Something bad occured on article context 😟')
    };

    return context;
}
import { useContext } from "react";
import { ContactContext } from "@/contexts/ContactContext";

export const useContactContext = () => {
    const context = useContext(ContactContext);

    if (!context) {
        throw Error('Something bad occured on contact context 😟')
    };

    return context;
}
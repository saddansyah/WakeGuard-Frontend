import { createContext, useReducer } from "react";

export const ContactContext = createContext();

export const contactReducer = (state, action) => {
    switch (action.type) {
        case 'get_contacts':
            return {
                contacts: action.payload
            }
        case 'added_contact':
            return {
                contacts: [...action.payload, ...state.contacts]
            }
        case 'changed_contact':
            return {
                contacts: state.contacts.map((item) => {return item._id !== action.payload._id ? item : action.payload}).sort((a, b) => {return Number(b.isPinned) - Number(a.isPinned)})
            }
        case 'deleted_contact':
            return {
                contacts: state.contacts.filter((item) => { return item._id !== action.payload._id })
            }
        default:
            return state
    }
}

const ContactContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactReducer, {
        contacts: []
    });

    return (
        <ContactContext.Provider value={{ ...state, dispatch}}>
            {children}
        </ContactContext.Provider>
    );
}

export default ContactContextProvider;
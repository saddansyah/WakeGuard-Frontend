import { createContext, useReducer, useEffect } from "react";
import { auth, signInWithGoogle, firebase, signOut } from "@/services/firebase";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return state
    }
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                sessionStorage.setItem("user", JSON.stringify(user));
                dispatch({ type: 'LOGIN', payload: user });
                window.location.replace('');
            }
            else{
                sessionStorage.removeItem("user");
                dispatch({ type: 'LOGOUT', payload: null });
            }
        });
    }, []);

    const login = () => {
        return signInWithGoogle();
    };

    const logout = () => {
        return signOut();
    };

    return (
        <AuthContext.Provider value={{ ...state, dispatch, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
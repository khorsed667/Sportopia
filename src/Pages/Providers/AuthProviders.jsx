import { createContext, useState } from "react";


const authContext = createContext();

const AuthProviders = ({children}) => {

    const [user, setUser] =  useState(null)
    const [loading, setLoading] =useState(true)

    const authInfo = {
        user,
        loading
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProviders;
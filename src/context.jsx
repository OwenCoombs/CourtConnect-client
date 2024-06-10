import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const currentToken = JSON.parse(localStorage.getItem("accessToken"));
    const currentProfile = JSON.parse(localStorage.getItem("profile"));

    const [accessToken, setAccessToken] = useState(currentToken || "");
    const [profile, setProfile] = useState(currentProfile || "");

    useEffect(() => {
        console.log("THE ACCESS TOKEN", accessToken)
        localStorage.setItem("accessToken", JSON.stringify(accessToken));
    }, [accessToken]);

    useEffect(() => {
       console.log("THE PROFILE", profile)
       localStorage.setItem("profile", JSON.stringify(profile));
    }, [profile]);
    
    const auth = { accessToken, setAccessToken }
    const liveProfile = {profile, setProfile}

    return (
        <Context.Provider value={{auth, liveProfile}}>
            {children}
        </Context.Provider>
    );
};


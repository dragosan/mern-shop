import React,{createContext} from 'react';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

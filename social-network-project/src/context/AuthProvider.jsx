import React, { createContext, useState, useEffect } from 'react';
import { Global } from '../helpers/Global';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});

    useEffect(() => {
        authUser();
    }, []);

    const authUser = async () => {
        //Sacar datos de usuario identificado del local storage
        const token = localStorage.getItem('token',);
        const user = localStorage.getItem('user');

        //Comprobar si tengo el token y el user
        if(!token || !user){
            return false
        };

        //Transformar los datos a un objeto js
        const userObj = JSON.parse(user);
        const userId = userObj.id;

        //Peticion AJAX al backend que compruebe el token y devuelva todos los estados del usuario
        const request = await fetch(Global.url + 'user/profile/' + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            }
        });

        const data = await request.json();

        //Setear el estado de Auth
        setAuth(data.user);

    };

  return (
        <AuthContext.Provider value={{
            auth,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
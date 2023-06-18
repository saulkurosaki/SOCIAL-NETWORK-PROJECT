import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const Logout = () => {

    const navigate = useNavigate();
    const {setAuth, setCounters} = useAuth();

    useEffect(() => {
        //Vaciar el local storage
        localStorage.clear();

        //Setear estados globales al vacio
        setAuth({});
        setCounters({});

        //Navigate al Login
        navigate('/login');
    }, []);

  return (
    <h1>Cerrando Sesión...</h1>
  )
}

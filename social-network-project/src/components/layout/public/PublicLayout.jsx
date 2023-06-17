import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Header } from './Header';
import useAuth from '../../../hooks/useAuth';

export const PublicLayout = () => {

  const {auth} = useAuth();

  return (
    <>
        {/* Layout */}
        <Header />

        {/* Contenido Principal */}
        <section className='layout_content'>
          {!auth._id ? <Outlet /> : <Navigate to='/social'/>}
        </section>

    </>
  )
}

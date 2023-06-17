import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { SideBar } from './SideBar';

export const PrivateLayout = () => {
  return (
    <>
        {/* Cabecera y Navegación */}
        <Header />

        {/* Contenido Principal */}
        <section className='layout_content'>
            <Outlet />
        </section>

        {/* Barra Lateral */}
        <SideBar />

    </>
  )
}

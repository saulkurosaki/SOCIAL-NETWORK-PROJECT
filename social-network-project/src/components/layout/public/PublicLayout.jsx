import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const PublicLayout = () => {
  return (
    <>
        {/* Layout */}
        <Header />

        {/* Contenido Principal */}
        <section className='layout_content'>
            <Outlet />
        </section>

    </>
  )
}

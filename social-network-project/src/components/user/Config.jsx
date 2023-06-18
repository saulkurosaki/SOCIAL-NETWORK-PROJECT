import React, { useState } from 'react'

export const Config = () => {

    const [saved, setSaved] = useState('not_saved');

    const updateUser = (e) => {
        e.preventDefault();


    };

    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Configuración</h1>
            </header>

            <div className='content_posts'>
                {saved == 'saved'
                    ? <strong className='alert alert-success'>Usuario registrado correctamente</strong>
                    : null}
                {saved == 'error'
                    ? <strong className='alert alert-danger'>Usuario no registrado</strong>
                    : null}

                <form className='config-form' onSubmit={updateUser}>

                    <div className='form-group'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' name='name' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='surname'>Apellidos</label>
                        <input type='text' name='surname' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='nick'>Nickname</label>
                        <input type='text' name='nick' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Correo Electrónico</label>
                        <input type='email' name='email' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' name='password' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='file0'>Avatar</label>
                        <div className='avatar'>
                            {/* Mostrar Imagen */}
                        </div>
                        <input type="file" name="file0" id="file" />
                    </div>
                    <br/>

                    <input type='submit' value='Regístrate' className='btn btn-success' />

                </form>
            </div>
        </>
    )
}

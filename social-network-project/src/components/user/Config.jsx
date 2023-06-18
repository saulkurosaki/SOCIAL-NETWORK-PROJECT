import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Global } from '../../helpers/Global';
import { SerializeForm } from '../../helpers/SerializeForm';

export const Config = () => {

    const {auth, setAuth} = useAuth();

    const [saved, setSaved] = useState('not_saved');

    const updateUser = async (e) => {
        e.preventDefault();

        //Recoger datos del formulario
        let newDataUser = SerializeForm(e.target);

        //Borrar propiedad innecesaria
        delete newDataUser.file0;

        //Actualizar usuario en la base de datos
        const request = await fetch(Global.url + 'user/update', {
            method: 'PUT',
            body: JSON.stringify(newDataUser),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            },
        })
        const data = await request.json();

        if(data.status == 'success'){
            delete data.user.password;

            setAuth(data.user);
            setSaved('saved');

            console.log(auth);
        }else{
            setSaved('error');
        };

    };

    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Configuración</h1>
            </header>

            <div className='content_posts'>
                {saved == 'saved'
                    ? <strong className='alert alert-success'>Usuario actualizado correctamente</strong>
                    : null}
                {saved == 'error'
                    ? <strong className='alert alert-danger'>El usuario no se ha actualizado</strong>
                    : null}

                <form className='config-form' onSubmit={updateUser}>

                    <div className='form-group'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' name='name' defaultValue={auth.name}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='surname'>Apellidos</label>
                        <input type='text' name='surname' defaultValue={auth.surname}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='nick'>Nickname</label>
                        <input type='text' name='nick' defaultValue={auth.nick}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='bio'>Bio</label>
                        <textarea name='bio' defaultValue={auth.bio}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Correo Electrónico</label>
                        <input type='email' name='email' defaultValue={auth.email}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' name='password' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='file0'>Avatar</label>
                        <div className="general-info__container-avatar">
                            {auth.image != 'default.png' && <img src={Global.url + 'user/avatar/' + auth.image} className="container-avatar__img" alt="Foto de perfil"/>}
                            {auth.image == 'default.png' && <img src={avatar} className="container-avatar__img" alt="Foto de perfil"/>}
                        </div>
                        <br/>
                        <input type="file" name="file0" id="file" />
                    </div>
                    <br/>

                    <input type='submit' value='Actualizar' className='btn btn-success' />

                </form>
            </div>
        </>
    )
}

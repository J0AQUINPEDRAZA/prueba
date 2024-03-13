'use client'
import useLogin from '@/utils/hooks/useLogin'
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Login = () => {
  const handler = useLogin()
  return (
    <section className='w-screen h-screen flex items-center justify-center flex-col gap-10 px-5'>
      <img
        src='https://wayclo.com.ar/wp-content/uploads/2023/10/wayclo-logo.png'
        alt='logo Wayclo'
      />
      <form
        action=''
        className='flex flex-col w-full max-w-[450px] gap-8 p-5 sm:p-10 bg-blackCards rounded-lg'
        onSubmit={handler.submitLogin}
      >
        <h2 className='text-2xl mb-5'>Inicio de sesión</h2>
        <label htmlFor='' className='flex flex-col gap-2'>
          <small>Nombre</small>
          <input
            name='userName'
            type='text'
            className='w-full outline-none rounded-lg h-[35px] bg-greyGround px-4'
            placeholder=''
            required
          />
        </label>
        <label htmlFor='' className='flex flex-col gap-2'>
          <small>Contraseña</small>
          <input
            name='password'
            type='password'
            className='w-full outline-none rounded-lg h-[35px] bg-greyGround px-4'
            placeholder=''
            required
          />
        </label>
        <label className='flex items-center gap-2'>
          <input type='checkbox' name='session' id='' />
          <small>Mantener sesión activa</small>
        </label>
        <input
          type='submit'
          value='Acceder'
          className='border-2 border-greyGround  transition ease-in-out delay-150 w-fit self-center px-4 py-2 rounded-lg hover:bg-grey-500 hover:cursor-pointer'
        />
      </form>
    </section>
  )
}

export default Login

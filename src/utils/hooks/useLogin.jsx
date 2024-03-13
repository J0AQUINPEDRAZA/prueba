import React from 'react'

const useLogin = () => {
  const submitLogin = (e) => {
    e.preventDefault()
    const userData = Object.fromEntries(new FormData(e.currentTarget))
    localStorage.setItem('remember', userData?.session)
  }
  return { submitLogin }
}
export default useLogin

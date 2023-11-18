import { StyleGlobal } from './style/AppStyle'
import { AppRoutes } from './routes'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from './store/actions/creators/users'

function App() {
  const dispatch = useDispatch()

  if (localStorage.getItem('user')) {
    dispatch(setUserData(JSON.parse(localStorage.getItem('user'))))
  }

  return (
    <>
      <StyleGlobal />
      <AppRoutes />
    </>
  )
}

export default App

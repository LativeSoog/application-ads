import { StyleGlobal } from './style/AppStyle'
import { AppRoutes } from './routes'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState('')

  return (
    <>
      <StyleGlobal />
      <AppRoutes setUser={setUser} user={user} />
    </>
  )
}

export default App

import { StyleGlobal } from './style/AppStyle'
import { AppRoutes } from './routes'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(false)

  return (
    <>
      <StyleGlobal />
      <AppRoutes setUser={setUser} user={user} />
    </>
  )
}

export default App

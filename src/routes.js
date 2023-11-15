import { Route, Routes } from 'react-router-dom'
import { MainPage } from './page/Main/MainPage'
import { PageLayout } from './components/PageLayout/PageLayout'
import { ProfilePage } from './page/Profile/ProfilePage'
import { AdvertPage } from './page/Advert/AdvertPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/advert" element={<AdvertPage />} />
      </Route>
    </Routes>
  )
}

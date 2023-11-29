import { Route, Routes } from 'react-router-dom'
import { MainPage } from './page/Main/MainPage'
import { PageLayout } from './components/PageLayout/PageLayout'
import { ProfilePage } from './page/Profile/ProfilePage'
import { AdvertPage } from './page/Advert/AdvertPage'
import { ProfileSellerPage } from './page/Profile-Seller/ProfileSellerPage'
import { MyAdvertPage } from './page/My-Advert/MyAdvertPage'
import { NotFound } from './page/NotFound/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route index element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-seller/:id" element={<ProfileSellerPage />} />
        <Route path="/advert/:id" element={<AdvertPage />} />
        <Route path="/my-advert" element={<MyAdvertPage />} />
      </Route>
    </Routes>
  )
}

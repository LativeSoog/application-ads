import { Outlet } from 'react-router-dom'
import * as S from './style'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const PageLayout = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Header />

        <Outlet />

        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

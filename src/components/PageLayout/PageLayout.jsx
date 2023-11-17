import { Outlet } from 'react-router-dom'
import * as S from './style'
import { Header } from '../Header/Header'

export const PageLayout = ({ setUser, user }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <Header setUser={setUser} user={user} />

        <Outlet />
      </S.Container>
    </S.Wrapper>
  )
}

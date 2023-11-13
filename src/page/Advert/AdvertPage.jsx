import * as S from './style'

export const AdvertPage = () => {
  return (
    <>
      <S.MainContainer>
        <S.MainMenu>
          <S.MainMenuLogoLink to={'/'}>
            <S.MainMenuLogoImg src="/img/logo.png" />
          </S.MainMenuLogoLink>
          <S.MainMenuForm>
            <S.MainMenuFormBtnLink to={'/'}>
              <S.MainMenuFormBtn>Вернуться на&nbsp;главную</S.MainMenuFormBtn>
            </S.MainMenuFormBtnLink>
          </S.MainMenuForm>
        </S.MainMenu>
      </S.MainContainer>

      <S.MainAdvert>
        <S.AdvertContent>
          <S.AdvertLeft>
            <S.AdvertLeftFillImg>
              <S.AdvertLeftImgBlock>
                <S.AdvertLeftImgBlockImage />
              </S.AdvertLeftImgBlock>

              <S.AdvertImgBar>
                <S.AdvertImgBarDiv>
                  <S.AdvertImgBarImage />
                </S.AdvertImgBarDiv>

                <S.AdvertImgBarDiv>
                  <S.AdvertImgBarImage />
                </S.AdvertImgBarDiv>

                <S.AdvertImgBarDiv>
                  <S.AdvertImgBarImage />
                </S.AdvertImgBarDiv>

                <S.AdvertImgBarDiv>
                  <S.AdvertImgBarImage />
                </S.AdvertImgBarDiv>

                <S.AdvertImgBarDiv>
                  <S.AdvertImgBarImage />
                </S.AdvertImgBarDiv>

                <S.AdvertImgBarDiv>
                  <S.AdvertImgBarImage />
                </S.AdvertImgBarDiv>
              </S.AdvertImgBar>
            </S.AdvertLeftFillImg>
          </S.AdvertLeft>

          <S.AdvertRight>
            <S.AdvertRightBlock>
              <S.AdvertRightBlockTitle>
                Ракетка для большого тениса Triumph Pro STC
              </S.AdvertRightBlockTitle>
              <S.AdvertRightBlockInfo>
                <S.AdvertRightBlockInfoItem $color="#5F5F5F">
                  Сегодня в 10:45
                </S.AdvertRightBlockInfoItem>
                <S.AdvertRightBlockInfoItem $color="#5F5F5F">
                  Санкт-Петеребург
                </S.AdvertRightBlockInfoItem>
                <S.AdvertRightBlockInfoLink>
                  <S.AdvertRightBlockInfoItem $color="#009EE4">
                    23 отзыва
                  </S.AdvertRightBlockInfoItem>
                </S.AdvertRightBlockInfoLink>
              </S.AdvertRightBlockInfo>

              <S.AdvertRightBlockPrice>2 200₽</S.AdvertRightBlockPrice>

              <S.AdvertRightBlockBtn>
                Показать&nbsp;телефон
                <S.AdvertRightBlockBtnSpan>
                  8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                </S.AdvertRightBlockBtnSpan>
              </S.AdvertRightBlockBtn>

              <S.AdvertRightBlockAuthor>
                <S.AdvertRightBlockAuthorImgBlock>
                  <S.AdvertRightBlockAuthorImgBlockImage />
                </S.AdvertRightBlockAuthorImgBlock>

                <S.AdvertRightBlockAuthorContact>
                  <S.AdvertRightBlockAuthorContactName>
                    Кирилл
                  </S.AdvertRightBlockAuthorContactName>
                  <S.AdvertRightBlockAuthorContactAbout>
                    Продает товары с августа 2021
                  </S.AdvertRightBlockAuthorContactAbout>
                </S.AdvertRightBlockAuthorContact>
              </S.AdvertRightBlockAuthor>
            </S.AdvertRightBlock>
          </S.AdvertRight>
        </S.AdvertContent>
      </S.MainAdvert>

      <S.MainContainer>
        <S.MainTitle>Описание товара</S.MainTitle>

        <S.MainContent>
          <S.MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </S.MainText>
        </S.MainContent>
      </S.MainContainer>
    </>
  )
}

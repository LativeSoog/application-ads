import { useDispatch, useSelector } from 'react-redux'
import { CardItem } from '../../components/CardItem/CardItem'
import { useGetAllAdvertsQuery } from '../../services/advert'
import * as S from './style'
import {
  getFilterAdverts,
  getFilteredListAdverts,
} from '../../store/selectors/adverts'
import {
  setFilterAdverts,
  setFilterAdvertsList,
} from '../../store/actions/creators/adverts'
import { useEffect } from 'react'

export const MainPage = () => {
  const dispatch = useDispatch()
  const stateFilters = useSelector(getFilterAdverts)
  const advertListFiltered = useSelector(getFilteredListAdverts)
  const { data: advertList, error: advertError } = useGetAllAdvertsQuery()

  const performSearch = (e) => {
    dispatch(
      setFilterAdverts({
        ...stateFilters,
        status: true,
        textSearchAdvert: e.target.value,
      }),
    )
  }

  useEffect(() => {
    if (advertList) {
      let filteredAdvertList = [...advertList]

      if (stateFilters.textSearchAdvert.length) {
        filteredAdvertList = [
          ...advertList.filter((advert) =>
            advert.title
              .toLowerCase()
              .includes(stateFilters.textSearchAdvert.toLowerCase()),
          ),
        ]
      }

      dispatch(setFilterAdvertsList(filteredAdvertList))
    }
  }, [advertList, stateFilters])

  return (
    <S.Main>
      <S.MainSearch>
        <S.MainSearchLogoLink>
          <S.MainSearchLogoLinkImg src="/img/logo.png" />
        </S.MainSearchLogoLink>

        <S.MainSearchForm>
          <S.MainSearchFormText
            placeholder="Поиск по объявлениям"
            onChange={(e) => {
              performSearch(e)
            }}
          />
          <S.MainSearchFormBtn>Найти</S.MainSearchFormBtn>
        </S.MainSearchForm>
      </S.MainSearch>

      <S.MainContainer>
        <S.MainTitle>Объявления</S.MainTitle>
        <S.MainContent>
          <S.Cards>
            {(stateFilters.status ? advertListFiltered : advertList)?.map(
              (advert) => {
                return (
                  <CardItem
                    key={advert.id}
                    linkItem={`/advert/${advert.id}`}
                    nameItem={advert.title}
                    priceItem={advert.price}
                    cityItem={advert.user.city}
                    dateItem={advert.created_on}
                    imgItem={advert.images[0]?.url}
                  />
                )
              },
            )}
          </S.Cards>
        </S.MainContent>
      </S.MainContainer>
    </S.Main>
  )
}

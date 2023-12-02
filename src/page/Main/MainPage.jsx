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
import { useEffect, useState } from 'react'

export const MainPage = () => {
  const dispatch = useDispatch()
  const [textSearch, setTextSearch] = useState(false)
  const [sortAdvList, setSortAdvList] = useState([])
  const stateFilters = useSelector(getFilterAdverts)
  const advertListFiltered = useSelector(getFilteredListAdverts)
  const { data: advertList, isLoading: advertListLoad } =
    useGetAllAdvertsQuery()

  const handleSearch = (e) => {
    setTextSearch(e.target.value)
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

      if (stateFilters.textSearchAdvert?.length) {
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

  useEffect(() => {
    if (advertList) {
      const sortedAdvertList = advertList
        .slice()
        .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
      setSortAdvList(sortedAdvertList)
    }
  }, [advertList])

  return (
    <S.Main>
      <S.MainSearch>
        <S.MainSearchLogoLink>
          <S.MainSearchLogoLinkImg src="/img/logo.png" />
        </S.MainSearchLogoLink>
        <S.MainSearchLogoLinkMobile>
          <S.MainSearchLogoLinkImgMobile src="/img/logo-mob.png" />
        </S.MainSearchLogoLinkMobile>

        <S.MainSearchForm>
          <S.MainSearchFormText
            placeholder="Поиск по объявлениям"
            onChange={(e) => {
              handleSearch(e)
            }}
          />
          <S.MainSearchFormTextMobile
            placeholder="Поиск по объявлениям"
            onChange={(e) => {
              handleSearch(e)
            }}
          />
          <S.MainSearchFormBtn>Найти</S.MainSearchFormBtn>
        </S.MainSearchForm>
      </S.MainSearch>

      <S.MainContainer>
        <S.MainTitle>Объявления</S.MainTitle>
        <S.MainContent>
          <S.Cards>
            {(stateFilters.status ? advertListFiltered : sortAdvList)?.map(
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

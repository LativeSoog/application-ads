import { useState } from 'react'
import * as S from './style'

export const ButtonPhone = ({ userPhoneNumber }) => {
  const [isHiddenPhone, setIsHiddenPhone] = useState(true)

  const handleHiddenPhone = () => {
    setIsHiddenPhone(!isHiddenPhone)
  }

  const formatNumberPhone = (phoneNumber) => {
    if (phoneNumber) {
      const digits = phoneNumber.replace(/\D/g, '')

      if (isHiddenPhone) {
        const formattedPhoneNumber = digits.replace(
          /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
          '$1 $2 ХХХ ХХ ХХ',
        )
        return formattedPhoneNumber
      } else {
        const formattedPhoneNumber = digits.replace(
          /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
          '$1 $2 $3 $4 $5',
        )
        return formattedPhoneNumber
      }
    }
  }

  return (
    <>
      {isHiddenPhone ? (
        <S.AdvertRightBlockBtn onClick={handleHiddenPhone}>
          Показать&nbsp;телефон
          <S.AdvertRightBlockBtnSpan>
            {formatNumberPhone(userPhoneNumber)}
          </S.AdvertRightBlockBtnSpan>
        </S.AdvertRightBlockBtn>
      ) : (
        <S.AdvertRightBlockBtn onClick={handleHiddenPhone}>
          Показать&nbsp;телефон
          <S.AdvertRightBlockBtnSpan>
            {formatNumberPhone(userPhoneNumber)}
          </S.AdvertRightBlockBtnSpan>
        </S.AdvertRightBlockBtn>
      )}
    </>
  )
}

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardsItem = styled.div`
  margin: 0;
`;

export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const CardImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
`;

export const CardLink = styled(Link)``;

export const CardImageImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const CardContent = styled.div``;

export const CardContentTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardContentPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
`;

export const CardContentPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;

export const CardContentDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
`;

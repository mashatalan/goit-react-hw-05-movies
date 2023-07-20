import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  box-shadow: 0 2px 4px 2px purple;

  &:hover {
    background-color: plum;
    color: white;

  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const ImgWrapper = styled.div`
 margin-right: 30px;
  Img {
    width: 570px;
    max-width: initial;
    border-radius: 10px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 10px 10px 0;
`;
export const Overview = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 10px 10px 0;
  text-align: justify;
  overflow-y: auto;
  height: 150px;
`;
export const Li = styled.li`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 10px 10px 0;
`;

export const H = styled.h2`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const RouterLink = styled(Link)`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px 2px purple;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: plum;
    color: white;
`;


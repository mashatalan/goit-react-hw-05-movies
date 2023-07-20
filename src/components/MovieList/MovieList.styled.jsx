import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import ImgCart from '../ImgCart';

export const MovieListContainer = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  list-style: none;
  padding: 0;
  margin-top: 30px;
`;

export const Wrapper = styled.div`
  position: relative;
  box-shadow: 0 2px 0 0 rgba(20, 1, 100, 0.6);
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    color: purple;
  }
`;

export const MovieItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const MovieImage = styled(ImgCart)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const MovieTitle = styled.h2`
  text-decoration: none;
  color: white;
  font-size: 14px;
  padding: 5px;
`;

export const WrapperDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.4);

`;

export const WrapperContent = styled.div`
  text-align: start;
  margin-top: 8px;
`;


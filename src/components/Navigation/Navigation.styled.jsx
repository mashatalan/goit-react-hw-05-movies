import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 25px;
  border-bottom: 1px solid purple;
  box-shadow: 0 2px 0 0 rgba(20, 1, 100, 0.6);

  margin-top: 20px;
  position: relative;


`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const LINK = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  box-shadow: 0 2px 4px 2px purple;

  &.active {
    color: white;
    background-color: plum;
  }

  &:not(:last-child) {
    margin-right: 10px;

  }
`;

export const Item = styled.li`
  margin: 0 10px;
`
export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin-bottom: 10px;
  `
;

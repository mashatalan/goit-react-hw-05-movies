import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';

import { Header, Nav, List, Item, LINK } from './Navigation.styled';
import Loader from 'components/Loader';

function Navigation() {
  return (
    <>
      <Header>
        <Nav>
          <List>
            <Item>
              <LINK to='/'>Home</LINK>
            </Item>
            <Item>
              <LINK to='/movies'>Movies</LINK>
            </Item>
          </List>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Navigation;

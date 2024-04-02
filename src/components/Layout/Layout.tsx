import "../../styles/reset.css";
import "../../styles/typography.css";
import React, { PropsWithChildren } from "react";
import { Content, Footer, Grid, Header, Nav, NavLink } from "./Layout.styles";

type LayoutProps = {};

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <Grid>
      <Header>Seattle Volleyball</Header>
      <Nav>
        <ul>
          <NavLink>Tournaments</NavLink>
          <NavLink>Leagues</NavLink>
          <NavLink>Open Gyms</NavLink>
        </ul>
      </Nav>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Grid>
  );
};

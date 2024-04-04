import "../../styles/reset.css";
import "../../styles/typography.css";
import React, { PropsWithChildren } from "react";
import { Content, Footer, Grid, Header, Nav, NavLink } from "./Layout.styles";
import { Script, withPrefix } from "gatsby";

type LayoutProps = {};

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Script src={withPrefix("netlifyIdentityRedirect.js")}></Script>
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
    </>
  );
};

import styled from "styled-components";
export const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "footer";
  margin: 10px;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header nav nav"
      "content content content"
      "footer footer footer";
  }
`;

export const Header = styled.header`
  grid-area: header;
`;
export const Footer = styled.footer`
  grid-area: footer;
`;

export const Nav = styled.nav`
  grid-area: nav;

  ul {
    @media (min-width: 700px) {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
    }
  }
`;
export const NavLink = styled.li``;

export const Content = styled.div`
  grid-area: content;
  margin: auto;
  padding: 2em;
`;

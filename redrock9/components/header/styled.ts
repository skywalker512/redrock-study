import styled from "styled-components"

export const Header = styled.header`
  min-width: 78rem;
  @media (max-width: 78rem) {
    min-width: 68rem;
  }
  @media (max-width: 68rem) {
    min-width: 58rem;
  }
`
export const Top = styled.div`
  background-color: #2c3e50;
  height: 2.5rem;
  font-size: 0.75rem;
  line-height: 2.5rem;
  color: #fff;
  nav {
    @media (max-width: 78rem) {
      width: 65rem;
    }
    @media (max-width: 68rem) {
      width: 55rem;
    }
    width: 75rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  svg {
    margin-right: 0.5rem;
  }
  div {
    display: flex;
    a {
      display: flex;
      align-items: center;
      padding: 0 1.25rem;
      border-right: 0.04rem solid #17202a;
      cursor: pointer;
      .link {
        padding-left: 0.3rem;
        color: #1dd2af;
      }
    }
  }
  div:first-child {
    a:first-child {
      padding-left: 0;
    }
  }
  div:last-child {
    a {
      padding: 0 0.75rem;
    }
    a:first-child {
      border-left: 0.04rem solid #17202a;
    }
    svg {
      margin: 0;
    }
  }
`

export const Nav = styled.nav`
  height: 5.6rem;
  width: 75rem;
  @media (max-width: 78rem) {
    width: 65rem;
  }
  @media (max-width: 68rem) {
    width: 55rem;
  }
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.a`
  display: block;
  font-size: 2.5rem;
  font-weight: lighter;
  color: #2c3e50;
  span {
    color: #1dd2af;
  }
  cursor: pointer;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-transform: uppercase;
    padding: 0 0.5rem;
    cursor: pointer;
    transition: color 0.2s;
    color: #5d6e80;
    &:hover {
      color: #1dd2af;
    }
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  box-sizing: border-box;
  svg {
    width: 60%;  
    height: 60%;
  }
  svg > path {
    fill: currentColor;
  }
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid currentColor;
  border-radius: 50%;
  margin-left: 1rem;
  &:hover {
    color: #1dd2af;
  }
  cursor: pointer;
  transition: color 0.2s;
`
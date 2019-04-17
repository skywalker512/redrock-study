import styled from "styled-components"

export const Header = styled.header`
  height: 2.5rem;
  background-color: #2c3e50;
  min-width: 78rem;
`
export const Top = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100%;
  font-size: 0.75rem;
  width: 75rem;
  line-height: 2.5rem;
  margin: auto;
  color: #fff;
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
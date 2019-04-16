import styled from "styled-components"

export const Header = styled.header`
  height: 2.5rem;
  background-color: #2c3e50;
  min-width: 75rem;
`
export const Nav = styled.nav`
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

export const Item = styled.a`
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  border-right: 0.04rem solid #17202a;
  cursor: pointer;
  .link {
    padding-left: 0.3rem;
    color: #1dd2af;
  }
`
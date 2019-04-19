import styled from 'styled-components'

export const Search = styled.section`
  width: 100%;
  height: 6.25rem;
  background-color: #2c3e50;
  border-top: 0.04rem solid #415569;
  box-sizing: border-box;
  & > div {
    @media (max-width: 78rem) {
      width: 65rem;
    }
    @media (max-width: 68rem) {
      width: 55rem;
    }
    width: 75rem;
    margin: 0 auto;
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
  }
`

export const Title = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 0.04rem solid #415569;
  box-sizing: border-box;
  padding-right: 2rem;
  & > div:first-child {
    color: #9fb0c0;
    font-size: 1.25rem;
  }
  & > div:last-child {
    color: #fff;
    font-size: 1.6rem;
  }
`

export const Controller = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  & > div {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    position: relative;
    & > span {
      color: #9fb0c0;
      font-weight: lighter;
      font-size: 1.375rem;
      padding: 0 1.375rem;
    }
    & > input {
      box-sizing: border-box;
      height: 2.3rem;
      padding: 0 0.4rem;
      color: #8a8a8a;
      outline: none;
    }
    & > svg {
      position: absolute;
      right: 0.5rem;
      width: 1.25rem;
      height: 1.25rem;
      & > path {
        fill: #a4a4a4;
      }
    }
  }
  & > button {
    padding: 0 1rem;
    margin-left: 1.5rem;
    height: 2.3rem;
    box-sizing: border-box;
    background-color: #fff;
    border: 0;
    outline: none;
    background-color: #1dd2af;
    color: #fff;
  }
`
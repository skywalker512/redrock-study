import styled from 'styled-components'

export const Item = styled.div`
  height: 17.5rem;
  width: 16.25rem;
  min-width: 16.25rem;
  background-color: #eeeeee;
  margin: 1.5rem 1rem 1.5rem 1rem;
  border: 0.4rem solid #eeeeee;
  border-radius: 0.2rem;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  & > img {
    transition: all 0.2s ease-in-out;
    display: block;
    margin: 0 auto;
    width: 15.5rem;
    height: 12.5rem;
    object-fit: cover;
  }
  &:hover {
    height: 20.5rem;
    margin: 0 1rem;
    border: 0.4rem solid #1dd2af;
    background-color: #2c3e50;
    & > img {
      height: 15.5rem;
    }
    & > div {
      transition: all 0.2s ease-in-out;
      color: #ffffff;
      & > div:last-of-type {
        color: #8899a8;
      }
    }
  }
`

export const Title = styled.div`
  margin: 1rem 0 0 1rem;
  position: relative;
  line-height: 1.25rem;
  color: #626262;
  & > div:last-of-type {
    font-size: 0.8rem;
  }
  & > svg {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    width: 1.8rem;
    height: 1.8rem;
    & > path {
      fill: #9fb0c0;
    }
  }
`
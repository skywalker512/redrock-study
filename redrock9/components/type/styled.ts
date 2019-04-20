import styled from 'styled-components'

export const Place = styled.section`
  padding: 5rem 0;
`

export const Title = styled.div`
  text-align: center;
  & > div:first-of-type {
    font-size: 1.8rem;
    text-transform: uppercase;
    line-height: 3rem;
    color: #ffffff;
  }
  & > div:last-of-type {
    color: #9eafc0;
  }
`

export const Controller = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
`
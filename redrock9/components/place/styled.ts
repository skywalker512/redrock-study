import styled from 'styled-components'

export const Place = styled.section`
  padding: 5rem 0;
`

export const Title = styled.div`
  text-align: center;
  & > div:first-child {
    font-size: 1.8rem;
    text-transform: uppercase;
    line-height: 3rem;
    color: #2c3e50;
  }
  & > div:last-child {
    color: #626262;
  }
`

export const Controller = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  overflow: hidden;
`
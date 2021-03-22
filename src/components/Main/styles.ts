import styled from 'styled-components'
import Button from '../../style-guide/Button'

export const Container = styled.main`
  background-color: #3661a8;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const Title = styled.span`
  font-size: 28px;
`

export const Content = styled.div`
  background-color: red;
  width: 100%;
`

export const Listing = styled.div`
  width: 500px;
`

export const ListingItem = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid white;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

export const ListingItemText = styled.span`
  font-size: 18px;
  padding: 10px;
`

export const AddButton = styled(Button)`
  margin-top: 24px;
`

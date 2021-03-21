import * as S from './styles'

import content from './content'

const Main = () => (
  <S.Container>
    <S.Title>Pokedex</S.Title>
    <S.Listing>
      {content.map((item) => (
        <S.ListingItem key={item.id}>
          <S.ListingItemText>{item.name}</S.ListingItemText>
          <S.ListingItemText>{item.level}</S.ListingItemText>
        </S.ListingItem>
      ))}
    </S.Listing>
  </S.Container>
)
export default Main

import content from './content'

import * as S from './styles'

const Main = () => {
  const handleAdd = () => {
    console.log('handleAdd')
  }

  return (
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
      <S.AddButton onClick={handleAdd}>Adicionar pokemon</S.AddButton>
    </S.Container>
  )
}

export default Main

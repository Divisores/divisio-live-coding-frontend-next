import * as S from './styles'

const TopBar = () => {
  const handleAdd = () => {
    console.log('handle add')
  }

  return (
    <S.Container>
      <S.AddButton onClick={handleAdd}>Adicionar pokemon</S.AddButton>
    </S.Container>
  )
}

export default TopBar

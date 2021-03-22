import * as S from './styles'
import Button from '../../style-guide/Button'

const TopBar = () => {
  const handleAdd = () => {
    console.log('handle add')
  }

  return (
    <S.Container>
      <S.Label>
        Pokémons: <S.Total>5</S.Total>
      </S.Label>
      <Button onClick={handleAdd}>Adicionar pokemon</Button>
    </S.Container>
  )
}

export default TopBar

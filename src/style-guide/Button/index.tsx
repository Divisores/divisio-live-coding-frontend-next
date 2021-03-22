import * as S from './styles'

type Props = {
  onClick: () => void
  children: string
  className?: string
}

const Button = ({ onClick, className, children }: Props) => (
  <S.Container className={className} onClick={onClick}>
    {children}
  </S.Container>
)

export default Button

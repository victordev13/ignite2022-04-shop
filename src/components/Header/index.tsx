import logoImg from '../../assets/logo.svg'
import { Container } from './styles'

export default function Header() {
  return (
    <Container>
      <img src={logoImg.src} alt="" />
    </Container>
  )
}

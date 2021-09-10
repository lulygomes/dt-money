import logoImg from '../../assets/logo.svg'

import { Container, Content, Button } from './styles'

type HeaderProps = {
  handleToOpenNewTrasanction: () => void;
}

export function Header({ handleToOpenNewTrasanction }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <Button type="button" onClick={handleToOpenNewTrasanction}>
          Nova transação
        </Button>

      </Content>
    </Container>
  )
}
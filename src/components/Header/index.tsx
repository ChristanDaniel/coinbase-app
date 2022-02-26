import Button from '../Button'

import { HeaderContainer } from './styles'

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <h1>Assets</h1>
        <div>
          <p>Wallet Connected <span>0x2546b...7ECEc30</span></p>
          <Button id='button-buy'>Buy / Sell</Button>
          <Button id='button-receive'>Send / Receive</Button>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header

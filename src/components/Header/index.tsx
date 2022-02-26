import { HeaderContainer } from './styles'

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <h1>Assets</h1>
        <div>
          <p>Wallet Connected</p>
          <button>Buy / Sell</button>
          <button>Send / Receive</button>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header

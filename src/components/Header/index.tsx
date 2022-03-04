import { useEffect, useState } from 'react'
import Button from '../Button'

import { HeaderContainer } from './styles'

interface HeaderProps {
  numberWallet: string
}

const Header = ({ numberWallet }: HeaderProps): JSX.Element => {

  const formatWalletAdress = (WalletAdress: string) => {
    return String(WalletAdress).substr(0, 7) + '...' + String(WalletAdress).substr(31, 11)
  }

  return (
    <>
      <HeaderContainer>
        <h1>Assets</h1>
        <div>
          <p>
            Wallet Connected <span>{formatWalletAdress(numberWallet)}</span>
          </p>

          <Button id="button-buy">Buy / Sell</Button>
          <Button id="button-receive">Send / Receive</Button>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header

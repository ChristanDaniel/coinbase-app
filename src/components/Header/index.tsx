import { useEffect, useState } from 'react'
import Button from '../Button'

import { HeaderContainer } from './styles'

const Header = (): JSX.Element => {
  const [isTest, setIsTest] = useState(false)
  const [isTestee, setIsTestee] = useState('')

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const adress = await (window as any).ethereum.request({
          method: 'eth_requestAccounts'
        })

        setIsTestee(adress)
        setIsTest(true)
      } catch (err) {
        setIsTest(false)
      }
    } else {
      setIsTest(false)
    }
  }

  useEffect(() => {
    // connectWallet()
  }, [])

  return (
    <>
      <HeaderContainer>
        <h1>Assets</h1>
        <div>
          {!isTest ? (
            <Button id="button-connect" onClick={() => connectWallet()}>
              Wallet Connect
            </Button>
          ) : (
            <p>
              Wallet Connected <span>{isTestee}</span>
            </p>
          )}

          <Button id="button-buy">Buy / Sell</Button>
          <Button id="button-receive">Send / Receive</Button>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header

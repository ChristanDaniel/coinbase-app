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
          <p>Wallet Connected <span>0x2546b...7ECEc30</span></p>
          <Button id='button-buy'>Buy / Sell</Button>
          <Button id='button-receive'>Send / Receive</Button>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header

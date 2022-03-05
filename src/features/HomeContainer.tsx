import { useCallback, useEffect, useState } from 'react'

import Header from '../components/Header'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'

import { HomeContaine, HomeContent, ConnectWalletContainer } from './styles'
import Portfolio from '../components/Portfolio'

const HomeContainer = (): JSX.Element => {
  const [isConnectWallet, setIsConnectWallet] = useState({ isConnect: false, connectedPhrase: 'POR FAVOR CONECTADA NA SUA CARTEIRA' })
  const [numberWallet, setNumberWallet] = useState('')

  const connectWallet = useCallback(async () => {
    if ((window as any).ethereum) {
      try {
        const adress = await (window as any).ethereum.request({
          method: 'eth_requestAccounts'
        })

        setNumberWallet(adress)
        setIsConnectWallet({ isConnect: true, connectedPhrase: 'CARTEIRA CONECTADA' })
      } catch (err) {
        setIsConnectWallet({ isConnect: false, connectedPhrase: 'ERRO NA CONEXÃO DA CARTEIRA' })
      }
    } else {
      setIsConnectWallet({ isConnect: false, connectedPhrase: 'POR FAVOR CONECTADA NA SUA CARTEIRA' })
    }
  }, [])

  console.log('TESTT', (window as any).ethereum)
  useEffect(() => {}, [])

  return (
    <>
      <HomeContaine>
        {!isConnectWallet.isConnect ? (
          <ConnectWalletContainer>
            <span>{isConnectWallet.connectedPhrase}</span>
            <Button id="button-connect" onClick={() => connectWallet()}>
              Wallet Connect
            </Button>
          </ConnectWalletContainer>
        ) : (
          <>
            <Sidebar />
            <HomeContent>
              <Header numberWallet={numberWallet} />
              <Portfolio />
            </HomeContent>
          </>
        )}
      </HomeContaine>
    </>
  )
}

export default HomeContainer

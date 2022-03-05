import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { HomeContent, ConnectWalletContainer } from './styles'

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
      {!isConnectWallet.isConnect ? (
        <ConnectWalletContainer>
          <div>
            <span>{isConnectWallet.connectedPhrase}</span>
            <Button id="button-connect" onClick={() => connectWallet()}>
              Wallet Connect
            </Button>
          </div>
        </ConnectWalletContainer>
      ) : (
        <HomeContent>
          <Sidebar />
          <Header numberWallet={numberWallet} />
        </HomeContent>
      )}
    </>
  )
}

export default HomeContainer

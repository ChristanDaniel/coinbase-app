import styled from 'styled-components'

const HomeContaine = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`

const ConnectWalletContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #button-connect {
    background-color: rgb(0, 82, 255);
  }
`

const HomeContent = styled.div`
  width: 100%;
`

export { HomeContaine, HomeContent, ConnectWalletContainer }

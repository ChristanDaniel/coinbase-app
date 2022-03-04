import styled from 'styled-components'

const ConnectWalletContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }

  #button-connect {
    background-color: rgb(0, 82, 255);
  }
`

const HomeContent = styled.div`
  display: flex;
`

export { HomeContent, ConnectWalletContainer }

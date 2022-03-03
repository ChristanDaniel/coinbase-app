import styled from 'styled-components'

const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #282b2f;

  h1 {
    margin-left: 25px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-right: 80px;

    P {
      display: flex;
      flex-direction: column;
      border: 1px solid #282b2f;
      padding: 4px 17px 4px 17px;
      border-radius: 35px;
      font-size: 16px;
      color: #4ee44e;

      span {
        font-size: 12px;
        color: #8b8b8b;
        margin-top: 3px;
      }
    }

    #button-connect {
      background-color: rgb(0, 82, 255);
    }

    #button-buy {
      background-color: rgb(0, 82, 255);
    }

    #button-receive {
      background-color: black;
      border: 1px solid #282b2f;
    }
  }
`

export { HeaderContainer }

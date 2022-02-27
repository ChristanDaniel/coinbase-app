import styled from 'styled-components'

const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #8b8b8b;

  h1 {
    margin-left: 20px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 60px;

    P {
      display: flex;
      flex-direction: column;
      border: 1px solid #8b8b8b;
      padding: 4px 17px 4px 17px;
      border-radius: 35px;
      font-size: 16px;
      color: #4ee44e;

      span {
        font-size: 12px;
        color: #fff;
        margin-top: 3px;
      }
    }

    #button-buy {
      background-color: rgb(0, 82, 255);
    }

    #button-receive {
      background-color: black;
      border: 1px solid #8b8b8b;
    }
  }
`

export { HeaderContainer }

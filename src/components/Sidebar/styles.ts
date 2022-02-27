import styled from 'styled-components'

const SidebarContainer = styled.aside`
  width: auto;
  border-right: 1px solid #282b2f;

  h1 {
    padding: 32px;

    font-size: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;

    gap: 22px;
  }

  li {
    margin-left: 30px;
    margin-right: 30px;
    padding: 10px 45px 10px 10px;
    /* background-color: #141519; */
    display: flex;
    align-items: center;

    border-radius: 12px;

    transition: all 300ms ease-in-out;
    cursor: pointer;

    &:hover {
      background: #141519;
    }

    span {
      padding: 5px;
      margin-right: 20px;

      display: flex;
      align-items: center;

      background-color: #141519;
      border-radius: 100%;
    }

    p {
      font-size: 18px;
      min-width: 120px;
    }
  }
`

export { SidebarContainer }

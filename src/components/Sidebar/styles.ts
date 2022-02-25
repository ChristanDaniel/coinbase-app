import styled from 'styled-components'

const SidebarContainer = styled.aside`
  width: auto;
  border-right: 1px solid #8b8b8b;

  h1 {
    padding: 40px;

    font-size: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;

    gap: 20px;
  }

  li {
    margin-left: 30px;
    padding: 10px 40px 10px 10px;

    display: flex;
    align-items: center;

    border-radius: 12px;

    transition: all 300ms ease-in-out;
    cursor: pointer;

    &:hover {
      background: #808080;
    }

    span {
      padding: 5px;
      margin-right: 20px;

      display: flex;
      align-items: center;

      background-color: #808080;
      border-radius: 100%;
    }

    p {
      font-size: 20px;
    }
  }
`

export { SidebarContainer }

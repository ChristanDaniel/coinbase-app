import styled from 'styled-components'

const SidebarContainer = styled.aside`
  /* border: 1px solid #8b8b8b; */

  h1 {
    padding: 40px;
  }

  ul {
    height: 100%;

    display: flex;
    flex-direction: column;

    gap: 25px;
  }

  li {
    margin-left: 30px;
    padding: 10px;

    display: flex;
    align-items: center;

    transition: all 300ms ease-in-out;

    border-radius: 12px;

    &:hover {
      cursor: pointer;
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

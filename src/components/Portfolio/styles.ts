import styled from 'styled-components'

const PortfolioContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

const PortfolioContent = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`;


const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`;

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`;

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`;

const TableItem = styled.div`
  padding: 1rem 2rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export { PortfolioContainer, PortfolioContent, BalanceTitle, BalanceValue, PortfolioTable, Table, TableRow, TableItem, Divider, Title}

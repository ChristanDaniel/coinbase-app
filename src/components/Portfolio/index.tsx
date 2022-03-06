import { PortfolioContainer, PortfolioContent } from './styles'

const Portfolio = (): JSX.Element => {
  return (
    <>
      <PortfolioContainer>
        <PortfolioContent>
          <PortfolioTable>
            <TableItem>
              <Title>Your Assets</Title>
            </TableItem>
            <Divider />
            <Table>
              <TableItem>
                <TableRow>
                  <div style={{ flex: 3 }}>Name</div>
                  <div style={{ flex: 2 }}>Balance</div>
                  <div style={{ flex: 1 }}>Price</div>
                  <div style={{ flex: 1 }}>Allocation</div>
                  <div style={{ flex: 0 }}>
                  </div>
                </TableRow>
              </TableItem>
              <Divider />
            </Table>
          </PortfolioTable>
        </PortfolioContent>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio

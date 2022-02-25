import Header from '../components/Header'
import { HomeContent } from './styles'

const HomeContainer = (): JSX.Element => {
  return (
    <>
      <HomeContent>
        <Header />
          <h1>Hello World</h1>
      </HomeContent>
    </>
  )
}

export default HomeContainer

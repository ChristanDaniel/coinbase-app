import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { HomeContent } from './styles'

const HomeContainer = (): JSX.Element => {
  return (
    <>
      <HomeContent>
       <Sidebar />
        <Header />
      </HomeContent>
    </>
  )
}

export default HomeContainer

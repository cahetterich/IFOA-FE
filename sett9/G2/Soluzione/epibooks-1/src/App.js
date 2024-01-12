import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <MyNav />
      <MyJumbotron />
      <AllTheBooks />
      <MyFooter />
    </Container>
  )
}

export default App

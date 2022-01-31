import { Container } from 'react-bootstrap';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import CreateEmployee from './components/CreateEmployee';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<ListEmployee />} />
          <Route path='/employees' element={<ListEmployee />} />
          <Route path='/add-employee' element={<CreateEmployee />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

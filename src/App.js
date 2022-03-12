import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  BrowserRouter
} from "react-router-dom";
import './App.css';

function App() {
  return (
    // <Container maxWidth={'false'}>
    <BrowserRouter>
      <Container maxWidth={'xl'} className='container'>
        <Header />
        <Main />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;

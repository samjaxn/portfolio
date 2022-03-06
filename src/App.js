import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import './App.css';

function App() {
  return (
    // <Container maxWidth={'false'}>
    <Container maxWidth={'xl'}>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;

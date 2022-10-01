import logo from './logo.svg';
import './App.css';
import { Button, Spinner, ToastContainer } from 'react-bootstrap';
import GridCards from './components/GridCards/GridCards';
import NavBar from './components/NavBar/NavBar';
import ToastBtn from './components/Toast/ToastBtn';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <br /><br />
      <Button variant='danger'>My Button</Button>
      <Spinner animation="grow" variant="success" />
      <ToastBtn></ToastBtn>
      <br />
      <br />
      <GridCards></GridCards>
      
    </div>
  );
}

export default App;

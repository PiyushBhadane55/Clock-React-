import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
 
  console.log("paonted");

  return<center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>
}

export default App

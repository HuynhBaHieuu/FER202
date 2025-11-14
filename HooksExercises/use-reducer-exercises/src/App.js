import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './components/CounterComponent';
import LightSwitch from './components/LightSwitch';
import QuestionBank from './components/QuestionBank';

function App() {
  return (
    <div>
      <h1>Exercise 1</h1>
      <CounterComponent />
      <h1>Exercise 2</h1>
      <LightSwitch />
      <h1>Exercise 3</h1>
      <QuestionBank />
    </div>
  );
}

export default App;
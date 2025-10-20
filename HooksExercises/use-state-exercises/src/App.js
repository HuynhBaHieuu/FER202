import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardHeader } from 'react-bootstrap';

// Import all components
import CounterComponent from './components/CounterComponent';
import LightSwitch from './components/LightSwitch';
import LoginForm from './components/LoginForm';
import LoginForm2 from './components/LoginForm2';
import SearchItem from './components/SearchItem';
import SearchAccount from './components/SearchAccount';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Container fluid className="py-4">
        <h1 className="text-center mb-5">React Hooks Exercises</h1>
        
        <Row className="mb-4">
          <Col md={6} className="mb-4">
            <Card>
              <CardHeader>
                <h4>Exercise 1: Counter Component</h4>
              </CardHeader>
              <Card.Body>
                <CounterComponent />
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6} className="mb-4">
            <Card>
              <CardHeader>
                <h4>Exercise 2: Light Switch</h4>
              </CardHeader>
              <Card.Body>
                <LightSwitch />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} className="mb-4">
            <Card>
              <CardHeader>
                <h4>Exercise 3: Login Form 1</h4>
              </CardHeader>
              <Card.Body>
                <LoginForm />
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6} className="mb-4">
            <Card>
              <CardHeader>
                <h4>Exercise 4: Login Form 2</h4>
              </CardHeader>
              <Card.Body>
                <LoginForm2 />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} className="mb-4">
            <Card>
              <CardHeader>
                <h4>Exercise 5: Search Item</h4>
              </CardHeader>
              <Card.Body>
                <SearchItem />
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6} className="mb-4">
            <Card>
              <CardHeader>
                <h4>Exercise 6: Search Account</h4>
              </CardHeader>
              <Card.Body>
                <SearchAccount />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12} className="mb-4">
            <Card>
              <CardHeader>
                <h4>Exercise 7: Registration Form</h4>
              </CardHeader>
              <Card.Body>
                <RegistrationForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

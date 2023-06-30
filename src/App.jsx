import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col className="p-5 text-bg-light">
            <Stack gap={3}>
              <h1 className="text-info">Join our community</h1>
              <h3 className="text-warning">
                30 day hassle-free money back guarantee
              </h3>
              <p className="text-muted">
                Gain access to our full library of tutorials along with expert
              </p>
            </Stack>
          </Col>
        </Row>

        <Row>
          <Col className="p-5 text-bg-info text-white">
            <Stack gap={3}>
              <h2>Monthly Subscription</h2>
              <Stack
                direction="horizontal"
                gap={2}
                className="align-items-center"
              >
                <h3 className="mb-0">29$</h3>
                <small>per month</small>
              </Stack>
              <p>Full access for less than $1 a day</p>
              <Button variant="warning">Sign Up</Button>
            </Stack>
          </Col>
          <Col className="p-5 text-bg-info text-white">
            <Stack gap={3}>
              <h2>Why Us</h2>

              <Stack gap={1}>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </Stack>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;

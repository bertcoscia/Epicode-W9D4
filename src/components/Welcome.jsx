import { Alert, Container } from "react-bootstrap";

const Welcome = props => (
  <Container>
    <Alert variant="info">
      <h3>{props.claim}</h3>
    </Alert>
  </Container>
);

export default Welcome;

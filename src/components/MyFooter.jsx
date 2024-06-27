import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

const MyFooter = props => (
  <footer className="bg-dark text-white">
    <Container>
      <ListGroup className="py-3">
        <ListGroupItem className="bg-dark text-white border-0">Via Roma 23</ListGroupItem>
        <ListGroupItem className="bg-dark text-white border-0">alberto@larochelle.com</ListGroupItem>
        <ListGroupItem className="bg-dark text-white border-0">+39 123 456 7890</ListGroupItem>
        <ListGroupItem className="bg-dark text-white border-0">Alberto LaRochelle &copy; 2024</ListGroupItem>
      </ListGroup>
    </Container>
  </footer>
);

export default MyFooter;

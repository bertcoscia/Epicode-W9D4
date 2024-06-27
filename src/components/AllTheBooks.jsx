import React from "react";
import { Button, Card, CardBody, CardImg, CardTitle, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import MyFooter from "./MyFooter";

const genresArray = [fantasy, history, horror, romance, scifi];
class AllTheBooks extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          <h3>Choose your favourite genre</h3>
          <Container className="d-flex justify-content-evenly my-3">
            <Button variant="primary" onClick={() => this.setState({ genre: "fantasy", index: genresArray[0] })}>
              Fantasy
            </Button>
            <Button variant="primary" onClick={() => this.setState({ genre: "history", index: genresArray[1] })}>
              History
            </Button>
            <Button variant="primary" onClick={() => this.setState({ genre: "horror", index: genresArray[2] })}>
              Horror
            </Button>
            <Button variant="primary" onClick={() => this.setState({ genre: "romance", index: genresArray[3] })}>
              Romance
            </Button>
            <Button variant="primary" onClick={() => this.setState({ genre: "scifi", index: genresArray[4] })}>
              SciFi
            </Button>
          </Container>
          {this.state.genre && <h3 className="mb-3">Chosen genre: {this.state.genre.toUpperCase()}</h3>}
          {this.state.index && (
            <Row className="gy-3 mb-3">
              {this.state.index.map(book => {
                return (
                  <Col key={`asin-${book.asin}`} xs={12} md={4} xl={3}>
                    <Card style={{ width: "18rem" }}>
                      <CardImg variant="top" src={book.img} />
                      <CardBody>
                        <CardTitle className="mb-3">{book.title}</CardTitle>
                        <span className="rounded-pill px-3 py-2 bg-info">${book.price}</span>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          )}
        </Container>
        {this.state.genre && <MyFooter />}
      </>
    );
  }
}

export default AllTheBooks;

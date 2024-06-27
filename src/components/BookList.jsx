import { Button, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import React from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class BookList extends React.Component {
  state = {
    title: null,
    genre: null
  };

  handleFieldChange = value => this.setState({ title: value });

  handleSubmit = event => event.preventDefault();

  render() {
    return (
      <Container>
        {/* <h3 className="mt-3 mb-5">{this.state.genre ? `${this.statetoUpperCase()}` : "Choose your favourite genre"}</h3> */}
        <Container className="d-flex justify-content-evenly my-3">
          <Button variant="info" onClick={() => this.setState({ genre: fantasy })}>
            Fantasy
          </Button>
          <Button variant="info" onClick={() => this.setState({ genre: history })}>
            History
          </Button>
          <Button variant="info" onClick={() => this.setState({ genre: horror })}>
            Horror
          </Button>
          <Button variant="info" onClick={() => this.setState({ genre: romance })}>
            Romance
          </Button>
          <Button variant="info" onClick={() => this.setState({ genre: scifi })}>
            SciFi
          </Button>
        </Container>
        <Container className="mb-3">
          <Form className="mt-5" onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" placeholder="Search a book" onChange={event => this.handleFieldChange(event.target.value)} />
            </Form.Group>
          </Form>
        </Container>
        <Row className="gy-3 mb-3 gx-3">
          {this.state.genre && this.state.genre.length > 0 ? (
            this.state.title ? (
              this.state.genre.filter(book => book.title.toLowerCase().includes(this.state.title.toLowerCase())).map(book => <SingleBook key={book.asin} book={book} />)
            ) : (
              this.state.genre.map(book => <SingleBook key={book.asin} book={book} />)
            )
          ) : (
            <h2>Select a genre</h2>
          )}
        </Row>
      </Container>
    );
  }
}

export default BookList;

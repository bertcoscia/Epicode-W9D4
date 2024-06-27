import { Component } from "react";
import { Badge, Container, ListGroup } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk5NzdjMjM5YzAwMTUyZjRiM2MiLCJpYXQiOjE3MTk0OTA4MjksImV4cCI6MTcyMDcwMDQyOX0.DKsZ6NE4RC2q5DGQhtPu6bhYlYLaj2pWT9Zbpm7r2Ws";

class CommentArea extends Component {
  state = {
    comments: []
  };

  fetchComments = asin => {
    fetch(URL + asin, {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(console.log("Couldn't get data"));
        }
      })
      .then(comments => {
        const filteredComments = comments.filter(comment => comment.elementId === asin);
        console.log(filteredComments);
        this.setState({ comments: comments });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {}

  render() {
    return (
      <Container>
        <ListGroup className="my-3">
          <ListGroup.Item onClick={() => this.fetchComments(this.props.asin)}>ciao</ListGroup.Item>
          {this.state.comments.map(comment => (
            <ListGroup.Item key={comment._id} className="d-flex flex-column align-items-center">
              <p>
                <strong>{comment.author}</strong>
              </p>
              <p>{comment.comment}</p>
              <Badge bg="info">{comment.rate}</Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default CommentArea;

import { Component } from "react";
import { Badge, Container, ListGroup } from "react-bootstrap";
import CommentsList from "./CommentsList";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk5NzdjMjM5YzAwMTUyZjRiM2MiLCJpYXQiOjE3MTk0OTA4MjksImV4cCI6MTcyMDcwMDQyOX0.DKsZ6NE4RC2q5DGQhtPu6bhYlYLaj2pWT9Zbpm7r2Ws";

class CommentArea extends Component {
  state = {
    comments: []
  };

  fetchComments = asin => {
    fetch(`${URL + asin}`, {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(console.log("Couldn't get data", response));
        }
      })
      .then(comments => {
        this.setState({ comments: comments });
        console.log("state", this.state.comments);
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    console.log("asin", this.props.asin);
    this.fetchComments(this.props.asin);
  }

  render() {
    return (
      <Container>
        <CommentsList comments={this.state.comments} />
      </Container>
    );
  }
}

export default CommentArea;

import { Component } from "react";
import { Badge, ListGroup } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk5NzdjMjM5YzAwMTUyZjRiM2MiLCJpYXQiOjE3MTk0OTA4MjksImV4cCI6MTcyMDcwMDQyOX0.DKsZ6NE4RC2q5DGQhtPu6bhYlYLaj2pWT9Zbpm7r2Ws";

class SingleComment extends Component {
  state = {};

  fetchComment(id) {
    fetch(`${URL + id}`, {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data");
        }
      })
      .then(comment => {
        this.setState(comment);
      });
  }

  componentDidMount() {
    this.fetchComment(this.props.commentId);
  }

  render() {
    return (
      <ListGroup.Item>
        <p>
          <strong>{this.state.author}</strong>
        </p>
        <p>{this.state.comment}</p>
        <Badge bg="info">{this.state.rate}</Badge>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;

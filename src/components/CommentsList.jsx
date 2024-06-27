import { Component } from "react";
import { Badge, ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  state = {};

  render() {
    return (
      <ListGroup className="my-3">
        {this.props.comments.map(comment => (
          <ListGroup.Item key={comment._id} className="d-flex flex-column align-items-center">
            <p>
              <strong>{comment.author}</strong>
            </p>
            <p>{comment.comment}</p>
            <Badge bg="info">{comment.rate}</Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CommentsList;

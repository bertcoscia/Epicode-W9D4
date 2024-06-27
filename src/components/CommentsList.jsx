import { Component } from "react";
import { Badge, ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  state = {};

  render() {
    return (
      <ListGroup className="my-3">
        {this.props.comments.map(comment => (
          <SingleComment key={comment._id} className="d-flex flex-column align-items-center" commentId={comment._id} />
        ))}
      </ListGroup>
    );
  }
}

export default CommentsList;

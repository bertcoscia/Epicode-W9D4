import { Card, Col } from "react-bootstrap";
import React from "react";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    isSelected: false
  };

  handleClick = () => {
    if (!this.state.isSelected) {
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }
  };

  render() {
    return (
      <Col xs={12} md={4} xl={3}>
        <Card className={this.state.isSelected ? "border-danger" : null} onClick={this.handleClick}>
          <Card.Img variant="top" src={this.props.book.img} onClick={this.handleClick} />
          <Card.Body>
            <Card.Title className="mb-3">{this.props.book.title}</Card.Title>
            <span className="rounded-pill px-3 py-2 bg-info">${this.props.book.price}</span>
          </Card.Body>
        </Card>
        {this.state.isSelected && <CommentArea asin={this.props.book.asin} />}
      </Col>
    );
  }
}

export default SingleBook;

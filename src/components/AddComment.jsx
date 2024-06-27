import { Component } from "react";
import { Button, Form } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk5NzdjMjM5YzAwMTUyZjRiM2MiLCJpYXQiOjE3MTk0OTA4MjksImV4cCI6MTcyMDcwMDQyOX0.DKsZ6NE4RC2q5DGQhtPu6bhYlYLaj2pWT9Zbpm7r2Ws";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: this.props.asin
  };

  fetchPostComment = () => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Authorization: auth,
        "Content-type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          console.log("Comment posted");
          this.setState({ comment: "", rate: "" });
        } else {
          throw new Error("Comment not posted");
        }
      })
      .catch(error => console.log(error));
  };

  handleFieldChange = (key, value) => this.setState({ [key]: value });

  handleSubmit = event => {
    event.preventDefault();
    this.fetchPostComment();
  };

  render() {
    return (
      <Form className="mt-5" onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Rate</Form.Label>
          <Form.Control value={this.state.comment} className="my-3" type="text" placeholder="Your comment" onChange={event => this.handleFieldChange("comment", event.target.value)} />
          <Form.Control value={this.state.rate} className="my-3" type="number" placeholder="Your rating" min={1} max={5} onChange={event => this.handleFieldChange("rate", event.target.value)} />
          <Button type="sumbit" variant="info">
            Send
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default AddComment;

import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

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
          throw new Error("Couldn't get data");
        }
      })
      .then(comments => {
        this.setState({ comments: comments });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.fetchComments(this.props.asin);
  }

  render() {
    return (
      <>
        <AddComment asin={this.props.asin} />
        {this.state.comments.length > 0 && <CommentsList comments={this.state.comments} />}
      </>
    );
  }
}

export default CommentArea;

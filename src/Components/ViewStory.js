import React from "react";
import axios from "axios";
import "../Style/ViewStory.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ViewStory extends React.Component {
  state = {
    id: this.props.id,
    userToUpdate: this.props.userToupdate,
    story: [],
  };

  componentDidMount = () => {
    console.log(this.state.id);
    this.updateView();
    this.getStory();
  };

  updateView = async () => {
    await axios
      .put(`http://pratiliapi.herokuapp.com/api/stories/${this.state.id}`, {
        user: this.state.user,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  getStory = async () => {
    await axios
      .get(`http://pratiliapi.herokuapp.com/api/stories/${this.state.id}`)
      .then((response) => {
        const data = response.data;
        this.setState({ story: data });
        console.log(this.state.story[0]);
      })
      .catch(() => {
        console.log("error");
      });
  };

  displayStory = (story) => {
    if (!story.length) return null;

    return story.map((story, index) => {
      return (
        <div key={index} className="list_story">
          <h3>{story.title}</h3>
          <p className="content"> {story.content}</p>
          <p className="views">Views {story.read_counts}</p>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="story__box">
        <div className="story">{this.displayStory(this.state.story)}</div>
      </div>
    );
  }
}

export default ViewStory;

import React from "react";
import axios from "axios";
import ViewStory from "./ViewStory.js";
import "../Style/Story.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Story extends React.Component {
  state = {
    hrx: "",
    stories: [],
  };

  componentDidMount = () => {
    this.getStories();
  };

  getStories = () => {
    axios
      .get("https://pratiliapi.herokuapp.com/api/stories")
      .then((response) => {
        const data = response.data;
        this.setState({ stories: data });
        console.log(this.state.stories);
      })
      .catch(() => {
        console.log("error");
      });
  };

  printkey = async (i) => {
    await this.setState({ hrx: i + 1 });
  };
  displayStories = (stories) => {
    if (!stories.length) return null;

    return stories.map((story, index) => {
      return (
        <div key={index} className="list">
          <h3>{story.title}</h3>

          <div className="footer">
            <Link to="/indi">
              <button
                className="button"
                type="button"
                onClick={this.printkey.bind(this, index)}
              >
                View
              </button>
            </Link>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <Router>
        <div className="story">
          <Switch>
            <Route path="/story">
              <div className="story__list">
                {this.displayStories(this.state.stories)}
              </div>
            </Route>
            <Route exact path="/indi">
              <ViewStory id={this.state.hrx} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Story;

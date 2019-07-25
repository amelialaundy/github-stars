import React from "react";
import "./App.css";
import moment from "moment";
import { getRepositories } from "../services/github";
import { RepositoryList } from "./repositoryList";

const languages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Swift",
  "TypeScript",
  "Go",
  "SQL",
  "HTML",
  "CSS",
  "Ruby",
  "PHP"];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: languages[0],
      repositories: [],
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getDateThirtyDaysAgo() {
    return moment().subtract("30", "days").format("YYYY-MM-DD");
  }

  async searchGithub(event) {
    event.preventDefault();
    this.setState({ repositories: [] });
    const { selectedLanguage } = this.state;
    const topRepos = await getRepositories(selectedLanguage, this.getDateThirtyDaysAgo());
    this.setState({ repositories: topRepos });
  }

  handleLanguageSelect(event) {
    this.setState({ selectedLanguage: event.target.value });
  }

  render() {
    const { selectedLanguage, repositories } = this.state;

    return (
      <div className="App outer-grid">
        <header className="App-header">
          <p>
Search the top 3 starred GitHub respositories by
            {" "}
            {selectedLanguage || "language"}
            {" "}
created in the last 30 days
          </p>
          <form onSubmit={this.searchGithub.bind(this)}>
            <select
              id="language"
              value={selectedLanguage}
              onChange={this.handleLanguageSelect.bind(this)}
            >
              {this.languages.map(lang => <option value={lang} key={lang}>{lang}</option>)}
            </select>
            <input type="submit" value="Search" />
          </form>
        </header>
        <RepositoryList
          repos={repositories}
        />
      </div>
    );
  }
}

export default App;

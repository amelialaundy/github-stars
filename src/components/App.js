import React from 'react';
import './App.css';
import { getRepositories } from '../services/github';
import { RepositoryList } from './repositoryList';
import moment from "moment";

export class App extends React.Component {
  languages = ["JavaScript", "Python", "Java", "C++", "Swift", "TypeScript", "Go", "SQL", "HTML", "CSS", "Ruby", "PHP"]
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      selectedLanguage: this.languages[0],
      repositories: []
    };
  }

  getDateThirtyDaysAgo() {
    return moment().subtract("30", "days").format("YYYY-MM-DD");
  }

  async searchGithub(event) {
    event.preventDefault();
    this.setState({repositories: []});
    const topRepos = await getRepositories(this.state.selectedLanguage, this.getDateThirtyDaysAgo());
    this.setState({repositories: topRepos});
  }

  handleLanguageSelect(event) {
    this.setState({ selectedLanguage: event.target.value });
  }

  render() {
    return <div className="App outer-grid">
      <header className="App-header">
        <p>Search the top 3 starred GitHub respositories by {this.state.selectedLanguage || "language"} created in the last 30 days</p>
        <form onSubmit={this.searchGithub.bind(this)}>
          <select
            id="language"
            value={this.state.selectedLanguage || this.languages[0]}
            onChange={this.handleLanguageSelect.bind(this)}
          >
            {this.languages.map(lang => {
            return <option value={lang} key={lang}>{lang}</option>
            })}
          </select>
          <input type="submit" value="Search" />
        </form>
      </header>
      <RepositoryList
        repos={this.state.repositories}
        >
      </RepositoryList>
    </div>

  }
}

export default App;

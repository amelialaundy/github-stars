import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getRepositories } from './services/github';

export class App extends React.Component {
  languages = ["JavaScript", "Python", "Java", "C++", "Swift", "TypeScript", "Go", "SQL", "HTML", "CSS", "Ruby", "PHP"]
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      selectedLanguage: null,
    };
  }

  async searchGithub(event) {
    event.preventDefault();
    const topRepos = await getRepositories(this.state.selectedLanguage);
    this.setState({repositories: topRepos})
  }

  handleLanguageSelect(event) {
    console.log({event: event.target.value, selected: this.state.selectedLanguage})

    this.setState({ selectedLanguage: event.target.value });
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Search the top 3 starred GitHub respositories by {this.state.selectedLanguage || 'language'}</p>
        <form onSubmit={this.searchGithub.bind(this)}>
          <select
            id="language"
            value={this.state.selectedLanguage || this.languages[0]}
            onChange={this.handleLanguageSelect.bind(this)}
          >
            {this.languages.map(lang => {
            return <option value={lang}>{lang}</option>
            })}
          </select>
          <input type="submit" value="Search" />
        </form>

      </header>
    </div>
  }
}

export default App;

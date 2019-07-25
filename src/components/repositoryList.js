
import React from 'react';
import { Repository } from './repository';
export class RepositoryList extends React.Component {
  render() {
    return this.props.repos.map(repo => {
      return <Repository
        name={repo.full_name}
        description={repo.description}
        createdAt={repo.created_at}
        stars={repo.stargazers_count}
      >
      </Repository>
    })
  }
}
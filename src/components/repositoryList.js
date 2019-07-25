
import React from 'react';
import { Repository } from './repository';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStarHalfAlt, faStarHalf, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);
library.add(faStarHalfAlt);
library.add(faStarHalf);
//<i class="fas fa-star-half-alt"></i>
const icons = ["star","star-half-alt", "star-half"]
export class RepositoryList extends React.Component {
  render() {
    return this.props.repos.map((repo, i) => {
      return <Repository
        name={repo.full_name}
        description={repo.description}
        createdAt={repo.created_at}
        stars={repo.stargazers_count}
        icon={icons[i]}
        link={repo.html_url}
        key={repo.id}
      >
      </Repository>
    })
  }
}
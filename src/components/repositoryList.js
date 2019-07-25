
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStarHalfAlt, faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";
import { Repository } from "./repository";

library.add(faStar);
library.add(faStarHalfAlt);
library.add(faStarHalf);
const icons = ["star", "star-half-alt", "star-half"];
export class RepositoryList extends React.Component {
  render() {
    const { repos } = this.props;
    return repos.map((repo, i) => (
      <Repository
        name={repo.full_name}
        description={repo.description}
        createdAt={repo.created_at}
        stars={repo.stargazers_count}
        icon={icons[i]}
        link={repo.html_url}
        key={repo.id}
      />
    ));
  }
}

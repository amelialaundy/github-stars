import React from "react";
import './Repository.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

export class Repository extends React.Component {
  render() {
    return <div className="Repository">
      <a href={this.props.link}>{this.props.name}</a>
      <p>{this.props.description}</p>
      <div className="stars">
      <FontAwesomeIcon
            icon={this.props.icon} />
        <p>{this.props.stars}</p>

      </div>
      <p>Created: {moment(this.props.createdAt).format('Do MMMM YYYY')}</p>
    </div>
  }
}
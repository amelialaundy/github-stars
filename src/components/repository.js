import React from "react";

export class Repository extends React.Component {
  render() {
    return <div>
      <p>{this.props.name}</p>
      <p>{this.props.description}</p>
      <p>{this.props.createdAt}</p>
      <p>{this.props.stars}</p>

    </div>
  }
}
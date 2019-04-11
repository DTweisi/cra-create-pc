import React, { Component } from 'react';

export default class MainTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

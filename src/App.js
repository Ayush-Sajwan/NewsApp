import React, { Component } from 'react'

export default class App extends Component {
  name='Ayush';
  render() {
    return (
      <div>
        <h1>This is our class based react app</h1>
        <h2>Created by {this.name}</h2>
      </div>
    )
  }
}


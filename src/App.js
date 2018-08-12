import React, { Component } from 'react';
import './App.css';
import './Map.css';
import Node from './Components/Node';
import { throws } from 'assert';


class App extends Component {
  constructor(){
    super()
    this.state = {
        nodes : [],
        idCounter : 0
    }
    this.handleAddNode = this.handleAddNode.bind(this)
    this.handleRemoveNode = this.handleRemoveNode.bind(this)
}

  handleRemoveNode = (evt) =>{
    console.log(evt.target)
    alert('REMOVED!')
  }


  handleAddNode(){
    let newNode = <Node ondblClick={this.handleRemoveNode.bind(this)} id={this.state.idCounter} key={this.state.nodes.length+1} x={20} y={20} />
    var newState = this.state.nodes.concat(newNode);
    this.setState({ nodes: newState, id: this.state.idCounter++ });
  }

  render() {
    return (
      <div id="map-container">
        <div id="map">
          <svg id="node-box" width="100%" height="100%">
            {this.state.nodes.length && this.state.nodes.map(node=>{
              return node
            })}
          </svg>
        </div>
        <button onClick={this.handleAddNode}>Add Node</button>
      </div>
    )
  }
}

export default App;

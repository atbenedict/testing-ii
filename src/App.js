import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Counters from './counters/Counters';

class App extends Component {
  state ={
    balls:0,
    strikes:0,
  }

  render() {
    return (
      <div className="App">
        <Dashboard
        balls= {this.state.balls}
        strikes= {this.state.strikes}/>
        <Counters
        ball={this.ball}
        strike={this.strike}
        foul={this.foul}
        hit={this.hit}
        />


      </div>
    );
  }

  ball = ()=>{
    if (this.state.balls === 3){
      this.setState({balls:0, strikes:0})
    } else {
      this.setState({balls: this.state.balls+1})
    }


  }

  strike = ()=>{
    if (this.state.strikes === 2){
      this.setState({balls:0, strikes:0})
    } else {
      this.setState({strikes: this.state.strikes+1})
    }


  }

  foul = ()=>{
    if (this.state.strikes <2){
      this.setState({strikes: this.state.strikes+1})
    } else {
      return
    }


  }

  hit = ()=>{
    this.setState({balls:0, strikes:0})
  }
}

export default App;

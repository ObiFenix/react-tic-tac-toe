import React, { Component } from 'react';
import Header from '../components/header';
import TicTacToe from '../components/tic_tac_toe_board';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className="headline">Tic Tc Toe</h1>
        <TicTacToe />
      </div>
    );
  }
}

export default App;

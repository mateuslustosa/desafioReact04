import React, { Component } from "react";

export default class App extends Component {

  mensagem = () => {
    return (
      <div>
        <h2>Mensagem pela função</h2>
      </div>
    );
  };

  dobro = (numero) => {
    return numero * 2;
  }

  render() {
    return (
      <>
        {this.mensagem()}
        <h2>{this.dobro(50)}</h2>
      </>
    );
  }
}
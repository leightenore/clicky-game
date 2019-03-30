import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import animals from "./animals.json";

class App extends Component {
  state = {
    animals,
    clickedArray: [],
    highscore: 0,
    score: 0
  };

  handleClick = () => {
    this.setState({  });
  };

  shuffleAnimals = () => {

  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.animals.map(animals => (
          <AnimalCard
            id={animals.id}
            key={animals.id}
            name={animals.name}
            image={animals.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

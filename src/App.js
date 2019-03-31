import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import AnimalWrapper from "./components/AnimalWrapper";
import AnimalCard from "./components/AnimalCard";
import Title from "./components/Title";
import animals from "./animals.json";

class App extends Component {
  state = {
    animals,
    highscore: 0,
    score: 0,
  };

  componentDidMount = () => {
    this.setState({ animals: this.shuffleAnimals(this.state.animals) });
  }

  shuffleAnimals = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  handleClick = (id, clicked) => {
    if(clicked === false) {

      const clickedArray = [];

      this.state.animals.forEach( (animals) => {
        if(animals.id === id){
          animals.clicked = true;
          this.setState({score: this.state.score + 1});
        }
        clickedArray.push(animals)
      });

      this.setState( { animals: this.shuffleAnimals(clickedArray) } ); 

    } else if(clicked === true) {
      const clickedArray2 =[];

      this.state.animals.forEach( (animals) => {
        animals.clicked = false;
        clickedArray2.push(animals)
      });

      this.setState({ animals: clickedArray2 });

      if(this.state.score > this.state.highscore) {
        this.setState({ highscore: this.state.score });
      }

      this.setState({ score: 0 });

    }
    
  }

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore} />
        <AnimalWrapper>
        {this.state.animals.map(animals => (
          <AnimalCard
          id={animals.id}
          key={animals.id}
          name={animals.name}
          image={animals.image}
          clicked={animals.clicked}
          handleClick={this.handleClick}
          />
        ))}
        </AnimalWrapper>
      </Wrapper>
    );
  }
}

export default App;

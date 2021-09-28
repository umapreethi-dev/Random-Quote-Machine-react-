import React from 'react';
import logo from './logo.svg';
import './App.css';
import quotesData from './quotesData';
import QuotesAuthor from './QuotesAuthor';

class App extends React.Component {
constructor(){
  super()
  this.state = {
      quote: quotesData[0].quote,
      author: quotesData[0].author
  }
  this.handleClick = this.handleClick.bind(this);
}

handleClick(arr) {
// generate random number
let num = Math.floor(Math.random() * quotesData.length);
//assigning new value
let newQuote = quotesData[num];
this.setState({
  quote: newQuote.quote,
  author: newQuote.author
  })
  this.shuffleQuotes(quotesData);
  this.randomColor();

  }

  //shuufle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }
 randomColor(){
  let randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  return randomColor;
 
 }

render() {
  return (
    <div >
      
      <QuotesAuthor 
      randomColor={this.randomColor}
      handleClick={this.handleClick}
      quote={this.state}
      />
      
    </div>
  );
}
}

export default App;

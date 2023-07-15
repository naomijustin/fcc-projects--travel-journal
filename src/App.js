import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import Card from './components/Card.js'
import data from './data.js'
console.log(data);

function App() {
  const cards = data.map(function(item) {
    return (
      <Card/>
    )
  })
  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
}

export default App;

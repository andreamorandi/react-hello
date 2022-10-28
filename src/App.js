import './css/App.css';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Hello React!</h1>
        <img src={require('./img/react-logo.svg').default} />
      </main>
    </div>
  );
}

export default App;
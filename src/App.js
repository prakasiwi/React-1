import logo from './logo.svg';
import './App.css';
//import { apiKeys } from './util'; //untuk import 1 variable dalam 1 file
//import apiKeys2 from './util'; //import default tidak perlu bracket
import * as util from './util'; //import untuk group export

function App() {
  //console.log(apiKeys);
  //console.log(apiKeys2);
  console.log(util.apiKeys3); //cara cek berhasil import dengan group
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

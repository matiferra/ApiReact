import logo from './logo.svg';
import './App.css';
import Api from './ApiMedicamentos';

function App() {
  return (
    <div>
      <header className="App-header">
      <div className="text-right">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

        <Api/>
        
      </header>
    </div>
  );
}

export default App;

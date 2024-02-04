import './App.css';
import Titulos from './components/Titulos';
import Parrafo from './components/Parrafo';
import Imagen from './components/Imagen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulos color="#318CE7" fontFamily="cursive" fontSize="2rem"></Titulos>
        <Parrafo color="gray" fontFamily="Arial" fontSize="1rem"></Parrafo>
        <Imagen border="3px solid" color="#CC3333"></Imagen>
      </header>
    </div>
  );
}

export default App;

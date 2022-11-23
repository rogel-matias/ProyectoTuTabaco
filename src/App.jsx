// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <div className="App bg-stone-400">
      <NavBar/>
      <ItemListContainer greeting="Hola buenas tardes"/>
    </div>
  );
}

export default App;

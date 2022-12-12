// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { ItemListContainer } from './components/Market/ItemListContainer';
import { ItemDetailContainer } from './components/Market/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <div className="App bg-stone-400">
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Aqui podras encontrar TODOS nuestros productos" />}/>
                <Route path="/category/:categoryId" element={<ItemListContainer greeting="Aqui encontraras solo algunos" />}/>
                <Route path="/item/:id" element={<ItemDetailContainer />}/>
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import { ItemListContainer } from './components/market/ItemListContainer';
import { ItemDetailContainer } from './components/market/ItemDetailContainer';
import { Routes, Route} from "react-router-dom"
import { CartContainer } from './components/market/CartContainer';
import { FormOrder } from './components/market/FormOrder';
import './components/market/marketStyle.css'   

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<CartContainer />}/>
            <Route path="/formOrder" element={<FormOrder />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles';
import { UserContextProvider } from './context/User';
import Home from "./pages/Home";
import Login from './pages/Login';
import ModeDeLivraison from './pages/ModeDeLivraison';
import Signup from './pages/Signup';
import Product from './pages/Product';
import Contacter from './pages/Contacter'
import Panier from './pages/Panier';
import NotreHistoire from './pages/NotreHistoire';
import Profil from './pages/Profil';
import { CartContextProvider } from './context/Cart';
import { LineItemContextProvider } from './context/LineItem';
import Products from './pages/Products'
import CategoryPage from './pages/CategoryPage';
import PaymentPage from './pages/PaymentPage'
import NotFound from './pages/NotFound';
const App = () => {
  return (
  <BrowserRouter>
    <LineItemContextProvider>
      <UserContextProvider>
        <CartContextProvider>
            <GlobalStyle/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/modedelivraison" element={<ModeDeLivraison/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/categories/:id" element={<CategoryPage/>}/>
              <Route path="/histoire" element={<NotreHistoire/>}/>
              <Route path="/product/:id" element={<Product/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/panier" element={<Panier/>}/>
              <Route path="/profil" element={<Profil/>}/>
              <Route path="/contacter" element={<Contacter/>}/>
              <Route path="/checkout" element={<PaymentPage/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/checkout" element={<PaymentPage/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </CartContextProvider>
      </UserContextProvider>
    </LineItemContextProvider>
  </BrowserRouter>
  )
};

export default App;
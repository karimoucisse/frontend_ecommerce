import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles';
import { UserContextProvider } from './context/User';
import { UserContext } from "./context/User";
import { useContext} from "react";

import Home from "./pages/Home";
import Login from './pages/Login';
import ModeDeLivraison from './pages/ModeDeLivraison';
import Signup from './pages/Signup';
import Poissons from './pages/products/Poissons';
import Coquillages from './pages/products/Coquillages';
import Crustaces from './pages/products/Crustaces';
import Festif from './pages/products/Festif';
import FilletPoissons from './pages/products/FilletPoissons';
import Product from './pages/Product';
import Panier from './pages/Panier';
import NotreHistoire from './pages/NotreHistoire';
import Profil from './pages/Profil';
import { CartContextProvider } from './context/Cart';
import Products from './pages/Products'
const App = () => {
  const {user} = useContext(UserContext)
  return (
    <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <GlobalStyle/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/modedelivraison" element={<ModeDeLivraison/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/poisson_entiers" element={<Poissons/>}/>
            <Route path="/coquillages" element={<Coquillages/>}/>
            <Route path="/crustaces" element={<Crustaces/>}/>
            <Route path="/histoire" element={<NotreHistoire/>}/>
            <Route path="/produit_festif" element={<Festif/>}/>
            <Route path="/fillet_de_poissons" element={<FilletPoissons/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/panier" element={<Panier/>}/>
            <Route path="/profil" element={<Profil/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </UserContextProvider>
  )
};

export default App;

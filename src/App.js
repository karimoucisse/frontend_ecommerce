import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles';
import { UserContextProvider } from './context/User';
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Poissons from './pages/products/Poissons';
import Coquillages from './pages/products/Coquillages';
import Crustaces from './pages/products/Crustaces';
import Festif from './pages/products/Festif';
import FilletPoissons from './pages/products/FilletPoissons';
import Product from './pages/Product';

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/poisson_entiers" element={<Poissons/>}/>
          <Route path="/coquillages" element={<Coquillages/>}/>
          <Route path="/crustaces" element={<Crustaces/>}/>
          <Route path="/produit_festif" element={<Festif/>}/>
          <Route path="/fillet_de_poissons" element={<FilletPoissons/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
};

export default App;

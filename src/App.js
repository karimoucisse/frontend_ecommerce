import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles';
import { UserContextProvider } from './context/User';
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
};

export default App;

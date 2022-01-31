import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles';
import { UserContextProvider } from './context/User';
import Home from "./pages/Home";

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
};

export default App;

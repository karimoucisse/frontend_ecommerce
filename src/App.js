import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import header from "./component/header";

const App = () => {
  return <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<home/>}/>
            <Route path="/header" element={<header/>}/>
        
          </Routes>
      </BrowserRouter>
      </div>;
};

export default App;

import './App.css';

import Iniciar from './user/Iniciar';
import Detener from './user/Detener';
import Listo from './user/Listo';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {

  return (
          <BrowserRouter>
            <Routes>
              <Route path="/listo" element={<Listo />} />
              <Route path="/iniciar" element={<Iniciar />} />
              <Route path="/detener" element={<Detener />} />
            </Routes>
          </BrowserRouter>
  );
}

export default App;

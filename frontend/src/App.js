import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import AllRoutes from './routes/AllRoutes';

function App() {
  const [hamState, setHamState] = useState(true);
  return (
    <>
      <Navbar hamState={hamState} setHamState={setHamState} />
      <AllRoutes hamState={hamState} />
    </>
  );
}

export default App;

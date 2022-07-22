
import './App.css';
import Header from './component/header/Header'
import MainContent from './component/main_content/MainContent'
import { Route, Routes,Redirect  } from 'react-router-dom';
import Currencys from './component/main_content/currencys/Currencys';
function App() {
  return (
    <>
      <Header/>
      <MainContent />
      <Routes>
        <Route path="/" element={<Currencys />} />
        <Route path="/USD" element={<Currencys />} />
        <Route path="/EUR" element={<Currencys />} />
        <Route path="/PLN" element={<Currencys />} />
        
      </Routes>
    </>
  );
}

export default App;

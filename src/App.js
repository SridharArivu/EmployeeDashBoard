
import Home from "../src/components/Home/Home";
import Header from "../src/components/Header/Header";
import Employee from "./pages/Employee";
import Footer from '../src/components/Footer/Footer'
import { Routes, Route , BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <>
     <Header/>
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/employee" element={<Employee/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;

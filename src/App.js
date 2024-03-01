import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './Components/Services/index.jsx';
import Products from './Components/Products/index.jsx';
import CustomerCare from './Components/CustomerCare/index.jsx';
 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Services/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/customer-care' element={<CustomerCare/>}/>
    </Routes>
    </BrowserRouter>
  );
}
 
export default App;
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExpenseCreate from './components/ExpenseCreate';
import ExpenseEdit from './components/ExpenseEdit';
import ExpenseDelete from './components/ExpenseDelete';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/about" element={<AboutPage /> } />
      <Route path="/contact" element={<ContactPage />} /> 
      <Route path="*" element={ <ErrorPage /> } />
      <Route path='/login' element = {<LoginPage /> } />
      <Route path='/register' element = {<RegisterPage /> } />
      <Route path='/create' element = {<ExpenseCreate /> } />
      <Route path='/edit' element = {<ExpenseEdit /> } />
      <Route path='/delete' element = {<ExpenseDelete /> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

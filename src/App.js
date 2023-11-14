
import './App.css';
import{Route,Routes} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Details from './pages/Details/Details';
import Android from './pages/Android/Android';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Accessories from './pages/Accessories/Accessories';
import Memory from './pages/Memory/Memory';
import AboutUs from './DropDown/AboutUs/AboutUs';
import Contact from './DropDown/Contact/Contact';
import Blog from './DropDown/Blog/Blog';
import Faqs from './DropDown/Faqs/Faqs';


function App() {
  return (
  <>
  <Nav />
  <Routes>
  <Route path='' element={ <NavBar />} />
  <Route path='/shop' element={<Details />} />
  <Route path='/Android' element={<Android />} />
  <Route path='/Accessories' element={<Accessories />} />
  <Route path='/Memory' element={<Memory />} />
  <Route path='/about' element={<AboutUs />} />
  <Route path='/contact' element={<Contact />}/>
  <Route path='/blog' element={<Blog />}/>
  <Route path='/faqs' element={<Faqs />}/>
  
  
  </Routes>
  <Footer />
</>
)
}

export default App;

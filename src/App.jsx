import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import {Home,About,Projects,Contact} from './pages'

const App = () => {
  return (
    <main className='bg-slate-300/20 '>
      <Router>
        <Navbar/>
        <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path = "/sobre" element={<About/>}/>
        <Route path = "/projetos" element={<Projects/>}/>
        <Route path = "/contato" element={<Contact/>}/>
        </Routes>
      </Router>
    </main>
  );
};

export default App;

import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import {Home} from './components/Home/Home'
import {About} from './components/About/About'
import {Students} from './components/Students/Students'
import {Board} from './components/Board/Board'
import {Media} from './components/Media/Media'
import {Startups} from './components/Startups/Startups'
import {Work} from './components/Work/Work'
import {Apply} from './components/Apply/Apply'
import {Blog} from './components/Blog/Blog'
import { Footer } from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path = '/' element = {<Home />} />
        <Route path = 'about' element = {<About />} />
        <Route path = 'students' element = {<Students />} /> 
        <Route path = 'board' element = {<Board />} />
        <Route path = 'media' element = {<Media />} />
        <Route path = 'startups' element = {<Startups />} /> 
        <Route path = 'blog' element = {<Blog />} /> 
        <Route path = 'work' element = {<Work />} /> 
        <Route path = 'apply' element = {<Apply />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

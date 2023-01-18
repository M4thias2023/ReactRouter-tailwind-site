import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import {Navbar} from './components/barranavegadora'
import {ComponenteHome} from './components/componenteHome'
import { ComponenteAbout } from './components/componenteabout'
import { ComponentePrincipal } from './components/componenteprincipal'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ComponentePrincipal/>}/>
          <Route path='/home' element={<ComponenteHome/>}/>
          <Route path='/about' element={<ComponenteAbout/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ContextoGlobalProvider } from './contexto'
import { Layout } from './components/layout'
import { BemVindo } from './components/bemvindo'
import { Sobre } from './pages/sobre'
import { Projetos } from './pages/projetos'

function App() {
  
  return (
    <ContextoGlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<BemVindo />}></Route>
            <Route path='/sobre' element={<Sobre />}></Route>    
            <Route path='/projetos' element={<Projetos />}></Route>         
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextoGlobalProvider>
  )
}

export default App

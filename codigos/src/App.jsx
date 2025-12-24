import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ContextoGlobalProvider } from './contexto'
import { Layout } from './components/layout'
import { BemVindo } from './components/bemvindo'
import { Sobre } from './pages/sobre'
import { Projetos } from './pages/projetos'
import { NotFound } from './pages/notFound'
import { EmConstrucao } from './components/emConstrucao'

function App() {
  
  return (
    <ContextoGlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<BemVindo />}></Route>
            <Route path='/sobre' element={<Sobre />}></Route>    
            <Route path='/projetos' element={<Projetos />}></Route>
            <Route path='*' element={<EmConstrucao />}></Route> {/* Mudar para NOTFOUND após a construção das paginas restantes. */}        
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextoGlobalProvider>
  )
}

export default App

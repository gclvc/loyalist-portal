import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NichePage from './pages/NichePage'

function App() {
  return (
    <div className="min-h-screen bg-background text-pure-white flex flex-col font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:nicheId" element={<NichePage />} />
      </Routes>
    </div>
  )
}

export default App

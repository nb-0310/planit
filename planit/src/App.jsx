import Home from './Pages/Home'
import Scheduler from './Pages/Scheduler'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scheduler" element={<Scheduler />} />
    </Routes>
  )
}

export default App

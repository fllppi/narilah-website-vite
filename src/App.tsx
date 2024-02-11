import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import '@mantine/core/styles.css';

import { Homepage } from './pages/Homepage'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

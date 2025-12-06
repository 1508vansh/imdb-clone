import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MovieCard from './MovieCard.jsx'
import '../style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieCard/>
  </StrictMode>,
)

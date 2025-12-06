import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../style.css';
import Url_validator from './url_validator';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Url_validator/>
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "@fontsource/montserrat/300.css"; 
import "@fontsource/montserrat/400.css"; 
import "@fontsource/montserrat/500.css"; 
import "@fontsource/montserrat/600.css"; 
import "@fontsource/montserrat/700.css";

import "@fontsource/poppins/300.css"; 
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/500.css"; 
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/700.css";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
</BrowserRouter>
)

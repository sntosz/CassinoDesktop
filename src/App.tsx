import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routers/routes';

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

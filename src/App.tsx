import './App.css';
import { AppRoutes } from './routers/routes';
import { BrowserRouter } from 'react-router'

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

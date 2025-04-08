import { Home } from "@/pages/home";
import { Login } from "@/pages/login";
import { Register } from "@/pages/register";
import { ConfirmPassword } from "@/pages/register/confirmPassword";
import TransactionsPage from "@/pages/transactions";
import { Routes, Route } from 'react-router'

export const ROUTES = {
  HOME: '/home',
  ENTRAR: '/',
  CADASTRAR: '/cadastrar',
  CONFIRMARSENHA: '/confirmar-senha',
} as const

export type RoutePaths = keyof typeof ROUTES
export type RoteUrls = (typeof ROUTES)[RoutePaths]

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.ENTRAR} element={<TransactionsPage />} />
      <Route path={ROUTES.CADASTRAR} element={<Register />} />
      <Route path={ROUTES.CONFIRMARSENHA} element={<ConfirmPassword />} />
    </Routes>
  )
};

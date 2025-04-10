import { EditarPerfil } from "@/pages/edit_profile";
import { Home } from "@/pages/home";
import { Login } from "@/pages/login";
import { Register } from "@/pages/register";
import { ConfirmPassword } from "@/pages/register/confirmPassword";
import { Transactions } from "@/pages/transactions";
import { Routes, Route } from 'react-router'

export const ROUTES = {
  HOME: '/home',
  ENTRAR: '/',
  CADASTRAR: '/cadastrar',
  CONFIRMARSENHA: '/confirmar-senha',
  TRANSACOES: '/transacoes',
} as const

export type RoutePaths = keyof typeof ROUTES
export type RoteUrls = (typeof ROUTES)[RoutePaths]

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.ENTRAR} element={<Login />} />
      <Route path={ROUTES.CADASTRAR} element={<Register />} />
      <Route path={ROUTES.CONFIRMARSENHA} element={<ConfirmPassword />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.TRANSACOES} element={<Transactions />} />
    </Routes>
  )
};

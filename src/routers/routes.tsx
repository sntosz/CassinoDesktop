import { Profile } from "@/pages/profile";
import { Configuration } from "@/pages/configuration";
import { Home } from "@/pages/home";
import { Login } from "@/pages/login";
import { Register } from "@/pages/register";
import { Transactions } from "@/pages/transactions";
import { Routes, Route } from 'react-router'

export const ROUTES = {
  HOME: '/home',
  ENTRAR: '/',
  CADASTRAR: '/cadastrar',
  TRANSACOES: '/transacoes',
  PERFIL: '/perfil',
  CONFIGURACOES: '/configuraçoes'
} as const

export type RoutePaths = keyof typeof ROUTES
export type RoteUrls = (typeof ROUTES)[RoutePaths]

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.ENTRAR} element={<Login />} />
      <Route path={ROUTES.CADASTRAR} element={<Register />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.TRANSACOES} element={<Transactions />} />
      <Route path={ROUTES.PERFIL} element={<Profile />} />
      <Route path={ROUTES.CONFIGURACOES} element={<Configuration />}/>
    </Routes>
  )
};

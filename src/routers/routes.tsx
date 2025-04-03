import { Home } from "@/pages/home";
import { Login } from "@/pages/login";
import { Routes, Route } from 'react-router'

export const ROUTES = {
  HOME: '/home',
  ENTRAR: '/',
  CADASTRAR: '/cadastrar',
} as const

export type RoutePaths = keyof typeof ROUTES
export type RoteUrls = (typeof ROUTES)[RoutePaths]

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.ENTRAR} element={<Login />} />
    </Routes>
  )
};

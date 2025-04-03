import { Home } from "@/pages/home";
import { Register } from "@/pages/register";
import { Routes, Route } from 'react-router'

export const ROUTES = {
  HOME: '/aa',
  ENTRAR: '/entrar',
  CADASTRAR: '/',
} as const

export type RoutePaths = keyof typeof ROUTES
export type RoteUrls = (typeof ROUTES)[RoutePaths]

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.CADASTRAR} element={<Home />} />
    </Routes>
  )
};

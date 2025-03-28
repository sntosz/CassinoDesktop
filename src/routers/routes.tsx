import { Home } from "@/pages/home";
import { Routes, Route } from 'react-router'

export const ROUTES = {
  HOME: '/',
  ENTRAR: '/entrar',
  CADASTRAR: '/cadastrar',
} as const

export type RoutePaths = keyof typeof ROUTES
export type RoteUrls = (typeof ROUTES)[RoutePaths]

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  )
};

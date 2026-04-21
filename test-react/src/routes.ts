export const ROUTES = {
  HOME: '/',
  HELLO: '/hello',
} as const

export type RouteKey = keyof typeof ROUTES

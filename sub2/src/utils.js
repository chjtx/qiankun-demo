export const addRoutePrefix = function(path) {
  return `/app/${import.meta.env.VITE_APP_NAME}/views/${path}`
}

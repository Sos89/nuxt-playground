export default function ({ redirect, store, route }) {
  const isAuthenticated = store.state.login.email ? true : false
  if (isAuthenticated && route.path === '/login'){
    redirect('/code')
  }
}

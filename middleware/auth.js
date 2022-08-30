export default function ({redirect, store}) {
  const isAuthenticated = store.state.login.email ? true : false
  if (!isAuthenticated) {
    redirect('/login')
  }
}

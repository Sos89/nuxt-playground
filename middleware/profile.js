export default function ({redirect, store}) {
  const isAuthenticated = store.state.code.code ? true : false
  if (!isAuthenticated) {
    redirect('/login')
  }
}

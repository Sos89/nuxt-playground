export default function ({redirect, store,route}) {
  const isAuthenticated = store.state.login.email ? true : false
  const token = store.state.code.code ? true : false
  if (!isAuthenticated) {
    redirect('/login')
  }else if (token){
    redirect('/')
  }
}

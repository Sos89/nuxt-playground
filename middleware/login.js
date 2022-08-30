export default function ({redirect, store}) {
  const logined = store.state.login.email ? true : false
  if (logined) {
    // redirect('/myProfile')
    window.history.back()
  }
}

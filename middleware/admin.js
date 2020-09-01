export default ({store, error, redirect, res}) => {
  const { token } = store.user.token
  if (!token) {
    redirect('/login')
  }
}
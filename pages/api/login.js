import axios from 'axios'
// import withSession from '../../lib/session'

export default withSession(async (req, res) => {
  const { email, password } = await req.data
  const newBody = {
      email : email,
      password : password
  }
  const url = `${process.env.API_URL}/auth/login`

  try {
      console.log('udah masuk api login')
    // we check that the user exists on GitHub and store some data in session
    const { is_login, id } = await axios(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBody),
      })
    const user = { isLoggedIn: true, is_login, id }
    req.session.set('user', user)
    await req.session.save()
    res.json(user)
  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error.data)
  }
})
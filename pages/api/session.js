import { withIronSession } from 'next-iron-session'

export default withIronSession(
  async (req, res) => {
    req.session.set("user", req.body)
    await req.session.save()
    return res.status(200).send("");
  },
  {
    cookieName: "NEWSAPP-COOKIE",
    cookieOptions: {
      secure: false
    },
    password: `${process.env.SECRET_COOKIE_PASSWORD}`
  }
);
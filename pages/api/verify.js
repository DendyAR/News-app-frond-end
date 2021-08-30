import { withIronSession } from "next-iron-session";

async function handler(req, res, session) {
  const user = await req.session.get("users");
  user ? res.send({user, isLoggedIn : true}) : res.send({isLoggedIn : false})
}

export default withIronSession(handler, {
  cookieName: "NEWSAPP-COOKIE",
  cookieOptions: {
    secure: false
  },
  password: `${process.env.SECRET_COOKIE_PASSWORD}`
});
import styles from "../../styles/auth.module.css";
import { Footer, Header } from "../../components";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { userLogin } from "../../lib/fetchUser";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(
        `${process.env.API_URL}/auth/login`,
        data,
        setLoading,
        router
      );
    } catch (error) {}
  };
  return (
    <>
      <Header/>
      <body>
        <section className="container-fluid">
          <main>
            <div className="row">
              <div className={`col-12 col-sm-12 col-md-12 col-lg-6 d-none d-sm-none d-md-block ${styles.sideform}`}></div>
              <div className="col-12 col-sm-12 col-md-12 d-block col-lg-6">
                <div className="mx-sm-5 mx-md-5 px-5 mt-3">
                  <h1 className="fw-bold">Sign Up</h1>
                  <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="mb-3">
                      <label htmlFor="inputEmail" className="form-label">
                        Email address :{" "}
                      </label>
                      <input
                        type="email"
                        className="form-control border-radius p-3"
                        id="inputEmail"
                        aria-describedby="emailHelp"
                        onChange={(e)=>setData({...data, email:e.target.value})}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="inputPassword" className="form-label">
                        Password :{" "}
                      </label>
                      <input
                        type="password"
                        className="form-control border-radius p-3"
                        id="inputPassword"
                        onChange={(e)=>setData({...data, password:e.target.value})}
                      />
                    </div>
                    <div className="d-grid gap-2 mt-5 mb-2">
                      <button
                        className="btn btn-blue btn-lg border-radius p-3 mb-3 shadow-sm"
                        type="button"
                        onClick ={(e)=>handleSubmit(e)}
                      >
                        Login
                      </button>
                      <span className="ps-4 text-center text-uppercase text-blue">
                        Or Login with
                      </span>
                    </div>
                  </form>
                  <div className="d-flex justify-content-center mx-5 my-3">
                    <div className="px-5">
                      <img src="./icon/Google.svg" className="icon" />
                    </div>
                    <div className="px-5">
                      <img src="./icon/Facebook.svg" className="icon" />
                    </div>
                    <div className="px-5">
                      <img src="./icon/Twitter.svg" className="icon" />
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="line my-5">
                      <small className="text-info">
                        Don’t have an account?
                      </small>
                    </div>
                  </div>
                  <div className="d-grid gap-2 mt-5 mb-2">
                  <Link href='/register'>
                    <button
                      className="btn btn-dark btn-lg border-radius p-3 mb-3 shadow-sm"
                      type="button"
                    >
                      Sign Up Now
                    </button>
                  </Link>
                  <Link href='/'>
                    <span className="text-center fw-bold mb-5">
                      Back to Home Page
                    </span>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
        <Footer/>
      </body>
    </>
  );
}

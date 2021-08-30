import styles from "../../styles/auth.module.css";
import { Footer, Header } from "../../component";
export default function ForgotPassword() {
  return (
    <>
        <Header title='Forgot Password'/>
      <body>
        <section className="container-fluid">
          <main>
            <div className="row">
              <div className={`col-12 col-sm-12 col-md-12 col-lg-6 d-none d-sm-none d-md-block ${styles.sideform2}`}></div>
              <div className="col-12 col-sm-12 col-md-12 d-block col-lg-6 p-0">
                <div className="mx-sm-5 mx-md-5 px-5 my-3">
                  <div className="my-3">
                    <h1 className="fw-bold">DON’T WORRY</h1>
                    <span className="text-muted">
                      We are here to help you to recover your password. Enter
                      your email adress that you used to register and we’ll give
                      you instructions to reset your password.
                    </span>
                  </div>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control border-radius p-3"
                        id="inputEmail"
                        placeholder="Enter your email adress"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="d-grid gap-2 mt-5 mb-2">
                      <button
                        className="btn btn-blue btn-lg border-radius p-3 mb-3 shadow-sm"
                        type="button"
                      >
                        Send Link
                      </button>
                      <button
                        className="btn btn-blue-light btn-lg border-radius p-3 mb-3 shadow-sm"
                        type="button"
                      >
                        Resend link
                      </button>
                    </div>
                  </form>
                </div>
                <Footer/>
              </div>
            </div>
          </main>
        </section>
      </body>
    </>
  );
}

import styles from "../../styles/auth.module.css";
import { Footer, Header } from "../../component";
import Link from "next/link";
import { useState } from "react";
import { userRegister } from "../../lib/fetchUsers";
import { Modal, Button} from "react-bootstrap";
import Fetcher from "../../lib/fetcher";


export default function Register() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    phone_number: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await Fetcher({
        method : 'POST',
        url  : `${process.env.API_URL}/auth/register`,
        data : data
      });
      if(response.status == 201){
        setLoading(false);
        /*  alert(result.data.message); */
        setMessage(response.message);
        setShow(true);
      }else{
        setLoading(false);
        /*  alert(result.data.message); */
        setMessage(result.message);
        setShow(true);
      }
      /* const response = await userRegister(
        `${process.env.API_URL}/auth/register`,
        data,
        setLoading
      ); */
    } catch (error) {}
  };
  return (
    <>
      <Header title="register" />
      <body>
        <section className="container-fluid">
          <main>
            <div className="row">
              <div
                className={`col-12 col-sm-12 col-md-12 col-lg-6 d-none d-sm-none d-md-block ${styles.sideform}`}
              ></div>
              <div className="col-12 col-sm-12 col-md-12 d-block col-lg-6">
                <div className="mx-sm-5 mx-md-5 px-5 mt-3">
                  <h1 className="fw-bold">Sign Up</h1>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                      <label htmlFor="inputEmail" className="form-label">
                        Email address :{" "}
                      </label>
                      <input
                        type="email"
                        className="form-control border-radius p-3"
                        id="inputEmail"
                        aria-describedby="emailHelp"
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
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
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input_phone_number" className="form-label">
                        phone number Number :{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control border-radius p-3"
                        id="input_phone_number"
                        onChange={(e) =>
                          setData({ ...data, phone_number: e.target.value })
                        }
                      />
                    </div>
                    <div className="d-grid gap-2 mt-5 mb-2">
                      {!loading ? (
                        <button
                          className="btn btn-blue btn-lg border-radius p-3 mb-3 shadow-sm"
                          type="button"
                          onClick={(e) => handleSubmit(e)}
                        >
                          Sign Up
                        </button>
                      ) : (
                        <button
                          className="btn btn-success btn-lg border-radius p-3 mb-3 shadow-sm"
                          type="button"
                          disabled
                          onClick={(e) => handleSubmit(e)}
                        >
                          <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </button>
                      )}
                      <small className="ps-4 text-center text-uppercase text-blue">
                        Or sign up with
                      </small>
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
                      <span className="text-info">
                        Already have an account?
                      </span>
                    </div>
                  </div>
                  <div className="d-grid gap-2 mt-5 mb-2">
                    <Link href="/login">
                      <button
                        className="btn btn-dark btn-lg border-radius p-3 mb-3 shadow-sm"
                        type="button"
                      >
                        Login Here
                      </button>
                    </Link>
                    <Link href="/">
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
        <Footer />
        <Modal
          show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(false)}
      >
        <div className='border-radius-10'>
          <Modal.Header closeButton>
            <Modal.Title>
              <h1 className="navbar-brand fw-bold" href="#">
                News Today
              </h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='py-3 px-3'>
            {/* <Image className="icon mx-4" src="/images/face1.png" /> */}
            <div className="d-flex flex-row bd-highlight mb-3">
              <h3 className="mx-auto w-100 text-danger text-center align-self-center">{message}</h3>
            </div>
            <Button onClick={() => setShow(false)} className='float-end my-3'>Close</Button>
          </Modal.Body>
        </div>
      </Modal>
      </body>
    </>
  );
}

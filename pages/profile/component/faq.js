const Faq = () => {
  return (
    <>
      <main className="container-fluid mt-5">
        <section>
          <h1 className="text-center text-primary">FAQ</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1. What is News Today ?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>News Today is news portal website</strong>. With News Today you can read news and posting your own news.
                  you can request to be author before you post the news, if you just read the news, you can register and you will
                  to be member, you can read, comment, like and save news on your profile !
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2. How to be author ?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>To join to be author it's very simple ! </strong> First go to your profile, and touch or select 
                  button request to be author and you will get code verification on your email.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3. Why using real email for join author ?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Because to minimalize news Hoax ! </strong> you can report the news if its hoax, so this website its very usefull for everyone
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Faq;

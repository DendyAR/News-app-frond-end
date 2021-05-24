export default function Footer() {
  return (
    <footer className="footer">
      <div className="row mx-auto px-5 pt-5">
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column align-items-start bd-highlight mb-3">
            <span className="p-2 mb-3 bd-highlight">Why News Today</span>
            <span className="p-2 mb-3 bd-highlight">Be an author</span>
            <span className="p-2 mb-3 bd-highlight">Community</span>
            <span className="p-2 mb-3 bd-highlight">FAQ</span>
          </div>
        </div>
        <div className="d-none d-md-block col-lg-6">
          <div className="d-flex flex-column align-items-end bd-highlight mb-3 text-end">
            <h3 className="p-2 mb-3 bd-highlight fw-bold">News Today</h3>
            <span className="p-2 mb-3 bd-highlight">
              Jendral Sudirman Street No. 23
              <br />
              Jakarta, Indonesia
            </span>
            <span className="p-2 mb-3 bd-highlight">(621)989898934</span>
            <span className="p-2 mb-3 bd-highlight">newstoday@mail.com</span>
          </div>
        </div>
        <div className="d-block d-md-none col-lg-6">
          <div className="d-flex flex-column align-items-start bd-highlight mb-3 text-start">
            <h3 className="p-2 mb-3 bd-highlight fw-bold">News Today</h3>
            <span className="p-2 mb-3 bd-highlight">
              Jendral Sudirman Street No. 23
              <br />
              Jakarta, Indonesia
            </span>
            <span className="p-2 mb-3 bd-highlight">(621)989898934</span>
            <span className="p-2 mb-3 bd-highlight">newstoday@mail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SavedPost = () => {
  const data = [
  {
   message:'success'
  },
  {
    message:'success'
   },
   {
    message:'success'
   },
   {
    message:'success'
   }]
  return (
    <>
      <h5 className="text-center text-primary mt-5">Saved Post</h5>
      <div className="row mt-5 mx-3">
      {data.map((element)=>(
        <div className="col-12 col-lg-4 card border-radius m-2 p-0">
          <div className="d-flex flex-column bd-highlight mb-3">
            <div className="bd-highlight poster-overfow overflow-hidden border-radius-top">
              <img src="./images/unsplash.png" alt="..." />
            </div>
            <div className="p-2 bd-highlight text-center">
              <span className="text-primary fw-bolder">COVID-19</span>
              <div className="d-flex flex-column bd-highlight mt-3">
                <div className="bd-highlight">
                  Why corona never ends? Let’s see how its facts
                </div>
              </div>
            </div>
            <div className="p-2 bd-highlight text-center">
              <div className="d-flex justify-content-between">
                <div className="p-2 bd-highlight">
                  <img src="./icon/Like.svg" alt="..." />
                  <small> 2.1k</small>
                </div>
                <div className="p-2 bd-highlight">
                  <img src="./icon/Clock.svg" alt="..." />
                  <small> 2.1k</small>
                </div>
                <div className="p-2 bd-highlight">
                  <img src="./icon/Borkmark.svg" alt="..." />
                  <small> 2.1k</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default SavedPost

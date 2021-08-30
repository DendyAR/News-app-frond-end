import { Navbar, Footer, Header } from "../component";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Fetcher from "../lib/fetcher";
import Link from 'next/link'

function Home(props) {
  const limit = 10
  const offset = 1
  const initialData = props.news;
  //ini use sw
  /* const { news: data } = fetchNews({limit:limit, offset : offset}) */
  const { data } = useSWR(null, Fetcher({method:'GET', url:`${process.env.API_URL}/news/api`,params:{limit:limit, offset:offset}}), {
    initialData,
  });
  console.log(data)

  return (
    <>
      <Header title="Dashboard" />
      <Navbar state='home'/>
      <section className="container-fluid p-0 pt-5">
        <div className={styles.banner}>
          <div className="col-md-12 col-lg-5 my-5 p-5">
            <h1>Share Information and Educate People</h1>
            <span>
              Everyone has their point of view of something, but just don’t be
              afraid to express the facts. Be an author and share you
              prespective of something to the world.
            </span>
            <br />
            <Link href='/articles'><button className="btn btn-blue p-3 mt-4">Start Exploring</button></Link>
          </div>
        </div>
        <div className={styles.filter}>
          <div className="d-flex justify-content-between">
            <h4 className="p-5 bd-highlight fw-bold">Popular Tags</h4>
            <span className="p-5 bd-highlight text-info fw-bold">More</span>
          </div>
          <div className="d-flex flex-row bd-highlight mb-5 px-3">
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
            <div className={`${styles.gba_blue} p-2 mx-3`}>
              <span className="text-blue">#ladygaga</span>
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <div className="d-flex justify-content-between">
            <h4 className="p-5 bd-highlight fw-bold">Category</h4>
            <span className="p-5 bd-highlight text-info fw-bold">More</span>
          </div>
          <div className="d-flex flex-row bd-highlight mb-5 px-0 mx-5">
            <div className="d-flex flex-column bd-highlight mx-3">
              <img
                src="./images/goverment.png"
                alt="..."
                className="shadow-lg bg-transparent"
              />
              <span className="text-center fw-bold mt-3"> Goverment </span>
            </div>
            <div className="d-flex flex-column bd-highlight mx-3">
              <img
                src="./images/goverment.png"
                alt="..."
                className="shadow-lg bg-transparent"
              />
              <span className="text-center fw-bold mt-3"> Economy </span>
            </div>
            <div className="d-flex flex-column bd-highlight mx-3">
              <img
                src="./images/goverment.png"
                alt="..."
                className="shadow-lg bg-transparent"
              />
              <span className="text-center fw-bold mt-3"> Health </span>
            </div>
            <div className="d-flex flex-column bd-highlight mx-3">
              <img
                src="./images/goverment.png"
                alt="..."
                className="shadow-lg bg-transparent"
              />
              <span className="text-center fw-bold mt-3"> Goverment </span>
            </div>
            <div className="d-flex flex-column bd-highlight mx-3">
              <img
                src="./images/goverment.png"
                alt="..."
                className="shadow-lg bg-transparent"
              />
              <span className="text-center fw-bold mt-3"> Economy </span>
            </div>
            <div className="d-flex flex-column bd-highlight mx-3">
              <img
                src="./images/goverment.png"
                alt="..."
                className="shadow-lg bg-transparent"
              />
              <span className="text-center fw-bold mt-3"> Health </span>
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <div className="d-flex justify-content-between">
            <h4 className="p-5 bd-highlight fw-bold">Recommended</h4>
            <span className="p-5 bd-highlight text-info fw-bold">More</span>
          </div>
          <div className="d-flex flex-row mb-5 px-0 mx-5">
            <div className="card border-radius border-0 mx-3 shadow-lg">
              <div className="row">
                <img
                  src="./images/corona.png"
                  alt="..."
                  className={styles.article_cover}
                />
                <div className={`${styles.content} ms-3 my-3`}>
                  <span className="text-blue">COVID-19</span>
                  <div className="d-flex flex-column bd-highlight mt-3">
                    <div className="bd-highlight">
                      Why corona never ends? Let’s see how its facts
                    </div>
                  </div>
                  <div className="mt-5">
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
            </div>
            <div className="card border-radius border-0 mx-3 shadow-lg">
              <div className="row">
                <img
                  src="./images/corona.png"
                  alt="..."
                  className={styles.article_cover}
                />
                <div className={`${styles.article_headline} ms-3 my-3`}>
                  <span className="text-blue">COVID-19</span>
                  <div className="d-flex flex-column bd-highlight mt-3">
                    <div className="bd-highlight">
                      Why corona never ends? Let’s see how its facts
                    </div>
                  </div>
                  <div className="mt-5">
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
            </div>
            <div className="card border-radius border-0 mx-3 shadow-lg">
              <div className="row">
                <img
                  src="./images/goverment.png"
                  alt="..."
                  className={styles.article_cover}
                />
                <div className={`${styles.article_headline} ms-3 my-3`}>
                  <span className="text-blue">COVID-19</span>
                  <div className="d-flex flex-column bd-highlight mt-3">
                    <div className="bd-highlight">
                      Why corona never ends? Let’s see how its facts
                    </div>
                  </div>
                  <div className="mt-5">
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
            </div>
          </div>
        </div>
        <div className={`${styles.filter} bg-grey p-5`}>
          <div className="row">
            <div className="col-12 col-lg-5">
              <h1 className="fw-bold my-5">
                Let's hear about Kayla's success story
              </h1>
              <h3 className="my-5">
                See how well News Today works in a real user’s life.{" "}
              </h3>
              <button className="btn btn-blue p-3 my-5">
                Let’s get started
              </button>
            </div>
            <div className="col-12 col-lg-7">
              <video controls className="video-player">
                <source src="cat-herd.webm" type="video/webm" />
                Browsermu tidak mendukung tag ini, upgrade donk!
              </video>
            </div>
          </div>
        </div>
        <div className="filter-tags p-0 p-lg-5">
          <h5 className="fw-bold">Latest News</h5>
          <div className="row">
            {data.data &&
              data.data.map((item) => (
                <div className="col-12 col-lg-4">
                  <div className="card border-radius border-0 m-3 shadow-lg">
                    <div className="row">
                      <div className="col-5">
                        <img
                          src={`${process.env.API_URL_IMG}${item.article_cover}`}
                          alt="..."
                          className={styles.article_cover}
                        />
                      </div>
                      <div className="col-7">
                        <div className="content ms-3 my-3">
                          <span className="text-blue">{item.article_title}</span>
                          <div className="d-flex flex-column bd-highlight mt-3">
                            <div className="bd-highlight">{`${item.article_content.substring(
                              0,
                              50
                            )}...`}</div>
                          </div>
                          <div className="mt-3">
                            <div className="d-flex justify-content-between">
                              <div className="p-2 bd-highlight">
                                <img src="./icon/Like.svg" alt="..." />
                                <small> 2.1k</small>
                              </div>
                              <Link href={`/${item.id}`}>
                              <div className="p-2 bd-highlight">
                                <img src="./icon/Clock.svg" alt="..." />
                                <small> 2.1k</small>
                              </div>
                              </Link>
                              <div className="p-2 bd-highlight">
                                <img src="./icon/Borkmark.svg" alt="..." />
                                <small> 2.1k</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
//getServerSideProps
export const getServerSideProps = async () => {
  const limit = 10
  const offset = 1
  const news = await Fetcher({method:'GET', url:`${process.env.API_URL}/news/api`,params:{limit:limit, offset:offset}});
  return {
    props: { news },
  };
};
export default Home;

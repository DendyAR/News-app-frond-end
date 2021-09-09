import { getArticle } from "./api/news";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Header, Navbar, Footer } from "../components";
import moment from "moment";

const DetailNews = () => {
  const router = useRouter();
  const { id } = router.query;
  const {news, mutateNews, errNews} = getArticle({id : id})
  console.log(news)
  return (
    <>
      <Header title={id} />
      <body>
        <Navbar state="home" />
        <main className='mt-5'>
          <section className='px-5'>
            <div className="d-flex flex-row pt-5">
              <div className="p-2">
							<div className="d-flex justify-content-between">
                <img src="./icon/Back.svg" className='icon'/>
                <span className="ms-5 pt-0 d-none d-md-block">Back</span>
								</div>
              </div>
              <div className="p-2 w-100">
                <h3 className='text-center mx-auto'>Article Viewer</h3>
              </div>
            </div>
						<div className='row my-3'>
            {news?.data &&
              news?.data?.map((item) => (
                <>
							<div className='col-12 col-md-6 px-3'>
								<img src={`${process.env.API_URL_IMG}${item.article_cover}`} className='w-100 h-25'/>
							</div>
							<div className='col-12 col-md-6 ps-5'>
                <h3 className='my-3'>{item.article_title}</h3>
                <small className='text-dark fw-bold text-capitalize'>{item.name} - {item.role}</small><br/>
                <small className='text-muted'>{moment(`${item?.created_at}`).format('dddd, MMMM Do YYYY')}</small>
							</div>
              </>
              
              ))}
						</div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  );
};

export default DetailNews;

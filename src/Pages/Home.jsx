import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <main id="main">
        {/* <!-- ======= Hero Slider Section ======= --> */}
        <section id="hero-slider" className="hero-slider">
          <div className="container-md" data-aos="fade-in">
            <div className="row">
              <div className="col-12">
                <div className="swiper sliderFeaturedPosts">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <Link
                        to="single-post"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: "url('assets/img/post-slide-1.jpg')",
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            The Best Homemade Masks for Face (keep the Pimples
                            Away)
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="swiper-slide">
                      <Link
                        to="single-post"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: "url('assets/img/post-slide-2.jpg')",
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            17 Pictures of Medium Length Hair in Layers That
                            Will Inspire Your New Haircut
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="swiper-slide">
                      <Link
                        to="single-post"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: "url('assets/img/post-slide-3.jpg')",
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            13 Amazing Poems from Shel Silverstein with Valuable
                            Life Lessons
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="swiper-slide">
                      <Link
                        to="single-post"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage:
                            " url('assets/img/post-slide-4.jpg')",
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            9 Half-up/half-down Hairstyles for Long and Medium
                            Hair
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="custom-swiper-button-next">
                    <span className="bi-chevron-right"></span>
                  </div>
                  <div className="custom-swiper-button-prev">
                    <span className="bi-chevron-left"></span>
                  </div>

                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Hero Slider Section --> */}

        {/* <!-- ======= Post Grid Section ======= --> */}
        <section id="posts" className="posts">
          <div className="container" data-aos="fade-up">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="post-entry-1 lg">
                  <Link to="single-post">
                    <img
                      src="assets/img/post-landscape-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2>
                    <Link to="single-post">
                      11 Work From Home Part-Time Jobs You Can Do Now
                    </Link>
                  </h2>
                  <p className="mb-4 d-block">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero temporibus repudiandae, inventore pariatur numquam
                    cumque possimus exercitationem? Nihil tempore odit ab minus
                    eveniet praesentium, similique blanditiis molestiae ut saepe
                    perspiciatis officia nemo, eos quae cumque. Accusamus fugiat
                    architecto rerum animi atque eveniet, quo, praesentium
                    dignissimos
                  </p>

                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img
                        src="assets/img/person-1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Cameron Williamson</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="row g-5">
                  <div className="col-lg-4 border-start custom-border">
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Sport</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          Let’s Get Back to Work, New York
                        </Link>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-5.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Food</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 17th '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          How to Avoid Distraction and Stay Focused During Video
                          Calls?
                        </Link>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-7.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Design</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Mar 15th '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          Why Craigslist Tampa Is One of The Most Interesting
                          Places On the Web?
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 border-start custom-border">
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-3.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Business</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          6 Easy Steps To Create Your Own Cute Merch For
                          Instagram
                        </Link>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-6.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Tech</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Mar 1st '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          10 Life-Changing Hacks Every Working Mom Should Know
                        </Link>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-8.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Travel</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          5 Great Startup Tips for Female Founders
                        </Link>
                      </h2>
                    </div>
                  </div>

                  {/* <!-- Trending Section --> */}
                  <div className="col-lg-4">
                    <div className="trending">
                      <h3>Trending</h3>
                      <ul className="trending-post">
                        <li>
                          <Link to="single-post">
                            <span className="number">1</span>
                            <h3>
                              The Best Homemade Masks for Face (keep the Pimples
                              Away)
                            </h3>
                            <span className="author">Jane Cooper</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-post">
                            <span className="number">2</span>
                            <h3>
                              17 Pictures of Medium Length Hair in Layers That
                              Will Inspire Your New Haircut
                            </h3>
                            <span className="author">Wade Warren</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-post">
                            <span className="number">3</span>
                            <h3>
                              13 Amazing Poems from Shel Silverstein with
                              Valuable Life Lessons
                            </h3>
                            <span className="author">Esther Howard</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-post">
                            <span className="number">4</span>
                            <h3>
                              9 Half-up/half-down Hairstyles for Long and Medium
                              Hair
                            </h3>
                            <span className="author">Cameron Williamson</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-post">
                            <span className="number">5</span>
                            <h3>
                              Life Insurance And Pregnancy: A Working Mom’s
                              Guide
                            </h3>
                            <span className="author">Jenny Wilson</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- End Trending Section --> */}
                </div>
              </div>
            </div>
            {/* <!-- End .row --> */}
          </div>
        </section>
        {/* <!-- End Post Grid Section --> */}

        {/* <!-- ======= Culture Category Section ======= --> */}
        <section className="category-section">
          <div className="container" data-aos="fade-up">
            <div className="section-header d-flex justify-content-between align-items-center mb-5">
              <h2>Culture</h2>
              <div>
                <a href="category.html" className="more">
                  See All Culture
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-9">
                <div className="d-lg-flex post-entry-2">
                  <Link
                    to="single-post"
                    className="me-4 thumbnail mb-4 mb-lg-0 d-inline-block"
                  >
                    <img
                      src="assets/img/post-landscape-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                  <div>
                    <div className="post-meta">
                      <span className="date">Culture</span>
                      <span className="mx-1">&bullet;</span>{" "}
                      <span>Jul 5th '22</span>
                    </div>
                    <h3>
                      <Link to="single-post">
                        What is the son of Football Coach John Gruden, Deuce
                        Gruden doing Now?
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio placeat exercitationem magni voluptates dolore.
                      Tenetur fugiat voluptates quas, nobis error deserunt
                      aliquam temporibus sapiente, laudantium dolorum itaque
                      libero eos deleniti?
                    </p>
                    <div className="d-flex align-items-center author">
                      <div className="photo">
                        <img
                          src="assets/img/person-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="name">
                        <h3 className="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4">
                    <div className="post-entry-1 border-bottom">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Culture</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          11 Work From Home Part-Time Jobs You Can Do Now
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                      <p className="mb-4 d-block">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero temporibus repudiandae, inventore pariatur
                        numquam cumque possimus
                      </p>
                    </div>

                    <div className="post-entry-1">
                      <div className="post-meta">
                        <span className="date">Culture</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          5 Great Startup Tips for Female Founders
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Culture</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          How to Avoid Distraction and Stay Focused During Video
                          Calls?
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                      <p className="mb-4 d-block">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero temporibus repudiandae, inventore pariatur
                        numquam cumque possimus
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      How to Avoid Distraction and Stay Focused During Video
                      Calls?
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      17 Pictures of Medium Length Hair in Layers That Will
                      Inspire Your New Haircut
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      9 Half-up/half-down Hairstyles for Long and Medium Hair
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      Life Insurance And Pregnancy: A Working Mom’s Guide
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      The Best Homemade Masks for Face (keep the Pimples Away)
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      10 Life-Changing Hacks Every Working Mom Should Know
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Culture Category Section --> */}

        {/* <!-- ======= Business Category Section ======= --> */}
        <section className="category-section">
          <div className="container" data-aos="fade-up">
            <div className="section-header d-flex justify-content-between align-items-center mb-5">
              <h2>Business</h2>
              <div>
                <a href="category.html" className="more">
                  See All Business
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-9 order-md-2">
                <div className="d-lg-flex post-entry-2">
                  <Link
                    to="single-post"
                    className="me-4 thumbnail d-inline-block mb-4 mb-lg-0"
                  >
                    <img
                      src="assets/img/post-landscape-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                  <div>
                    <div className="post-meta">
                      <span className="date">Business</span>
                      <span className="mx-1">&bullet;</span>{" "}
                      <span>Jul 5th '22</span>
                    </div>
                    <h3>
                      <Link to="single-post">
                        What is the son of Football Coach John Gruden, Deuce
                        Gruden doing Now?
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio placeat exercitationem magni voluptates dolore.
                      Tenetur fugiat voluptates quas, nobis error deserunt
                      aliquam temporibus sapiente, laudantium dolorum itaque
                      libero eos deleniti?
                    </p>
                    <div className="d-flex align-items-center author">
                      <div className="photo">
                        <img
                          src="assets/img/person-4.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="name">
                        <h3 className="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4">
                    <div className="post-entry-1 border-bottom">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-5.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Business</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          11 Work From Home Part-Time Jobs You Can Do Now
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                      <p className="mb-4 d-block">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero temporibus repudiandae, inventore pariatur
                        numquam cumque possimus
                      </p>
                    </div>

                    <div className="post-entry-1">
                      <div className="post-meta">
                        <span className="date">Business</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          5 Great Startup Tips for Female Founders
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-7.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Business</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          How to Avoid Distraction and Stay Focused During Video
                          Calls?
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                      <p className="mb-4 d-block">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero temporibus repudiandae, inventore pariatur
                        numquam cumque possimus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Business</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      How to Avoid Distraction and Stay Focused During Video
                      Calls?
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Business</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      17 Pictures of Medium Length Hair in Layers That Will
                      Inspire Your New Haircut
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Business</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      9 Half-up/half-down Hairstyles for Long and Medium Hair
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Business</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      Life Insurance And Pregnancy: A Working Mom’s Guide
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Business</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      The Best Homemade Masks for Face (keep the Pimples Away)
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Business</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      10 Life-Changing Hacks Every Working Mom Should Know
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Business Category Section --> */}

        {/* <!-- ======= Lifestyle Category Section ======= --> */}
        <section className="category-section">
          <div className="container" data-aos="fade-up">
            <div className="section-header d-flex justify-content-between align-items-center mb-5">
              <h2>Lifestyle</h2>
              <div>
                <a href="category.html" className="more">
                  See All Lifestyle
                </a>
              </div>
            </div>

            <div className="row g-5">
              <div className="col-lg-4">
                <div className="post-entry-1 lg">
                  <Link to="single-post">
                    <img
                      src="assets/img/post-landscape-8.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-meta">
                    <span className="date">Lifestyle</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2>
                    <Link to="single-post">
                      11 Work From Home Part-Time Jobs You Can Do Now
                    </Link>
                  </h2>
                  <p className="mb-4 d-block">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero temporibus repudiandae, inventore pariatur numquam
                    cumque possimus exercitationem? Nihil tempore odit ab minus
                    eveniet praesentium, similique blanditiis molestiae ut saepe
                    perspiciatis officia nemo, eos quae cumque. Accusamus fugiat
                    architecto rerum animi atque eveniet, quo, praesentium
                    dignissimos
                  </p>

                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img
                        src="assets/img/person-7.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Esther Howard</h3>
                    </div>
                  </div>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Lifestyle</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      The Best Homemade Masks for Face (keep the Pimples Away)
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1">
                  <div className="post-meta">
                    <span className="date">Lifestyle</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to="single-post">
                      10 Life-Changing Hacks Every Working Mom Should Know
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="row g-5">
                  <div className="col-lg-4 border-start custom-border">
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-6.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          Let’s Get Back to Work, New York
                        </Link>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-5.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 17th '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          How to Avoid Distraction and Stay Focused During Video
                          Calls?
                        </Link>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-4.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Mar 15th '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          Why Craigslist Tampa Is One of The Most Interesting
                          Places On the Web?
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 border-start custom-border">
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-3.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          6 Easy Steps To Create Your Own Cute Merch For
                          Instagram
                        </Link>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Mar 1st '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          10 Life-Changing Hacks Every Working Mom Should Know
                        </Link>
                      </h2>
                    </div>
                    <div className="post-entry-1">
                      <Link to="single-post">
                        <img
                          src="assets/img/post-landscape-1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2>
                        <Link to="single-post">
                          5 Great Startup Tips for Female Founders
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          How to Avoid Distraction and Stay Focused During Video
                          Calls?
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          17 Pictures of Medium Length Hair in Layers That Will
                          Inspire Your New Haircut
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          9 Half-up/half-down Hairstyles for Long and Medium
                          Hair
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          Life Insurance And Pregnancy: A Working Mom’s Guide
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          The Best Homemade Masks for Face (keep the Pimples
                          Away)
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>
                        <span className="mx-1">&bullet;</span>
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="single-post">
                          10 Life-Changing Hacks Every Working Mom Should Know
                        </Link>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End .row --> */}
          </div>
        </section>
        {/* <!-- End Lifestyle Category Section --> */}
      </main>
      {/* <!-- End #main --> */}
      <Footer />
    </div>
  );
};

export default Home;

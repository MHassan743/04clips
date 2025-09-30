import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './GhostHost.css';

const GhostHost = () => {
  useEffect(() => {
    const mediaItems = document.querySelectorAll(".home-scroll_img-item");
    if (mediaItems.length === 0) return;

    console.log('Found', mediaItems.length, 'media items');
    let currentIndex = 0;
    const showMedia = (index) => {
      console.log('Switching to media index:', index);
      mediaItems.forEach((item,) => {
        item.classList.remove("is-active");
        item.style.opacity = "0";
        item.style.zIndex = "1";
      });
      const activeItem = mediaItems[index];
      if (activeItem) {
        activeItem.classList.add("is-active");
        activeItem.style.opacity = "1";
        activeItem.style.zIndex = "2";
        console.log('Now showing media', index + 1, 'of', mediaItems.length);
      }
    };
    const cycleNext = () => {
      currentIndex = (currentIndex + 1) % mediaItems.length;
      console.log('Cycling to next media. New index:', currentIndex);
      showMedia(currentIndex);
    };
    showMedia(0);
    const intervalId = setInterval(cycleNext, 3000);
    console.log('Media cycling started with 3 second intervals');
    const initSwiper = () => {
      // Check if Swiper is available globally
      if (typeof window !== 'undefined' && window.Swiper) {
        const swiper = new window.Swiper('.swiper', {
          // Basic horizontal scrolling
          direction: 'horizontal',

          // Slides per view
          slidesPerView: 'auto',

          // Space between slides
          spaceBetween: 30,

          // Enable mouse drag
          simulateTouch: true,
          mousewheel: {
            enabled: true,
            forceToAxis: true,
          },
          speed: 400,
          breakpoints: {
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 1.8,
              spaceBetween: 25
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 30
            }
          }
        });

        console.log('Swiper initialized with simple horizontal scroll');
        return swiper;
      }
    };
    const swiperTimer = setTimeout(() => {
      initSwiper();
    }, 100);

    // Cleanup on unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(swiperTimer);
    };
  }, []);

  return (
    <>
      {/* Last Published: Wed Aug 27 2025 13:44:42 GMT+0000 (Coordinated Universal Time) */}
      <meta charSet="utf-8" />
      <title>GhostHost™</title>
      <meta content="GhostHost™" property="og:title" />
      <meta
        content="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6714f90e3c68642767dafdbe_og-img.png"
        property="og:image"
      />
      <meta content="GhostHost™" property="twitter:title" />
      <meta
        content="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6714f90e3c68642767dafdbe_og-img.png"
        property="twitter:image"
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link
        href="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/css/tca2.shared.365ae3ccb.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link
        href="https://fonts.gstatic.com"
        rel="preconnect"
        crossOrigin="anonymous"
      />
      <link
        href="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6714fc37a586ff2befd4736f_favicon-2.png"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="https://cdn.prod.website-files.com/63ef42ea00ae73ec1a61487d/63ef43887a4a94652696f45f_Webclip-img.png"
        rel="apple-touch-icon"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n  \n  .swiper{\n  \theight: 100% !important;\n    width: 100%;\n  }\n\n  ::-webkit-scrollbar {\n    width: 0px; \n    background: transparent;\n  }\n  \n  .swiper-slide{\n  \theight: auto !important;\n  }\n\n  .swiper-slide.testimonial_content{\n    width: 50% !important;\n    max-width: 61.625rem;\n  }\n\n  @media screen and (max-width: 479px){\n    .swiper-slide.testimonial_content{\n      width: 80% !important;\n    }\n\n  }\n\n  .swiper-slide.project_content{\n    width: 19.1875rem !important;\n  }\n\n  /* Simple horizontal scroll styles */\n  .swiper_main_component {\n    width: 100%;\n    overflow: hidden;\n  }\n\n  .swiper-wrapper {\n    display: flex;\n  }\n\n"
        }}
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      <noscript>
        &lt;img height="1" width="1"
        src="https://www.facebook.com/tr?id=762107452066759&amp;ev=PageView
        &amp;noscript=1"/&gt;
      </noscript>
      {/* End Facebook Pixel Code */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n.navbar .nav-link-2.faq-gh {\n  display: inline-block !important;\n}\n\n"
        }}
      />
      {/* [Attributes by Finsweet] CMS Slider */}
      <div className="page-wrapper-2">
        <Navigation />
        <div className="global_embed w-embed">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n  body { \n    min-height: 0vw;\n    font-size: calc(0.5348725348725347vw + 0.4683790283790286em);\n  }\n\n\n  /* Max Font Size */\n  @media screen and (min-width:1432px) {\n    body { font-size: 0.9470899470899472em; }\n  }\n  /* Min Font Size */\n  @media screen and (max-width:991px) {\n    body { font-size: calc(0.1816347124117054vw + 0.6875em); }\n  }\n  .container {\n    max-width: 94.5em;\n  }\n  @media screen and (max-width:1200px) {\n    .button-2 {font-size: 0.9782251082251083rem;}\n  }\n\n/*gradient unclicakble*/\n.gradient-wrapper { pointer-events: none; }\n\n/*nav-bg*/\n.navbar {\n  background: linear-gradient(180deg, #080617 0%, rgba(8, 6, 23, 0.50) 56%, rgba(8, 6, 23, 0.00) 100%) !important; \n}\n\n/*intro*/\n.vsl-embed.intro-vid {\nbox-shadow: 0px 0px 84px 9px rgba(239, 136, 239, 0.20) !important;\n}\n\n/*hori scroll on mobile*/\n@media only screen and (max-width: 800px) {\n  .remote-wrap {\noverflow-x: scroll;\nwhite-space:nowrap;\n}\n}\n\n\n\n"
            }}
          />
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n/* Home scroll section - sticky left, cycling media */\n.home-scroll_section { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 2rem !important; align-items: start !important; }\n.home-scroll_visual { position: sticky !important; top: 2rem !important; height: fit-content !important; }\n.home-scroll_img-item { opacity: 0 !important; transition: opacity 0.5s ease !important; position: absolute !important; top: 0 !important; left: 0 !important; width: 90% !important; }\n.home-scroll_img-item:first-child { opacity: 1 !important; }\n.home-scroll_img-item.is-active { opacity: 1 !important; z-index: 2 !important; }\n.home-scroll_img-wrap { position: relative !important; width: 90% !important; height: 800px !important; overflow: hidden !important; }\n.home-scroll_img { width: 100% !important; height: 750px !important; object-fit: cover !important; border-radius: 45px !important; display: block !important; }\n@media (max-width: 768px) { .home-scroll_section { grid-template-columns: 1fr !important; } .home-scroll_visual { position: relative !important; } .home-scroll_img-wrap { height: 300px !important; } .home-scroll_img { height: 300px !important; } }\n"
          }}
        />
        <div className="hero-section ghost-offer">
          <div className="gradient-wrapper">
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
              }}
              className="circle _1"
            />
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
              }}
              className="circle _2"
            />
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
              }}
              className="circle _3"
            />
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
              }}
              className="circle _4"
            />
          </div>
          <div className="hero_component" style={{ zIndex: 10, position: 'relative' }}>
            <h1
              data-w-id="b59ed198-ec1a-2276-9d6d-8f3c68861d36"

              className="big-heading align-center ghost"
            >
              GhostHost
            </h1>
            <div className="container-new">
              <div className="hero-wrapper-4 ghost-offer">
                <div
                  data-w-id="400e7b0f-a391-cf95-2c54-84fb2fa1601b"

                  className="hero-bottom-content"
                >
                  <h1 className="hero-heading-2 ghost">
                    Create 15{/* */} videos
                    <br />
                    in <strong>±</strong>2 hours
                    <br />
                  </h1>
                  <div className="text-large-3 max-width-407px">
                    If you’re a busy entrepreneur looking to put your content
                    creation on autopilot, then this is for you.
                  </div>
                  <a href="https://wa.me/message/4KAVDMIYUEA3K1" className="button-3 w-button">
                    Book a call
                  </a>
                </div>
              </div>
            </div>
            <img
              className="hero-img"
              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6750036db34d5c7c8475005c_GH6.png"
              alt=""

              sizes="(max-width: 1600px) 100vw, 1600px"
              data-w-id="d5bdd33d-4acd-4661-fcf1-53f2fd62afd9"
              loading="lazy"
              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6750036db34d5c7c8475005c_GH6-p-500.png 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6750036db34d5c7c8475005c_GH6-p-800.png 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6750036db34d5c7c8475005c_GH6-p-1080.png 1080w, https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6750036db34d5c7c8475005c_GH6.png 1600w"
            />
          </div>
        </div>
        <div className="section padding-vert-big padding-no-bottom">
          <div className="container-new top-pad">
            <div className="tittle-wrapper-2 max-width-600px">
              <h2
                data-w-id="64ac4fb4-34a6-caf1-ed37-2bb03286a942"

                className="section-heading center"
              >
                Simply show up We do the rest
              </h2>
              <div
                data-w-id="64ac4fb4-34a6-caf1-ed37-2bb03286a944"

                className="text-large-2 center"
              >
                We know that creating videos can be overwhelming, time consuming and
                especially hard to maintain, but we got you.
              </div>
            </div>
          </div>
        </div>
        <section className="home-scroll_section">
          <div
            id="w-node-_08c80931-f12e-d3a1-5f1f-67a7c1941aed-a5a04e04"
            className="home-scroll_visual page-padding"
          >
            <div className="home-scroll_img-wrap w-dyn-list">
              <div role="list" className="home-scroll_img-list w-dyn-items">
                <div role="listitem" className="home-scroll_img-item w-dyn-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/675002ff6aba5b47d8bfff00_Avin_01.gif"
                    alt=""
                    className="home-scroll_img"
                  />
                </div>
                <div role="listitem" className="home-scroll_img-item w-dyn-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f23bfb891f277bb386f4b_7034348-hd_1080_1920_25fps_5_optimized.gif"
                    alt=""
                    className="home-scroll_img"
                  />
                </div>
                <div role="listitem" className="home-scroll_img-item w-dyn-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67515649d0e4f17c96936afa_Avin%202.gif"
                    alt=""
                    className="home-scroll_img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_08c80931-f12e-d3a1-5f1f-67a7c1941af5-a5a04e04"
            className="home-scroll_content page-padding"
          >
            <div className="home-scroll_text-wrap w-dyn-list">
              <div role="list" className="home-scroll_text-list w-dyn-items">
                <div role="listitem" className="home-scroll_text-item w-dyn-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/675002ff6aba5b47d8bfff00_Avin_01.gif"
                    alt=""
                    className="home-scroll_photo"
                  />
                  <h2 className="text-size-h1-2">
                    Record in Premium Studio Setups
                  </h2>
                  <p className="text-large-2 white">
                    Show up professionally with Netflix certified equipments and
                    record like a pro
                  </p>
                </div>
                <div role="listitem" className="home-scroll_text-item w-dyn-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f23bfb891f277bb386f4b_7034348-hd_1080_1920_25fps_5_optimized.gif"
                    alt=""
                    className="home-scroll_photo"
                  />
                  <h2 className="text-size-h1-2">
                    Create more videos in less time
                  </h2>
                  <p className="text-large-2 white">
                    Stop wasting so many hours, scripting, recording and editing.
                    Follow a fail-proof system for creating content.
                  </p>
                </div>
                <div role="listitem" className="home-scroll_text-item w-dyn-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67515649d0e4f17c96936afa_Avin%202.gif"
                    alt=""
                    className="home-scroll_photo"
                  />
                  <h2 className="text-size-h1-2">
                    Enjoy a seamless A-Z content process
                  </h2>
                  <p className="text-large-2 white">
                    Sit back and relax knowing the entire process is taken care of.
                    From production to posting your videos online, we do it all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section">
          <div className="container-new">
            <div className="tittle-wrapper-2 max-width-600px">
              <h2
                data-w-id="377c4e6d-dd78-8596-2b6e-c2f06e31f083"

                className="section-heading center"
              >
                Get a brand makeover
              </h2>
              <div
                data-w-id="377c4e6d-dd78-8596-2b6e-c2f06e31f085"

                className="text-large-2 center width-70"
              >
                Start showing up like a professional and gain more visibility and
                credibility.
              </div>
            </div>
          </div>
          <div className="container-new extra-pad padding-vert-big padding-no-top">
            <div className="div-block-16">
              <div className="ba-mob">
                <div className="tag-2 mob-show">
                  <div>Before </div>
                </div>
                <div className="tag-2 align-right mob-show">
                  <div>With Us</div>
                </div>
              </div>
              <div className="ba-grid">
                <div className="ba-wrapper">
                  <div className="ba-content _2">
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a5ebab3c93180a30c7_D1.gif"
                      loading="lazy"
                      alt=""
                      className="ba-img"
                    />
                  </div>
                  <div className="ba-content">
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a7c557f00f71ca7ce0_D2.gif"
                      loading="lazy"
                      alt=""
                      className="ba-img"
                    />
                  </div>
                </div>
                <div className="ba-wrapper">
                  <div className="ba-content">
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a78a7aaf3c1187e179_H1.gif"
                      loading="lazy"
                      alt=""
                      className="ba-img"
                    />
                  </div>
                  <div className="ba-content">
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674f15df8484a9f8a335ed4c_H2_2.gif"
                      loading="lazy"
                      alt=""
                      className="ba-img"
                    />
                  </div>
                </div>
                <div className="ba-wrapper">
                  <div className="ba-content">
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a7b32ff6cc59d9a009_V1.gif"
                      loading="lazy"
                      alt=""
                      className="ba-img"
                    />
                  </div>
                  <div className="ba-content">
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674f15de154a95f707e31d31_V2_2.gif"
                      loading="lazy"
                      alt=""
                      className="ba-img"
                    />
                  </div>
                </div>
                <div className="ba-wrapper">
                  <div className="ba-content">
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a7b9053b1820922971_G1.gif"
                      loading="lazy"
                      alt=""
                      className="ba-img"
                    />
                  </div>
                  <div className="ba-content">
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a6b32ff6cc59d99fad_G2.gif"
                      loading="lazy"
                      alt=""
                      className="ba-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-vert-big">
          <div className="solution-section-highlights">
            <div className="container-new">
              <div
                data-w-id="f7bf2994-8463-52e5-9aae-57f770acc5ff"
                className="tittle-wrapper-2 max-width-850px"
              >
                <h2 className="section-heading center">
                  Stand out with signature style videos
                </h2>
                <div className="text-large center">
                  Personal branding is not a nice-to-have anymore, it’s a must.
                  <br />
                  And how you choose to show up says a lot about you.
                </div>
              </div>
            </div>
            <div className="container-new">
              <div
                data-w-id="fe82abfc-a830-21c7-4c0a-336e28c094c9"
                className="collection-list-wrapper-2 w-dyn-list"
              >
                <div
                  fs-cmsslider-element="list"
                  role="list"
                  className="work-grid flex top-pad w-dyn-items"
                >
                  <div role="listitem" className="port-item w-dyn-item">
                    <div className="portfolio-card border hide">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1019846838?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="w-layout-hflex common-h-flex">
                        <img
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve.jpg 1024w"
                          className="port-card_img"
                        />
                        <div className="w-layout-vflex common-v-flex">
                          <div className="port-card_client-name">Steve Hill</div>
                          <div className="port-card_job-title">Personal Coach</div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b71a2f2cc4ec8df5236e5_Steve%20Hill%20-%20when%20you%20hear%20dubai.gif"
                      loading="lazy"
                      alt=""
                      className="port-gif"
                    />
                  </div>
                  <div role="listitem" className="port-item w-dyn-item">
                    <div className="portfolio-card border hide">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1019846339?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="w-layout-hflex common-h-flex">
                        <img
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f782956f5d1fb46137d77_KBFilms.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f782956f5d1fb46137d77_KBFilms-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f782956f5d1fb46137d77_KBFilms.jpg 691w"
                          className="port-card_img"
                        />
                        <div className="w-layout-vflex common-v-flex">
                          <div className="port-card_client-name">KB Films</div>
                          <div className="port-card_job-title">Infotainment</div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b7126074b4f4921ec1793_Khaled%20Bartawi%20-%20Hypoxia%20With%20Pilots.gif"
                      loading="lazy"
                      alt=""
                      className="port-gif"
                    />
                  </div>
                  <div role="listitem" className="port-item w-dyn-item">
                    <div className="portfolio-card border hide">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1019845224?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="w-layout-hflex common-h-flex">
                        <img
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7851088e730229452945_Ghinwa.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7851088e730229452945_Ghinwa-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7851088e730229452945_Ghinwa.jpg 720w"
                          className="port-card_img"
                        />
                        <div className="w-layout-vflex common-v-flex">
                          <div className="port-card_client-name">
                            Dr. Ghinwa Ghamloush
                          </div>
                          <div className="port-card_job-title">
                            Business Consultant
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b77f6a7debae6b88f6f66_gigi.gif"
                      loading="lazy"
                      alt=""
                      className="port-gif"
                    />
                  </div>
                  <div role="listitem" className="port-item w-dyn-item">
                    <div className="portfolio-card border hide">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1019847959?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="w-layout-hflex common-h-flex">
                        <img
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg 750w"
                          className="port-card_img"
                        />
                        <div className="w-layout-vflex common-v-flex">
                          <div className="port-card_client-name">Dr Medhat</div>
                          <div className="port-card_job-title">Pediatrician</div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70343552187b99f54164_Dr%20Medhat-%20Signs%20of%20Toungue%20Tie.gif"
                      loading="lazy"
                      alt=""
                      className="port-gif"
                    />
                  </div>
                  <div role="listitem" className="port-item w-dyn-item">
                    <div className="portfolio-card border hide">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1019847596?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="w-layout-hflex common-h-flex">
                        <img
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg 850w"
                          className="port-card_img"
                        />
                        <div className="w-layout-vflex common-v-flex">
                          <div className="port-card_client-name">
                            Abelardo Bandeira
                          </div>
                          <div className="port-card_job-title">Entrepreneur</div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6fcca361098e538030ca_Abe%20Jr%20-%20Power%20of%20Gut%20Feeling.gif"
                      loading="lazy"
                      alt=""
                      className="port-gif"
                    />
                  </div>
                  <div role="listitem" className="port-item w-dyn-item">
                    <div className="portfolio-card border hide">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1019847482?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="w-layout-hflex common-h-flex">
                        <img
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77e9e57cb1493b45c9e0_Khalifa.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77e9e57cb1493b45c9e0_Khalifa-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77e9e57cb1493b45c9e0_Khalifa.jpg 573w"
                          className="port-card_img"
                        />
                        <div className="w-layout-vflex common-v-flex">
                          <div className="port-card_client-name">
                            Khalifa Alsaadi
                          </div>
                          <div className="port-card_job-title">Infotainment</div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b71332fb9301d7e51c972_Khalifa%20-%20Tesla%20Admiration.gif"
                      loading="lazy"
                      alt=""
                      className="port-gif"
                    />
                  </div>
                  <div role="listitem" className="port-item w-dyn-item">
                    <div className="portfolio-card border hide">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1019849815?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="w-layout-hflex common-h-flex">
                        <img
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78e3f439fbf6048e6bbb_Dr%20Lindsey.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78e3f439fbf6048e6bbb_Dr%20Lindsey-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78e3f439fbf6048e6bbb_Dr%20Lindsey-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78e3f439fbf6048e6bbb_Dr%20Lindsey.jpg 1080w"
                          className="port-card_img"
                        />
                        <div className="w-layout-vflex common-v-flex">
                          <div className="port-card_client-name">Dr Lindsey</div>
                          <div className="port-card_job-title">Acupuncturist</div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b780a1bfb8cf857671e03_Lindesy.gif"
                      loading="lazy"
                      alt=""
                      className="port-gif"
                    />
                  </div>
                  <div role="listitem" className="port-item w-dyn-item">
                    <div className="portfolio-card border hide">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1019849449?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="w-layout-hflex common-h-flex">
                        <img
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7807d3741f92d132730b_Lamar.jpg"
                          loading="lazy"
                          alt=""
                          className="port-card_img"
                        />
                        <div className="w-layout-vflex common-v-flex">
                          <div className="port-card_client-name">Lamar Duffy</div>
                          <div className="port-card_job-title">Entrepreneur</div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b713e842917ec483ebf4f_Lamar-Who%20Is%20Your%20ICP.mp4.gif"
                      loading="lazy"
                      alt=""
                      className="port-gif"
                    />
                  </div>
                </div>
              </div>
              <div className="centered-heading">
                <Link to="/portfolio" className="button-3 centre w-button">
                  Explore More of Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="results-section">
          <div className="container-new padding-vert-big padding-no-bottom">
            <div className="title-wrapper max-width-662px">
              <h2
                data-w-id="d23cf96d-43a6-dd8a-c586-6893575264c8"

                className="section-heading center"
              >
                Success Stories
              </h2>
              <div className="max-width-sub-header">
                <div
                  data-w-id="d23cf96d-43a6-dd8a-c586-6893575264cb"

                  className="text-large center"
                >
                  Clients don’t just love us because we save them time. It’s because
                  we also get them results.
                </div>
              </div>
              <Link to="/client-success" className="button-3 top-pad w-button">
                View All Client Success
              </Link>
            </div>
          </div>
          <div className="swiper_main_component">
            <div className="swiper w-dyn-list">
              <div role="list" className="swiper-wrapper w-dyn-items">
                <div
                  role="listitem"
                  className="swiper-slide testimonial_content w-dyn-item"
                >
                  <div className="result-item">
                    <div className="result-content">
                      <div>
                        <div className="result-client">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg"
                            alt=""
                            sizes="100vw"
                            srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg 750w"
                            className="port-card_img big"
                          />
                          <div className="client-cred">
                            <div className="client-name">Dr Medhat</div>
                            <div className="div-30">
                              <div className="cred-label">Pediatrician</div>
                              <div className="solution-tag hide">
                                <div className="solution-tag-label">66k</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="result-heading small">
                          “I love working with this team. I feel so comfortable and
                          everyone is amazing”
                        </h3>
                      </div>
                      <div>
                        <div className="text-block-20">
                          Started with 0 Followers
                        </div>
                        <div className="result-stats">
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce80e"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede2_plus.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">66K</div>
                              <div className="stat-label">
                                Followers
                                <br />
                                Gained
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce808"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede3_arrow%20up.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">13M+</div>
                              <div className="stat-label">
                                View
                                <br />
                                Count
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item w-condition-invisible">
                            <div
                              className="lottie-content _3"
                              data-w-id="02e6fc4c-76c2-3c72-a124-90013155f838"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674dcde6683042f540b751f5_Plant.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-default-duration={0}
                              data-duration="3.370036566105636"
                            />
                            <div>
                              <div className="state-count w-dyn-bind-empty" />
                              <div className="stat-label">
                                Leads
                                <br />
                                Generated
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-embed-wrapper">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1069179698?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="overlay-transparent-half" />
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="swiper-slide testimonial_content w-dyn-item"
                >
                  <div className="result-item">
                    <div className="result-content">
                      <div>
                        <div className="result-client">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg"
                            alt=""
                            sizes="100vw"
                            srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg 1080w"
                            className="port-card_img big"
                          />
                          <div className="client-cred">
                            <div className="client-name">svenja maltzahn</div>
                            <div className="div-30">
                              <div className="cred-label">Entrepreneur</div>
                              <div className="solution-tag hide">
                                <div className="solution-tag-label">4.6K+</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="result-heading small">
                          “I’m getting so many requests I think I should stop
                          posting videos”
                        </h3>
                      </div>
                      <div>
                        <div className="text-block-20">
                          Started with 0 Followers
                        </div>
                        <div className="result-stats">
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce80e"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede2_plus.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">4.6K+</div>
                              <div className="stat-label">
                                Followers
                                <br />
                                Gained
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce808"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede3_arrow%20up.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">350K</div>
                              <div className="stat-label">
                                View
                                <br />
                                Count
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="02e6fc4c-76c2-3c72-a124-90013155f838"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674dcde6683042f540b751f5_Plant.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-default-duration={0}
                              data-duration="3.370036566105636"
                            />
                            <div>
                              <div className="state-count">3K+</div>
                              <div className="stat-label">
                                Leads
                                <br />
                                Generated
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-embed-wrapper">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1035892706?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="overlay-transparent-half" />
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="swiper-slide testimonial_content w-dyn-item"
                >
                  <div className="result-item">
                    <div className="result-content">
                      <div>
                        <div className="result-client">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg"
                            alt=""
                            sizes="100vw"
                            srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg 1080w"
                            className="port-card_img big"
                          />
                          <div className="client-cred">
                            <div className="client-name">Thera</div>
                            <div className="div-30">
                              <div className="cred-label">Wellness Brand</div>
                              <div className="solution-tag hide">
                                <div className="solution-tag-label">72K+</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="result-heading small">
                          "The quality of work is amazing and the value we’re
                          getting is great"
                        </h3>
                      </div>
                      <div>
                        <div className="text-block-20">
                          Started with 0 Followers
                        </div>
                        <div className="result-stats">
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce80e"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede2_plus.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">72K+</div>
                              <div className="stat-label">
                                Followers
                                <br />
                                Gained
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce808"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede3_arrow%20up.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">10M+</div>
                              <div className="stat-label">
                                View
                                <br />
                                Count
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="02e6fc4c-76c2-3c72-a124-90013155f838"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674dcde6683042f540b751f5_Plant.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-default-duration={0}
                              data-duration="3.370036566105636"
                            />
                            <div>
                              <div className="state-count">5K+ </div>
                              <div className="stat-label">
                                Leads
                                <br />
                                Generated
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-embed-wrapper">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1069179763?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="overlay-transparent-half" />
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="swiper-slide testimonial_content w-dyn-item"
                >
                  <div className="result-item">
                    <div className="result-content">
                      <div>
                        <div className="result-client">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg"
                            alt=""
                            sizes="100vw"
                            srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg 1080w"
                            className="port-card_img big"
                          />
                          <div className="client-cred">
                            <div className="client-name">Sekhar Mutha</div>
                            <div className="div-30">
                              <div className="cred-label">Thought Leader</div>
                              <div className="solution-tag hide">
                                <div className="solution-tag-label">102K+</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="result-heading small">
                          “You understood what I wanted to achieve, and with your
                          team I was able to go online and grow my brand”
                        </h3>
                      </div>
                      <div>
                        <div className="text-block-20">
                          Started with 0 Followers
                        </div>
                        <div className="result-stats">
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce80e"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede2_plus.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">55K+</div>
                              <div className="stat-label">
                                Followers
                                <br />
                                Gained
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce808"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede3_arrow%20up.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">7M+</div>
                              <div className="stat-label">
                                View
                                <br />
                                Count
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item w-condition-invisible">
                            <div
                              className="lottie-content _3"
                              data-w-id="02e6fc4c-76c2-3c72-a124-90013155f838"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674dcde6683042f540b751f5_Plant.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-default-duration={0}
                              data-duration="3.370036566105636"
                            />
                            <div>
                              <div className="state-count w-dyn-bind-empty" />
                              <div className="stat-label">
                                Leads
                                <br />
                                Generated
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-embed-wrapper">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1024229606?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="overlay-transparent-half" />
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="swiper-slide testimonial_content w-dyn-item"
                >
                  <div className="result-item">
                    <div className="result-content">
                      <div>
                        <div className="result-client">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67208d3c932b41a17159aea9_Tina%20C.jpg"
                            alt=""
                            className="port-card_img big"
                          />
                          <div className="client-cred">
                            <div className="client-name">Tina Chagoury</div>
                            <div className="div-30">
                              <div className="cred-label">Entrepreneur</div>
                              <div className="solution-tag hide">
                                <div className="solution-tag-label">68k+</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="result-heading small">
                          “What I do with you in 1 hour used to take me a full day
                          on a TV set. I gained so much insights from our sessions ”
                        </h3>
                      </div>
                      <div>
                        <div className="text-block-20">
                          Started with 33K Followers
                        </div>
                        <div className="result-stats">
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce80e"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede2_plus.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">64K</div>
                              <div className="stat-label">
                                Followers
                                <br />
                                Gained
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce808"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede3_arrow%20up.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">1.4M+</div>
                              <div className="stat-label">
                                View
                                <br />
                                Count
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="02e6fc4c-76c2-3c72-a124-90013155f838"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674dcde6683042f540b751f5_Plant.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-default-duration={0}
                              data-duration="3.370036566105636"
                            />
                            <div>
                              <div className="state-count">5K+</div>
                              <div className="stat-label">
                                Leads
                                <br />
                                Generated
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-embed-wrapper">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1024229673?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="overlay-transparent-half" />
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="swiper-slide testimonial_content w-dyn-item"
                >
                  <div className="result-item">
                    <div className="result-content">
                      <div>
                        <div className="result-client">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67025756be96d71592e4ed07_Ellipse%20235.svg"
                            alt=""
                            className="port-card_img big"
                          />
                          <div className="client-cred">
                            <div className="client-name">Dr. Sara Alhammadi</div>
                            <div className="div-30">
                              <div className="cred-label">Prosthodontist</div>
                              <div className="solution-tag hide">
                                <div className="solution-tag-label">96k+</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="result-heading small">
                          “I’m like a puppet between your hands. It takes a village
                          to do what you do. Really you have an amazing team”
                        </h3>
                      </div>
                      <div>
                        <div className="text-block-20">
                          Started with 4K Followers
                        </div>
                        <div className="result-stats">
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce80e"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede2_plus.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">96K+</div>
                              <div className="stat-label">
                                Followers
                                <br />
                                Gained
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce808"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede3_arrow%20up.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">21M+</div>
                              <div className="stat-label">
                                View
                                <br />
                                Count
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item w-condition-invisible">
                            <div
                              className="lottie-content _3"
                              data-w-id="02e6fc4c-76c2-3c72-a124-90013155f838"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674dcde6683042f540b751f5_Plant.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-default-duration={0}
                              data-duration="3.370036566105636"
                            />
                            <div>
                              <div className="state-count w-dyn-bind-empty" />
                              <div className="stat-label">
                                Leads
                                <br />
                                Generated
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-embed-wrapper">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1024229631?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="overlay-transparent-half" />
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="swiper-slide testimonial_content w-dyn-item"
                >
                  <div className="result-item">
                    <div className="result-content">
                      <div>
                        <div className="result-client">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205d08310cb0bd1bda4bca_vivien.jpg"
                            alt=""
                            className="port-card_img big"
                          />
                          <div className="client-cred">
                            <div className="client-name">Dr Vivien Moris</div>
                            <div className="div-30">
                              <div className="cred-label">Plastic Surgeon</div>
                              <div className="solution-tag hide">
                                <div className="solution-tag-label">137k+</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="result-heading small">
                          “This is an amazing company. They helped me with the
                          content ideas and the results are amazing ”
                        </h3>
                      </div>
                      <div>
                        <div className="text-block-20">
                          Started with 2.5K Followers
                        </div>
                        <div className="result-stats">
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce80e"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede2_plus.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">136K+</div>
                              <div className="stat-label">
                                Followers
                                <br />
                                Gained
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item">
                            <div
                              className="lottie-content _3"
                              data-w-id="e841242c-172b-6781-f26e-6579219ce808"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede3_arrow%20up.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-duration="1.7166666666666666"
                            />
                            <div>
                              <div className="state-count">13M+</div>
                              <div className="stat-label">
                                View
                                <br />
                                Count
                              </div>
                            </div>
                          </div>
                          <div className="result-stats-item w-condition-invisible">
                            <div
                              className="lottie-content _3"
                              data-w-id="02e6fc4c-76c2-3c72-a124-90013155f838"
                              data-animation-type="lottie"
                              data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674dcde6683042f540b751f5_Plant.json"
                              data-loop={1}
                              data-direction={1}
                              data-autoplay={1}
                              data-is-ix2-target={0}
                              data-renderer="svg"
                              data-default-duration={0}
                              data-duration="3.370036566105636"
                            />
                            <div>
                              <div className="state-count w-dyn-bind-empty" />
                              <div className="stat-label">
                                Leads
                                <br />
                                Generated
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-embed-wrapper">
                      <div className="vsl-embed _2 w-embed w-iframe w-script">
                        <div
                          style={{ padding: "177.78% 0 0 0", position: "relative" }}
                        >
                          <iframe
                            src="https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%"
                            }}
                            title="Welcome to TheClipsAgency"
                          />
                        </div>
                      </div>
                      <div className="overlay-transparent-half" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-vert-big extra-top">
          <div className="container-new">
            <div className="tittle-wrapper-2 max-width-600px">
              <h2
                data-w-id="e0cdcc39-582b-c49c-025f-9d77d9be6e6a"

                className="section-heading center"
              >
                How it works
              </h2>
              <div
                data-w-id="e0cdcc39-582b-c49c-025f-9d77d9be6e6c"

                className="text-large-2 center"
              >
                The most seamless way to grow your online presence and put your
                entire content creation on autopilot
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .hiw-block-bg {
              color: white !important;
            }
          `
            }}
          />
          <div className="container-new top-pad">
            <div
              data-w-id="daee6dec-1b25-e546-f198-b252555636b9"
              className="hiw-wrapper"
            >
              <div className="line-out">
                <div className="line-in" />
              </div>
              <div className="hiw-block-bg">
                <div className="hiw-block _1">
                  <h4 >Define your content strategy</h4>
                  <p className="paragraph-6">
                    Gain an understanding of your brand pillars and what content to
                    focus on to get the best outcome.
                  </p>
                </div>
              </div>
              <div className="hiw-block-bg">
                <div className="hiw-block _2">
                  <h4 className="heading-18">Get a unique Branding</h4>
                  <p className="paragraph-6">
                    Stand out with a unique video style designed to match your brand
                    and personality
                  </p>
                </div>
              </div>
              <div className="hiw-block-bg">
                <div className="hiw-block _3">
                  <h4 className="heading-18">Work 1-1 with a content specialist</h4>
                  <p className="paragraph-6">
                    Prepare for your shoots and create videos that look and feel
                    100% natural without the need to memorize scripts.
                  </p>
                </div>
              </div>
              <div className="hiw-block-bg">
                <div className="hiw-block _4">
                  <h4 className="heading-18">Record like the pros do</h4>
                  <p className="paragraph-6">
                    In only one session we can record up to 15 high-quality,
                    short-form videos to cover you for the entire month.
                  </p>
                </div>
              </div>
              <div className="hiw-block-bg">
                <div className="hiw-block _5">
                  <h4 className="heading-18">Watch your content go live</h4>
                  <p className="paragraph-6">
                    Sit back relax and let our team clip and edit your videos and
                    post them on all social media channels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-new results-highlights hide">
          <div className="metric-wrap">
            <div className="metric-block">
              <div>
                <div className="counter">500</div>
                <div className="counter-exclude">Hr+</div>
              </div>
              <div className="text-block-22">Time Saved</div>
            </div>
            <div className="metric-block">
              <div>
                <div className="counter">50</div>
                <div className="counter-exclude">M+</div>
              </div>
              <div className="text-block-22">Organic Views</div>
            </div>
            <div className="metric-block no-border">
              <div>
                <div className="counter">10</div>
                <div className="counter-exclude">X</div>
              </div>
              <div className="text-block-22">Credibility</div>
            </div>
          </div>
        </div>
        <div className="section padding-vert-big">
          <div className="container_large">
            <div
              data-w-id="a2a3c104-3ded-1ac7-7370-8d730dd404cf"

              className="title-wrapper max-width-662px"
            >
              <h2 className="section-heading center">
                Seamless
                <br />
                Remote Recording
              </h2>
              <div className="text-large center">
                Can’t make it to Dubai? No problem! Our seamless remote recording
                lets you capture high-quality content from anywhere – at home, in a
                studio, or with a green screen, all without travel <br />
              </div>
            </div>
            <div className="after-before-component hide">
              <div
                data-w-id="a2a3c104-3ded-1ac7-7370-8d730dd404d4"

                className="after-before-wrapper"
              >
                <div className="after-before-image-wrapper">
                  <div className="text-large-4">Before</div>
                  <div className="vsl-embed _3 w-embed w-iframe w-script">
                    <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
                      <iframe
                        src="https://player.vimeo.com/video/897533461?badge=0&autopause=0&player_id=0&app_id=58479"
                        frameBorder={0}
                        allow="autoplay; fullscreen; picture-in-picture"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%"
                        }}
                        title=""
                      />
                    </div>
                  </div>
                  <div className="overlay-transparent" />
                </div>
                <div className="after-before-image-wrapper">
                  <div className="text-large-4">After</div>
                  <div className="vsl-embed _3 w-embed w-iframe w-script">
                    <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
                      <iframe
                        src="https://player.vimeo.com/video/897533461?badge=0&autopause=0&player_id=0&app_id=58479"
                        frameBorder={0}
                        allow="autoplay; fullscreen; picture-in-picture"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%"
                        }}
                        title=""
                      />
                    </div>
                  </div>
                  <div className="overlay-transparent" />
                </div>
              </div>
            </div>
            <div className="remote-wrap">
              <div className="remote-contain">
                <img
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/672b7b91f3c965d07c955295_Omar_green.gif"
                  loading="lazy"
                  alt=""
                  className="remote-gif"
                />
                <div>
                  <h6 className="remote-head">Green Screen</h6>
                  <p className="remote-p">Get unlimited setups</p>
                </div>
              </div>
              <div
                id="w-node-_815c9a35-af32-1901-a6cc-398758781011-a5a04e04"
                className="remote-contain"
              >
                <img
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/672b7b91f0a3792de43be827_Comp%201_optimized.gif"
                  loading="lazy"
                  alt=""
                  className="remote-gif"
                />
                <div>
                  <h6 className="remote-head">Hire a Videographer</h6>
                  <p className="remote-p">Hire a professional to help you </p>
                </div>
              </div>
              <div
                id="w-node-_42ece967-5658-735c-6702-a9e74aa2f089-a5a04e04"
                className="remote-contain"
              >
                <img
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/672b7b9019975bd5a927c932_Lamar%202.gif"
                  loading="lazy"
                  alt=""
                  className="remote-gif"
                />
                <div>
                  <h6 className="remote-head">Shoot at Home</h6>
                  <p className="remote-p">Shoot at your home setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-section padding-vert-large">
          <div className="gradient-wrapper cta">
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
              }}
              className="circle _1"
            />
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
              }}
              className="circle _2"
            />
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
              }}
              className="circle _3"
            />
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
              }}
              className="circle _4"
            />
          </div>
          <div className="container_large" style={{ zIndex: 10, position: 'relative' }}>
            <div
              data-w-id="aeba0dea-1e0b-6ece-3b77-3f6877c7db56"

              className="cta-wrapper"
            >
              <div className="text-large center">
                Want to take your brand to the next level?
              </div>
              <h2 className="section-heading center cta">
                Book a<br />
                Discovery call
              </h2>
              <a
                data-w-id="aeba0dea-1e0b-6ece-3b77-3f6877c7db5d"
                href="https://wa.me/message/4KAVDMIYUEA3K1"
                className="button-3 is--yellow w-button"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
        <div className="benefit-section padding-vert-big padding-no-top">
          <div className="container-new">
            <div
              data-w-id="a2a3c104-3ded-1ac7-7370-8d730dd404e8"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                transformStyle: "preserve-3d"
              }}
              className="benefits-wrapper"
            >
              <div className="benefit-item">
                <div
                  className="lottie-content _3"
                  data-w-id="485cde7f-2037-0355-979d-b2aa9cab200e"
                  data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede1_clock.json"
                  data-loop={1}
                  data-direction={1}
                  data-autoplay={1}
                  data-is-ix2-target={0}
                  data-renderer="svg"
                  data-default-duration={0}
                  data-duration={0}
                >
                                      <img src={'/clock.gif'} height={50} alt="Animated GIF" />

                </div>
                <h3 className="heading-14 animated fadeIn">
                  Win back your time. Focus on your business
                </h3>
                <div>Automate your content creation.</div>
              </div>
              <div className="benefit-item">
                <div
                  className="lottie-content _3"
                  data-w-id="7c90f9a2-3839-28c5-5bdc-b3be3d6bd45f"
                  data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede0_growth%20icon.json"
                  data-loop={1}
                  data-direction={1}
                  data-autoplay={1}
                  data-is-ix2-target={0}
                  data-renderer="svg"
                  data-default-duration={0}
                  data-duration={0}
                >
                 <img src={'/src/assets/Arrow.gif'} height={50} alt="Animated GIF" />
                </div>
                <h3 className="heading-14 animated fadeIn">
                  Grow on all social media channels
                </h3>
                <div>Get seen everywhere.</div>
              </div>
              <div className="benefit-item">
                <div
                  className="lottie-content _3"
                  data-w-id="e13aadfb-534f-9ba3-b9f1-e7cd1957bb71"
                  data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede8_star.json"
                  data-loop={1}
                  data-direction={1}
                  data-autoplay={1}
                  data-is-ix2-target={0}
                  data-renderer="svg"
                  data-default-duration="1.3"
                  data-duration={0}
                >
                  <img src={'/src/assets/star.gif'} height={50} alt="Animated GIF" />
                </div>
                <h3 className="heading-14 animated fadeIn">
                  Get more leads to your business
                </h3>
                <div>Automate your content creation.</div>
              </div>
            </div>

          </div>
        </div>
        <div id="faq" className="faq-section">
          <div className="container_large">
            <div className="faq-wrapper">
              <div className="faq-heading-wrapper">
                <h3
                  data-w-id="4380a89b-c7e1-9e51-121f-efd8d6808d6a"

                  className="feature-heading"
                >
                  Have More Questions?
                </h3>
                <div className="faq-bottom">
                  <div className="text-large-4">
                    Need more information? <br />
                    Book a 30 mins discovery call.
                  </div>
                  <a href="https://wa.me/message/4KAVDMIYUEA3K1" className="button-3 green w-button">
                    Book a call
                  </a>
                </div>
              </div>
              <div
                data-w-id="4380a89b-c7e1-9e51-121f-efd8d6808d71"

                className="faq-list"
              >
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="4380a89b-c7e1-9e51-121f-efd8d6808d73"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">How much does it cost?</h3>
                    <img
                      style={{ display: "none" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed6a_Group%20838%20(1).svg"
                      className="minus"
                    />
                    <img
                      style={{ display: "block" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed69_Group%20838.svg"
                      className="plus"
                    />
                  </div>
                  <div
                    style={{ display: "none", height: 0 }}
                    className="faq-answer"
                  >
                    <div className="faq-answer-content">
                      <div className="faq-answer">
                        Let's start with a friendly 30-minute call to see if we're a
                        great match for each other! Once we've connected, we'd be
                        excited to walk you through the investment details and how
                        everything comes together.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="4380a89b-c7e1-9e51-121f-efd8d6808d87"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      Is it really 2 hours per month?
                    </h3>
                    <img
                      style={{ display: "none" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed6a_Group%20838%20(1).svg"
                      className="minus"
                    />
                    <img
                      style={{ display: "block" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed69_Group%20838.svg"
                      className="plus"
                    />
                  </div>
                  <div
                    style={{ display: "none", height: 0 }}
                    className="faq-answer"
                  >
                    <div className="faq-answer-content">
                      <div className="faq-answer">
                        Absolutely. We’ve implemented this system successfully with
                        many clients. While the first month may take an extra 1-2
                        hours depending on onboarding needs, the process quickly
                        becomes streamlined. Occasionally, practice sessions might
                        run longer at first, but as you continue creating with us,
                        we see a significant drop in the time required. For the
                        majority of our clients, 2 hours a month—1 hour for practice
                        and 1 hour for recording is not just normal, it’s proven and
                        repeatable.
                        <br />
                        <br />‍
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="4380a89b-c7e1-9e51-121f-efd8d6808d91"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      What if I need additional sessions?
                    </h3>
                    <img
                      style={{ display: "none" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed6a_Group%20838%20(1).svg"
                      className="minus"
                    />
                    <img
                      style={{ display: "block" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed69_Group%20838.svg"
                      className="plus"
                    />
                  </div>
                  <div
                    style={{ display: "none", height: 0 }}
                    className="faq-answer"
                  >
                    <div className="faq-answer-content">
                      <div className="faq-answer">
                        Our system is designed to efficiently accommodate your needs
                        within the allocated time. With one hour in the studio, we
                        can typically complete 15 videos. However, if you find the
                        need for extra sessions, we can easily arrange that as well.
                        Your satisfaction is our priority.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="4380a89b-c7e1-9e51-121f-efd8d6808d9b"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      How will you handle the posting of my videos?
                    </h3>
                    <img
                      style={{ display: "none" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed6a_Group%20838%20(1).svg"
                      className="minus"
                    />
                    <img
                      style={{ display: "block" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed69_Group%20838.svg"
                      className="plus"
                    />
                  </div>
                  <div
                    style={{ display: "none", height: 0 }}
                    className="faq-answer"
                  >
                    <div className="faq-answer-content">
                      <div className="faq-answer">
                        You have the option to provide us access to your social
                        media accounts, and we'll take care of scheduling and
                        posting your videos across all platforms. Alternatively, if
                        you prefer, we can send you the videos and you can post them
                        yourself. Your convenience is our focus.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="4380a89b-c7e1-9e51-121f-efd8d6808da5"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      How do I communicate feedback?
                    </h3>
                    <img
                      style={{ display: "none" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed6a_Group%20838%20(1).svg"
                      className="minus"
                    />
                    <img
                      style={{ display: "block" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed69_Group%20838.svg"
                      className="plus"
                    />
                  </div>
                  <div
                    style={{ display: "none", height: 0 }}
                    className="faq-answer"
                  >
                    <div className="faq-answer-content">
                      <div className="faq-answer">
                        You’ll chat directly with your dedicated project manager on
                        slack and use frame.io to drop reviews on the video
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="4380a89b-c7e1-9e51-121f-efd8d6808daf"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      Can I cancel if I don't like it?
                    </h3>
                    <img
                      style={{ display: "none" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed6a_Group%20838%20(1).svg"
                      className="minus"
                    />
                    <img
                      style={{ display: "block" }}
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed69_Group%20838.svg"
                      className="plus"
                    />
                  </div>
                  <div
                    style={{ display: "none", height: 0 }}
                    className="faq-answer"
                  >
                    <div className="faq-answer-content">
                      <div className="faq-answer">
                        Cancellation requests can be processed only at the end of
                        your 3-month billing cycle.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="a2a3c104-3ded-1ac7-7370-8d730dd40425"
          className="features-section hide"
        >
          <div className="container_large is-sticky">
            <div className="camera">
              <div className="tittle-wrapper-2 max-width-600px">
                <h2
                  data-w-id="a2a3c104-3ded-1ac7-7370-8d730dd40428"

                  className="section-heading center"
                >
                  Simply show up We do the rest
                </h2>
                <div
                  data-w-id="a2a3c104-3ded-1ac7-7370-8d730dd4042a"

                  className="text-large-2 center"
                >
                  We know that creating videos can be overwhelming, time consuming
                  and especially hard to maintain, but we got you.
                </div>
              </div>
              <div
                data-w-id="a2a3c104-3ded-1ac7-7370-8d730dd4042c"

                className="wedo-grid"
              >
                <div className="feature-item ghost-offer _1">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed63_Group%20835.svg"
                    alt=""
                    className="num-icon"
                  />
                  <div className="title-featured-wrapper">
                    <h3 className="feature-heading">Branding &amp; Content</h3>
                  </div>
                  <div className="text-large feature">
                    Gain an understanding of your brand pillars and what content to
                    focus on.
                  </div>
                </div>
                <div
                  id="w-node-a2a3c104-3ded-1ac7-7370-8d730dd40433-a5a04e04"
                  className="feature-item ghost-offer _2"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed65_Group%20836.svg"
                    alt=""
                    className="num-icon"
                  />
                  <div className="title-featured-wrapper">
                    <h3 className="feature-heading">Ghost Method</h3>
                  </div>
                  <div className="text-large feature">
                    Create videos that look and feel 100% natural without the need
                    to memorize scripts.
                  </div>
                </div>
                <div className="feature-item ghost-offer _3">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed66_Group%20837.svg"
                    alt=""
                    className="num-icon"
                  />
                  <div className="title-featured-wrapper">
                    <h3 className="feature-heading">Editing &amp; Distribution</h3>
                  </div>
                  <div className="text-large feature">
                    Sit back relax and let our team clip and edit your videos and
                    post them on all social media channels
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="footer">
          <div className="container-new">
            <div className="margin-bottom medium">
              <div className="footer-top">
                <div className="footer-top-left">
                  <div className="footer-column">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed5b_TheClipsAgency%20(1).svg"
                      alt=""
                      className="footer-logo-2"
                    />
                  </div>
                </div>
                <div className="footer-top-right">
                  <div className="footer-column">
                    <div className="footer-title">Solutions</div>
                    <a
                      href="/ghosthost"
                      aria-current="page"
                      className="footer-link w--current"
                    >
                      GhostHost™
                    </a>
                    <a href="/credits" className="footer-link">
                      Credits™
                    </a>
                    <a href="/powerpod" className="footer-link">
                      PowerPod™
                    </a>
                  </div>
                  <div className="footer-column">
                    <div className="footer-title">Company</div>
                    <a href="/" className="footer-link">
                      What We Do
                    </a>
                    <a href="/portfolio" className="footer-link">
                      Our Work
                    </a>
                    <a href="/client-success" className="footer-link">
                      Client Success
                    </a>
                    <div>
                      <a href="/careers" className="footer-link">
                        Careers
                      </a>
                      <img
                        src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67028bcb131d41ce93f4f1d8_now-hiring-badge.svg"
                        loading="lazy"
                        alt=""
                        className="hiring-badge"
                      />
                    </div>
                  </div>
                  <div className="footer-column">
                    <div className="footer-title">Contact</div>
                    <a href="https://wa.me/message/4KAVDMIYUEA3K1" className="footer-link">
                      Book a Call
                    </a>
                    <a
                      href="mailto:social@theclips.agency?subject=Inquiry"
                      className="footer-link"
                    >
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-column">
                <div className="footer-social">
                  <a
                    href="https://www.instagram.com/theclips.agency/"
                    target="_blank"
                    className="w-inline-block"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67028815dd982aab50716a91_mdi_instagram.svg"
                      alt=""
                      className="social-icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/the-clips-agency?trk=similar-pages"
                    target="_blank"
                    className="w-inline-block"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6702883117d36d0f9db99de5_mdi_linkedin.svg"
                      alt=""
                      className="social-icon"
                    />
                  </a>
                </div>
                <div className="disclaimer-text">
                  The Clips Agency® 2024 All Rights Reserved
                  <br />
                  <br />
                  <span className="text-span-4">
                    All content and materials on this site are protected by
                    copyright and trademark laws and are the property of The Clips
                    Agency. Unauthorized use is prohibited.
                  </span>
                </div>
              </div>
              <div className="footer-column">
                <div className="footer-link-group">
                  <a href="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This site is converting visitors into subscribers and customers with
   */}
      <noscript>
        {" "}
        &lt;img height="1" width="1" style="display:none;" alt=""
        src="https://px.ads.linkedin.com/collect/?pid=5842673&amp;fmt=gif" /&gt;{" "}
      </noscript>
      {/* This site is converting visitors into subscribers and customers with https://respond.io */}
      {/* https://respond.io */}
    </>

  );
};

export default GhostHost;
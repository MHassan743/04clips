import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Credits = () => {

  useEffect(() => {
    // Enhanced animation for Credits Lottie elements
    const animateLottieElements = () => {
      const svgElements = document.querySelectorAll('.feature-item .lottie-content svg');

      svgElements.forEach((svg, index) => {
        if (svg) {
          // Ensure SVG maintains proper size
          svg.style.width = '500px';
          svg.style.height = '300px';
          svg.style.minWidth = '400px';
          svg.style.minHeight = '250px';
          svg.style.transform = 'scale(1.2)';
          svg.style.transformOrigin = 'center center';
          svg.style.overflow = 'visible';

          // Apply different animations to each feature
          const animationContainer = svg.querySelector('.animation-container');
          if (animationContainer) {
            animationContainer.style.transformOrigin = 'center center';

            switch (index) {
              case 0:
                // First feature: floating animation
                animationContainer.style.animation = 'float-animation 4s ease-in-out infinite';
                break;
              case 1:
                // Second feature: pulsing glow
                animationContainer.style.animation = 'pulse-glow 3s ease-in-out infinite';
                break;
              case 2:
                // Third feature: gentle rotation
                animationContainer.style.animation = 'gentle-rotate 8s linear infinite';
                break;
            }
          }

          // Add staggered bounce to circle elements in first feature
          if (index === 0) {
            const circleElements = svg.querySelectorAll('.circle-element');
            circleElements.forEach((circle, circleIndex) => {
              circle.style.animation = `subtle-bounce 2s ease-in-out infinite`;
              circle.style.animationDelay = `${circleIndex * 0.3}s`;
              circle.style.transformOrigin = 'center center';
            });
          }
        }
      });
    };

    // Initial animation setup with longer delay to ensure DOM is ready
    const timer = setTimeout(animateLottieElements, 300);

    // Also run on window resize to maintain sizing
    const handleResize = () => {
      const svgElements = document.querySelectorAll('.feature-item .lottie-content svg');
      svgElements.forEach((svg) => {
        if (window.innerWidth <= 768) {
          svg.style.width = '350px';
          svg.style.height = '220px';
          svg.style.transform = 'scale(1)';
        } else {
          svg.style.width = '500px';
          svg.style.height = '300px';
          svg.style.transform = 'scale(1.2)';
        }
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Last Published: Wed Aug 27 2025 13:44:42 GMT+0000 (Coordinated Universal Time) */}
      <meta charSet="utf-8" />
      <title>Credits</title>
      <meta
        content="Supercharge your business with viral video clips"
        name="description"
      />
      <meta content="Credits" property="og:title" />
      <meta
        content="Supercharge your business with viral video clips"
        property="og:description"
      />
      <meta
        content="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6714f90e3c68642767dafdbe_og-img.png"
        property="og:image"
      />
      <meta content="Credits" property="twitter:title" />
      <meta
        content="Supercharge your business with viral video clips"
        property="twitter:description"
      />
      <meta
        content="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6714f90e3c68642767dafdbe_og-img.png"
        property="twitter:image"
      />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
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
            "\n\n  \n  .swiper{\n  \theight: 100% !important;\n  }\n\n  ::-webkit-scrollbar {\n    width: 0px; \n    background: transparent;\n  }\n  \n  .swiper-slide{\n  \theight: auto !important;\n  }\n\n  .swiper-slide.testimonial_content{\n    width: 50% !important;\n    max-width: 61.625rem;\n  }\n\n  @media screen and (max-width: 479px){\n    .swiper-slide.testimonial_content{\n      width: 80% !important;\n    }\n\n  }\n\n  .swiper-slide.project_content{\n    width: 19.1875rem !important;\n  }\n\n  /* Credits Animation Styles */\n  .lottie-wrapper {\n    width: 100%;\n    height: 300px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1.5rem;\n    overflow: visible;\n  }\n  \n  .lottie-content {\n    width: 100%;\n    height: 100%;\n    min-height: 300px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .lottie-content svg {\n    width: 500px !important;\n    height: 300px !important;\n    min-width: 400px !important;\n    min-height: 250px !important;\n    transform: scale(1.2) !important;\n  }\n  \n  /* Animation keyframes for credits */\n  @keyframes float-animation {\n    0% { transform: translateY(0px); }\n    25% { transform: translateY(-10px); }\n    50% { transform: translateY(-20px); }\n    75% { transform: translateY(-10px); }\n    100% { transform: translateY(0px); }\n  }\n  \n  @keyframes pulse-glow {\n    0% { \n      opacity: 1; \n      filter: brightness(1) drop-shadow(0 0 5px rgba(245,209,255,0.5));\n    }\n    50% { \n      opacity: 0.8; \n      filter: brightness(1.3) drop-shadow(0 0 15px rgba(245,209,255,0.8));\n    }\n    100% { \n      opacity: 1; \n      filter: brightness(1) drop-shadow(0 0 5px rgba(245,209,255,0.5));\n    }\n  }\n  \n  @keyframes gentle-rotate {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n  \n  @keyframes subtle-bounce {\n    0%, 100% { transform: translateY(0px); }\n    50% { transform: translateY(-8px); }\n  }\n  \n  /* Apply animations to different elements with better visibility */\n  .feature-item:nth-child(1) .animation-container {\n    animation: float-animation 4s ease-in-out infinite;\n    transform-origin: center center;\n  }\n  \n  .feature-item:nth-child(1) .circle-element {\n    animation: subtle-bounce 2s ease-in-out infinite;\n  }\n  \n  .feature-item:nth-child(1) .circle-element:nth-child(2) {\n    animation-delay: 0.3s;\n  }\n  \n  .feature-item:nth-child(1) .circle-element:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  \n  .feature-item:nth-child(1) .circle-element:nth-child(4) {\n    animation-delay: 0.9s;\n  }\n  \n  .feature-item:nth-child(2) .animation-container {\n    animation: pulse-glow 3s ease-in-out infinite;\n    transform-origin: center center;\n  }\n  \n  .feature-item:nth-child(3) .animation-container {\n    animation: gentle-rotate 8s linear infinite;\n    transform-origin: center center;\n  }\n  \n  /* Ensure SVGs maintain their size */\n  .credits-animation-svg {\n    animation-play-state: running !important;\n    transform-origin: center center !important;\n    overflow: visible !important;\n  }\n  \n  .credits-animation-svg g {\n    transform-origin: center center !important;\n  }\n  \n  /* Scale animations based on screen size */\n  @media screen and (max-width: 768px) {\n    .lottie-wrapper {\n      height: 250px;\n    }\n    \n    .lottie-content {\n      min-height: 250px;\n    }\n    \n    .lottie-content svg {\n      width: 350px !important;\n      height: 220px !important;\n      min-width: 300px !important;\n      min-height: 200px !important;\n      transform: scale(1) !important;\n    }\n  }\n  \n  @media screen and (max-width: 479px) {\n    .lottie-content svg {\n      width: 280px !important;\n      height: 180px !important;\n      min-width: 250px !important;\n      min-height: 150px !important;\n    }\n  }\n\n"
        }}
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
      {/* Freshchat */}
      {/*Apollo Connect*/}
      {/* Facebook Pixel Code */}
      <noscript>
        &lt;img height="1" width="1"
        src="https://www.facebook.com/tr?id=762107452066759&amp;ev=PageView
        &amp;noscript=1"/&gt;
      </noscript>
      {/* End Facebook Pixel Code */}
      
        <div className="global_elements">
          <div className="g-tracking w-embed w-script">
            {/* Google tag (gtag.js) */}
          </div>
          <div className="global_embed w-embed">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n  body { \n    min-height: 0vw;\n    font-size: calc(0.5348725348725347vw + 0.4683790283790286em);\n  }\n\n\n  /* Max Font Size */\n  @media screen and (min-width:1432px) {\n    body { font-size: 0.9470899470899472em; }\n  }\n  /* Min Font Size */\n  @media screen and (max-width:991px) {\n    body { font-size: calc(0.1816347124117054vw + 0.6875em); }\n  }\n  .container {\n    max-width: 94.5em;\n  }\n  @media screen and (max-width:1200px) {\n    .button-2 {font-size: 0.9782251082251083rem;}\n  }\n\n/*gradient unclicakble*/\n.gradient-wrapper { pointer-events: none; }\n\n/*nav-bg*/\n.navbar {\n  background: linear-gradient(180deg, #080617 0%, rgba(8, 6, 23, 0.50) 56%, rgba(8, 6, 23, 0.00) 100%) !important; \n}\n\n/*intro*/\n.vsl-embed.intro-vid {\nbox-shadow: 0px 0px 84px 9px rgba(239, 136, 239, 0.20) !important;\n}\n\n/*hori scroll on mobile*/\n@media only screen and (max-width: 800px) {\n  .remote-wrap {\noverflow-x: scroll;\nwhite-space:nowrap;\n}\n}\n\n\n\n"
              }}
            />
          </div>
          <Navigation />
      </div>
      <div className="page-wrapper">
        <div className="hero-section credits">
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
          <div className="hero_component">
            <div className="container-new">
              <div
                data-w-id="d14a2c97-9e4a-914d-9bf9-9a14d44ffe79"

                className="hero-wrapper-4 credits"
              >
                <h1
                  data-w-id="d14a2c97-9e4a-914d-9bf9-9a14d44ffe7a"
                  className="hero-heading-2"
                >
                  Create your own
                  <br />
                  Video editing style
                </h1>
                <div
                  data-w-id="d14a2c97-9e4a-914d-9bf9-9a14d44ffe7c"
                  className="text-large max-width-616px align-center credits"
                >
                  Stop copying other peoples styles.
                  <br />
                  It's time to have your own
                </div>
              </div>
            </div>
            <h1
              data-w-id="5cc34c49-ac73-c065-f5fd-50832db0f43b"

              className="big-heading align-center credits"
            >
              Credits
            </h1>
          </div>
        </div>
        <div className="video-section hide">
          <div
            data-w-id="09482a03-6b98-6890-db1f-820ff0a417d3"

            className="container-4"
          >
            <div className="vsl-embed _2 w-embed w-iframe w-script">
              <div style={{ padding: "512px 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/6363388?h=73ce897dc4?badge=0&autopause=0&player_id=0&app_id=58479"
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
        <div className="features-section home">
          <div className="container_large">
            <div
              data-w-id="e32f9caf-eb4c-f5f0-33b4-5ed91ff1d310"

              className="title-wrapper max-width-662px"
            >
              <h2
                data-w-id="e32f9caf-eb4c-f5f0-33b4-5ed91ff1d311"
                className="section-heading center"
              >
                Stand out with signature videos
              </h2>
              <div
                data-w-id="e32f9caf-eb4c-f5f0-33b4-5ed91ff1d313"
                className="text-large-2 center"
              >
                Everyone’s videos look the same. Except yours. Because you’re not
                like everyone else. You’re not average.
              </div>
            </div>
            <div
              data-w-id="e32f9caf-eb4c-f5f0-33b4-5ed91ff1d315"

              className="features-list credits"
            >

              <div className="feature-item credits">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed63_Group%20835.svg"
                  alt=""
                  className="num-icon hide"
                />
                <div className="lottie-wrapper">
                  <div
                    className="lottie-content"
                    data-w-id="cebeb7d3-d0fc-f38f-aa52-b86e968a49ff"
                    data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674dc741e390c4b274f2fa7e_01.json"
                    data-loop={1}
                    data-direction={1}
                    data-autoplay={1}
                    data-is-ix2-target={0}
                    data-renderer="svg"
                    data-default-duration={0}
                    data-duration="5.605605377284623"
                  >
                   <img src='/git4-CGJixK3k.gif' />
                  </div>
                </div>
                <h3 className="feature-heading stand-out">Start showing up differently</h3>
                <div className="text-color-grey feature-credits">
                  Ditch the generic editing style, stand out and become easily recognized
                  with a uniquely branded &amp; consistent visual experience.
                </div>
              </div>
              <div className="feature-item credits">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed65_Group%20836.svg"
                  alt=""
                  className="num-icon hide"
                />
                <div className="lottie-wrapper">
                  <div
                    className="lottie-content"
                    data-w-id="b0b0eeb6-f813-98a1-1dca-bdc5b0ef3d85"
                    data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673ca14e254ca4f0781275b0_02.json"
                    data-loop={1}
                    data-direction={1}
                    data-autoplay={1}
                    data-is-ix2-target={0}
                    data-renderer="svg"
                    data-default-duration={0}
                    data-duration="3.370036566105636"
                  >
                    <img src='/git4-CGJixK3k.gif' />
                  </div>
                </div>
                <h3 className="feature-heading stand-out">
                  Work with an expert team you can trust.
                </h3>
                <div className="text-color-grey">
                  Stop dealing with freelancers who are learning on the job. Save a headache
                  trying to look for good talent, we train the best.
                </div>
              </div>
              <div className="feature-item credits">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed66_Group%20837.svg"
                  alt=""
                  className="num-icon hide"
                />
                <div className="lottie-wrapper">
                  <div
                    className="lottie-content"
                    data-w-id="2dca7b1b-25b1-c5cb-0add-38da31e6ff9e"
                    data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673ca14e99ddcf73ef52b06c_03.json"
                    data-loop={1}
                    data-direction={1}
                    data-autoplay={1}
                    data-is-ix2-target={0}
                    data-renderer="svg"
                    data-default-duration={0}
                    data-duration="3.870537046220335"
                  >
                   <img src='/git4-CGJixK3k.gif' />
                  </div>
                </div>
                <h3 className="feature-heading stand-out">
                  No more editing and feedback headaches.
                </h3>
                <div className="text-color-grey">
                  No more spending hours on countless revisions. Less revisions, better
                  videos that 5x your engagement and views.
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className="section">
          <div className="container-new padding-vert-big">
            <div className="title-wrapper max-width-662px">
              <h2
                data-w-id="c922e88d-70f1-3ba2-5718-28c6e0099bb5"

                className="section-heading center"
              >
                Turn your raw
                <br />
                videos into visual masterpieces
              </h2>
            </div>
            <div className="ba-wrapper center">
              <div className="ba-content">
                <img
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674f1442d40cd4619b2093fd_D_Raw.gif"
                  loading="lazy"
                  alt=""
                  className="ba-img cred"
                />
                <div>Before </div>
              </div>
              <div className="ba-content">
                <img
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/674f1461921154edc8a4a8ef_D_Final.gif"
                  loading="lazy"
                  alt=""
                  className="ba-img cred"
                />
                <div className="text-block-23">After</div>
              </div>
            </div>
          </div>
        </div>
        <div className="solution-section">
          <div className="container-new padding-vert-big padding-no-bottom">
            <div className="title-wrapper max-width-850px">
              <h2
                data-w-id="a24d4838-e2f3-e5fd-e987-e155ab09cd25"

                className="section-heading center"
              >
                loved by
                <br />
                top entrepreneurs
              </h2>
            </div>
          </div>
          <div className="container-new padding-vert-big padding-no-top">
            <div
              data-w-id="83b76a51-c814-a3a5-bbdd-f8cdf2c33b6d"

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
                        <div className="port-card_client-name">Khalifa Alsaadi</div>
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
              </div>
            </div>
            <div className="centered-heading">
              <a href="/portfolio" className="button-3 centre w-button">
                Explore More of Our Portfolio
              </a>
            </div>
          </div>
        </div>
        <div className="section drag">
          <div className="container-7 padding-vert-big">
            <div className="title-wrapper max-width-480px">
              <h2
                data-w-id="a95543e1-315f-edd9-0fdd-15e37b74c0be"

                className="section-heading center"
              >
                50M+ of organic views
              </h2>
            </div>
            <div className="drag-frame">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a7c557f00f71ca7ce0_D2.gif"
                alt=""
                className="drag-img _1 card1"
              />
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a6b32ff6cc59d99fad_G2.gif"
                alt=""
                className="drag-img _2 card2"
              />
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a67542acff2424014e_H2.gif"
                alt=""
                className="drag-img _3 card3"
              />
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673d93a6e9258cb7c67fde43_V2.gif"
                alt=""
                className="drag-img _4 card4"
              />
            </div>
          </div>
        </div>
        <div className="section drag">
          <div className="container-7 padding-vert-big">
            <div className="title-wrapper max-width-480px">
              <h2
                data-w-id="a0f11c01-04cd-ece7-a6e4-7a72882b9099"

                className="section-heading center"
              >
                Unlock a $5K Branding Bonus!
              </h2>
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67556a267fa59365e2cd5e75_Book%20Comp_1_optimized.gif"
                loading="lazy"
                alt=""
                className="image-6"
              />
            </div>
            <div className="title-wrapper max-width-850px">
              <p className="paragraph-8">
                When you partner with us, you’ll receive a complimentary Signature
                Branding Exercise—valued at $5,000—designed exclusively for you.
                It’s our way of ensuring your videos not only stand out but also
                stay true to your unique brand.
              </p>
            </div>
          </div>
        </div>
        <div className="results-section padding-bottom-0 hide">
          <div className="container_large padding-vert-big">
            <div
              data-w-id="cdc25800-a758-5eae-7db3-3bb4984efe28"

              className="title-wrapper max-width-662px hide"
            >
              <h2 className="section-heading center">Credits Pricing</h2>
              <div className="max-width-sub-header">
                <div className="text-large center">
                  Buy Credits Once, Use Them When <br />
                  You Need—It’s That Simple
                </div>
              </div>
            </div>
            <div
              data-w-id="cdc25800-a758-5eae-7db3-3bb4984efe30"

              className="pricing-wrapper-2"
            >
              <div className="title-wrapper-3">
                <h3 className="pricing-heading hide">Video Credits</h3>
                <div className="pricing-sub-heading">How many do you need?</div>
              </div>
              <div className="margin-top regular">
                <div className="pricing-small-text hide">Choose Credits</div>
              </div>
              <div className="margin-top small">
                <div
                  data-current={60}
                  data-easing="ease"
                  data-duration-in={300}
                  data-duration-out={100}
                  className="w-tabs"
                >
                  <div className="pricing-tab-menu w-tab-menu">
                    <a
                      data-w-tab={24}
                      className="price-tab-op-2 w-inline-block w-tab-link"
                    >
                      <div className="pricing-tab-title _1">24</div>
                    </a>
                    <a
                      data-w-tab={45}
                      className="price-tab-op-2 w-inline-block w-tab-link"
                    >
                      <div className="price-tab-badge-2">
                        <div className="price-tab-badge-text">Save 5%</div>
                      </div>
                      <div className="pricing-tab-title">45</div>
                    </a>
                    <a
                      data-w-tab={60}
                      className="price-tab-op-2 w-inline-block w-tab-link w--current"
                    >
                      <div className="price-tab-badge-2">
                        <div className="price-tab-badge-text">Save 10%</div>
                      </div>
                      <div className="pricing-tab-title">60</div>
                    </a>
                  </div>
                  <div className="tabs-content w-tab-content">
                    <div data-w-tab={24} className="w-tab-pane">
                      <div className="pricing-tab-content">
                        <div className="pricing-feature-content">
                          <div className="pricing-feature">
                            Signature Editing Style
                          </div>
                          <div className="pricing-feature">
                            World-Class Animations{" "}
                          </div>
                          <div className="pricing-feature">
                            Dedicated Production Manager
                          </div>
                          <div className="pricing-feature">
                            Expert Project Manager
                          </div>
                          <div className="pricing-feature">
                            Chat directly in Slack
                          </div>
                          <div className="pricing-feature">
                            Bonus Viral Templates{" "}
                          </div>
                          <div className="pricing-feature">
                            Bonus 400+ Viral Hooks
                          </div>
                        </div>
                        <div className="pricing-price-content">
                          <div className="pricing-discount-price opacity-0">
                            USD 5,000
                          </div>
                          <div className="pricing-price">USD 3,600</div>
                        </div>
                        <div className="pricing-cta-content align-center">
                          <a
                            href="https://buy.stripe.com/8wM29W3MN3zu0Fy16w"
                            className="button-3 green bold w-button"
                          >
                            Purchase Credits
                          </a>
                          <div className="pricing-plan">4 Months Validity</div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab={45} className="w-tab-pane">
                      <div className="pricing-tab-content">
                        <div className="pricing-feature-content">
                          <div className="pricing-feature">
                            Signature Editing Style
                          </div>
                          <div className="pricing-feature">
                            World-Class Animations{" "}
                          </div>
                          <div className="pricing-feature">
                            Dedicated Production Manager
                          </div>
                          <div className="pricing-feature">
                            Expert Project Manager
                          </div>
                          <div className="pricing-feature">
                            Chat directly in Slack
                          </div>
                          <div className="pricing-feature">
                            Bonus Viral Templates{" "}
                          </div>
                          <div className="pricing-feature">
                            Bonus 400+ Viral Hooks
                          </div>
                        </div>
                        <div className="pricing-price-content">
                          <div className="pricing-discount-price">USD 6,750</div>
                          <div className="pricing-price">USD 6,413</div>
                        </div>
                        <div className="pricing-cta-content align-center">
                          <a
                            href="https://buy.stripe.com/14k15S3MN1rmgEw3eG"
                            className="button-3 green bold w-button"
                          >
                            Purchase Credits
                          </a>
                          <div className="pricing-plan">5 Months Validity</div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab={60} className="w-tab-pane w--tab-active">
                      <div className="pricing-tab-content">
                        <div className="pricing-feature-content">
                          <div className="pricing-feature">
                            Signature Editing Style
                          </div>
                          <div className="pricing-feature">
                            World-Class Animations{" "}
                          </div>
                          <div className="pricing-feature">
                            Dedicated Production Manager
                          </div>
                          <div className="pricing-feature">
                            Expert Project Manager
                          </div>
                          <div className="pricing-feature">
                            Chat directly in Slack
                          </div>
                          <div className="pricing-feature">
                            Bonus Viral Templates{" "}
                          </div>
                          <div className="pricing-feature">
                            Bonus 400+ Viral Hooks
                          </div>
                        </div>
                        <div className="pricing-price-content">
                          <div className="pricing-discount-price">USD 9,000</div>
                          <div className="pricing-price">USD 8,145</div>
                        </div>
                        <div className="pricing-cta-content align-center">
                          <a
                            href="https://buy.stripe.com/dR66qc8333zu5ZS2aB"
                            className="button-3 green bold w-button"
                          >
                            Purchase Credits
                          </a>
                          <div className="pricing-plan">6 Months Validity</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                data-w-id="cdc25800-a758-5eae-7db3-3bb4984efe9e"

                className="tittle-wrapper-2 max-width-600px _2"
              >
                <h3 className="heading-20">Credit System</h3>
                <div className="text-large center">Your Credits, Your Way</div>
              </div>
              <div className="hide">
                <div className="div-block-18">
                  <div className="div-block-17">
                    <h3 className="heading-21">
                      Talking
                      <br />
                      Head Video
                    </h3>
                    <div className="text-block-25">Credit Cost</div>
                    <h3 className="heading-21 big">1</h3>
                  </div>
                  <div className="div-block-17">
                    <h3 className="heading-21">
                      Full
                      <br />
                      Animation
                    </h3>
                    <div className="text-block-25">Credit Cost</div>
                    <h3 className="heading-21 big">2</h3>
                  </div>
                </div>
              </div>
              <div className="credit-table-wrap-2">
                <div className="credit-table-row">
                  <div className="credit-table-text">[60 sec] - Talking Head</div>
                  <div className="info-wrapper">
                    <img
                      data-w-id="cdc25800-a758-5eae-7db3-3bb4984efebc"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c88f4aa6543f9eabc2de3_info-icon.svg"
                      className="info-icon"
                    />
                    <div

                      className="info-overlay-main"
                    >
                      <div
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="info-box-2"
                      >
                        <img
                          id="w-node-cdc25800-a758-5eae-7db3-3bb4984efebf-92e4ed2a"
                          loading="eager"
                          alt=""
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c9c2f8fe34d00a19b865a_Abe%20Jr%20-%20Power%20of%20Gut%20Feeling.gif"
                          className="ref-gif"
                        />
                        <img
                          data-w-id="cdc25800-a758-5eae-7db3-3bb4984efec0"
                          loading="lazy"
                          alt=""
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c8e7d441549e2ad4fed2b_close-icon.svg"
                          className="close"
                        />
                        <div
                          id="w-node-cdc25800-a758-5eae-7db3-3bb4984efec1-92e4ed2a"
                          className="info-content"
                        >
                          <h5>Talking Head Videos</h5>
                          <p className="paragraph-7">
                            A-roll content featuring you on camera, enhanced with
                            professional captions, animations, and transitions for a
                            clean, engaging look.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="credit-table-row right">
                  <div className="credit-table-text center">1 Credit</div>
                </div>
                <div className="credit-table-row">
                  <div className="credit-table-text">[60 sec] - Full Animation</div>
                  <div className="info-wrapper">
                    <img
                      data-w-id="cdc25800-a758-5eae-7db3-3bb4984efecd"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c88f4aa6543f9eabc2de3_info-icon.svg"
                      className="info-icon"
                    />
                    <div

                      className="info-overlay-main"
                    >
                      <div
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="info-box-2"
                      >
                        <img
                          id="w-node-cdc25800-a758-5eae-7db3-3bb4984efed0-92e4ed2a"
                          loading="eager"
                          alt=""
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c9c3b31591c889cd581a8_Steve%20Hill%20-%20when%20you%20hear%20dubai.gif"
                          className="ref-gif"
                        />
                        <img
                          data-w-id="cdc25800-a758-5eae-7db3-3bb4984efed1"
                          loading="lazy"
                          alt=""
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c8e7d441549e2ad4fed2b_close-icon.svg"
                          className="close"
                        />
                        <div
                          id="w-node-cdc25800-a758-5eae-7db3-3bb4984efed2-92e4ed2a"
                          className="info-content"
                        >
                          <h5 className="heading-22">Full Animation Videos</h5>
                          <p className="paragraph-7">
                            Fully animated with no A-roll. We use AI-generated
                            voiceovers and custom animations to bring your script to
                            life.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="credit-table-row right">
                  <div className="credit-table-text center">3 credits</div>
                </div>
                <div className="credit-table-row">
                  <div className="credit-table-text">
                    [2-5 mins] - Long Form Talking Head
                  </div>
                  <div className="info-wrapper">
                    <img
                      data-w-id="cdc25800-a758-5eae-7db3-3bb4984efede"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c88f4aa6543f9eabc2de3_info-icon.svg"
                      className="info-icon"
                    />
                    <div

                      className="info-overlay-main"
                    >
                      <div
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(0.7, 0.7, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="info-box-2"
                      >
                        <img
                          width="Auto"
                          id="w-node-cdc25800-a758-5eae-7db3-3bb4984efee1-92e4ed2a"
                          alt=""
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c9b22edfbfc73a8be2703_RadinXMarvin_1_optimized.gif"
                          loading="eager"
                          className="ref-gif hori"
                        />
                        <img
                          data-w-id="cdc25800-a758-5eae-7db3-3bb4984efee2"
                          loading="lazy"
                          alt=""
                          src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c8e7d441549e2ad4fed2b_close-icon.svg"
                          className="close"
                        />
                        <div
                          id="w-node-cdc25800-a758-5eae-7db3-3bb4984efee3-92e4ed2a"
                          className="info-content"
                        >
                          <h5 className="heading-22">
                            Long Form
                            <br />
                            Talking Head
                          </h5>
                          <p className="paragraph-7">
                            Horizontal videos combining your A-roll footage with
                            professional animations and high-quality B-roll for a
                            polished final product.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="credit-table-row right">
                  <div className="credit-table-text center">5 credits</div>
                </div>
                <div className="credit-table-row">
                  <div className="credit-table-text">
                    [5-10 mins] - Long Form Talking Head
                  </div>
                </div>
                <div className="credit-table-row right">
                  <div className="credit-table-text center">8 credits</div>
                </div>
                <div className="credit-table-row">
                  <div className="credit-table-text">
                    [10-15 mins] - Long Form Talking Head
                  </div>
                </div>
                <div className="credit-table-row right">
                  <div className="credit-table-text center">10 credits</div>
                </div>
                <div className="credit-table-row last">
                  <div className="credit-table-text">
                    [15-20 mins] - Long Form Talking Head
                  </div>
                </div>
                <div className="credit-table-row right last">
                  <div className="credit-table-text center">12 credits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section hide">
          <div className="container-new padding-vert-big">
            <div
              data-w-id="50f3ed4d-298e-69cb-10bc-a9c075663c08"

              className="tittle-wrapper-2 max-width-600px"
            >
              <h2 className="section-heading-2 center">How it works</h2>
              <div className="text-large-2 center">
                Your All-Access Pass to Editing Excellence
              </div>
            </div>
            <div className="hiw-grid">
              <div
                id="w-node-a87783f4-a102-8891-23b1-325bb1a8e932-92e4ed2a"
                className="feature-item ghost-offer mew"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed63_Group%20835.svg"
                  alt=""
                  className="num-icon small"
                />
                <h3 className="feature-heading small">Purchase Your Credits</h3>
                <div className="text-large feature small">
                  Access a world-class editing team and tackle all your video
                  challenges with our credit system.
                </div>
              </div>
              <div
                id="w-node-e17ebe72-7191-cb56-2b3d-38433e8b2155-92e4ed2a"
                className="feature-item ghost-offer mew"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed65_Group%20836.svg"
                  alt=""
                  className="num-icon small"
                />
                <h3 className="feature-heading small">Submit Your Raw Footage</h3>
                <div className="text-large feature small">
                  Submit your requests on your dashboard. Relax and let our team do
                  their thing.
                </div>
              </div>
              <div
                id="w-node-_25d2a360-d2a8-3f5c-0c15-f4440438896e-92e4ed2a"
                className="feature-item ghost-offer mew"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed66_Group%20837.svg"
                  alt=""
                  className="num-icon small"
                />
                <h3 className="feature-heading small">Approve your Branding</h3>
                <div className="text-large feature small">
                  We’ll create a unique visual style for your videos. Once approved,
                  we’ll send you a sample edit to review.
                </div>
              </div>
              <div
                id="w-node-_69beb47e-e8f6-b67d-3494-fc863fb170e9-92e4ed2a"
                className="feature-item ghost-offer mew"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/673c9f9ccd32619f8fc03b9e_4.svg"
                  alt=""
                  className="num-icon small"
                />
                <h3 className="feature-heading small">
                  Receive your Videos assets
                </h3>
                <div className="text-large feature small">
                  Once the sample is approved, we get straight to work on your full
                  batch of videos. Expect consistent, high-quality edits.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="1f7a2509-8b8a-bd3f-2a78-16cd08458780"
          className="features-section sticky hide"
        >
          <div className="container_large is-sticky">
            <div className="camera">
              <div
                data-w-id="1f7a2509-8b8a-bd3f-2a78-16cd08458783"

                className="tittle-wrapper-2 max-width-600px"
              >
                <h2 className="section-heading-2 center">Getting Started</h2>
                <div className="text-large-2 center">
                  Your All-Access Pass to Editing Excellence
                </div>
              </div>
              <div
                data-w-id="1f7a2509-8b8a-bd3f-2a78-16cd08458788"

                className="wedo-grid"
              >
                <div className="feature-item ghost-offer _1">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed63_Group%20835.svg"
                    alt=""
                    className="num-icon"
                  />
                  <h3 className="feature-heading">Start by Subscribing</h3>
                  <div className="text-large feature">
                    Access a world-class editing team and tackle all your video
                    challenges with our monthly membership.
                  </div>
                </div>
                <div className="feature-item ghost-offer _2">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed65_Group%20836.svg"
                    alt=""
                  />
                  <h3 className="feature-heading">
                    Send Raw <br />
                    Footage
                  </h3>
                  <div className="text-large feature">
                    Submit your requests on your dashboard. Relax and let our team
                    do their thing.
                  </div>
                </div>
                <div className="feature-item ghost-offer _3">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ed66_Group%20837.svg"
                    alt=""
                    className="num-icon"
                  />
                  <h3 className="feature-heading">Receive your Videos assets</h3>
                  <div className="text-large feature">
                    Receive your videos within a few business days. We'll revise the
                    videos until you're 100% satisfied.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-vert-big extra-top _2">
          <div className="container-new">
            <div className="tittle-wrapper-2 max-width-600px">
              <h2
                data-w-id="4f16303e-5d23-9174-f66f-b4ed1b6ebeaa"

                className="section-heading center"
              >
                How it works
              </h2>
              <div
                data-w-id="4f16303e-5d23-9174-f66f-b4ed1b6ebeac"

                className="text-large-2 center"
              >
                Your All-Access Pass to Editing Excellence
              </div>
            </div>
          </div>
          <div className="container-new top-pad">
            <div
              data-w-id="4f16303e-5d23-9174-f66f-b4ed1b6ebeaf"
              className="hiw-wrapper"
            >
              <div className="line-out">
                <div className="line-in" />
              </div>
              <div className="hiw-block-bg">
                <div className="hiw-block _1">
                  <h4 className="heading-18">Purchase Your Credits</h4>
                  <p className="paragraph-6">
                    Access a world-class editing team and tackle all your video
                    challenges with our credit system.
                  </p>
                </div>
              </div>
              <div className="hiw-block-bg">
                <div className="hiw-block _2">
                  <h4 className="heading-18">Submit Your Raw Footage</h4>
                  <p className="paragraph-6">
                    Submit your requests on your dashboard. Relax and let our team
                    do their thing.
                  </p>
                </div>
              </div>
              <div className="hiw-block-bg">
                <div className="hiw-block _3">
                  <h4 className="heading-18">Approve your Branding</h4>
                  <p className="paragraph-6">
                    We’ll create a unique visual style for your videos. Once
                    approved, we’ll send you a sample edit to review.
                  </p>
                </div>
              </div>
              <div className="hiw-block-bg">
                <div className="hiw-block _4">
                  <h4 className="heading-18">Receive your Videos assets</h4>
                  <p className="paragraph-6">
                    Once the sample is approved, we get straight to work on your
                    full batch of videos. Expect consistent, high-quality edits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="faq" className="faq-section">
          <div className="container_large">
            <div className="faq-wrapper">
              <div className="faq-heading-wrapper">
                <h3
                  data-w-id="dfd39969-7a8b-7937-bd09-0c22a320f370"

                  className="feature-heading"
                >
                  Have More Questions?
                </h3>
                <div className="faq-bottom">
                  <div className="text-large-4">
                    Need more information?
                    <br />
                    Book a 30 mins discovery call.
                  </div>
                  <a href="https://wa.me/message/4KAVDMIYUEA3K1" className="button-3 green w-button">
                    Book a call
                  </a>
                </div>
              </div>
              <div
                data-w-id="dfd39969-7a8b-7937-bd09-0c22a320f377"

                className="faq-list"
              >
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="dfd39969-7a8b-7937-bd09-0c22a320f379"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      What is the credit system, and how is it different from a
                      typical membership?
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
                      <div>
                        Our credit system offers ultimate flexibility. Instead of
                        being tied to a monthly membership, you purchase video
                        editing credits upfront. Each credit equals one video edit,
                        and you have a set validity period to use them, giving you
                        more freedom to edit videos at your own pace without the
                        stress of a monthly commitment.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="dfd39969-7a8b-7937-bd09-0c22a320f383"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">How do I use my credits?</h3>
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
                      <div>
                        It’s simple! Once you’ve purchased your credits, you can
                        submit raw footage through your dashboard whenever you’re
                        ready. Our team will take it from there, delivering
                        high-quality, branded edits for each credit you redeem.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="dfd39969-7a8b-7937-bd09-0c22a320f38d"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      What happens if I don’t use all my credits right away?
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
                      <div>
                        No worries! Unlike monthly memberships, your credits don’t
                        expire immediately. You’ll have a generous validity period
                        to use them, so you can plan your content without feeling
                        rushed.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="dfd39969-7a8b-7937-bd09-0c22a320f397"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      Can I purchase more credits if I run out?
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
                      <div>
                        Absolutely! You can easily top up your credits at any time.
                        We also offer bulk purchasing options with discounted rates
                        for larger credit packages.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="dfd39969-7a8b-7937-bd09-0c22a320f3a1"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      Is the credit system suitable for businesses of all sizes?
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
                      <div>
                        Yes! Whether you’re an individual creator or a large agency,
                        our credit system adapts to your needs. It’s perfect for
                        those who need flexibility and prefer not to be locked into
                        a monthly subscription.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="dfd39969-7a8b-7937-bd09-0c22a320f3ab"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      What if I want ongoing, consistent editing support?
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
                      <div>
                        If you’re looking for a tailored solution with consistent,
                        monthly editing support, we can customize a plan that fits
                        your specific needs. Reach out to us directly, and we’ll
                        create a package that works best for you.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="dfd39969-7a8b-7937-bd09-0c22a320f3bf"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      How long does the process take?
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
                      <div>
                        It depends on whether you already have an existing brand or
                        if we’re creating your visual style from scratch. Typically,
                        the branding process takes about 1 week. After that, we
                        deliver your first sample video within 3-5 business days.
                        Once the sample is approved, we move quickly to complete
                        your full batch of videos with a fast and efficient
                        turnaround.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="470ce58c-671c-d58f-5661-d14f5df64ca1"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      Do you offer revisions if I’m not satisfied with the edit?
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
                      <div>
                        Absolutely. We offer a streamlined revision process to make
                        sure you’re happy with the final product. Our goal is to get
                        it right the first time, so revisions are often minimal.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="b9328248-5d0d-386f-4ab1-472787071c84"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">
                      What results can I expect from using your service?
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
                      <div>
                        Our clients typically see a boost in engagement, brand
                        recognition, and video views after using our service. With
                        our unique, branded edits, your content will stand out and
                        attract more attention across platforms.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="e0a3bc2d-32db-5a1b-fcbf-f326cc03d18a"
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
                      <div>
                        You’ll be onboarded to our Slack workspace, where you’ll
                        have direct access to your dedicated production manager.
                        This streamlined communication channel allows you to share
                        feedback easily, ask questions, and stay updated on your
                        project in real time. We make sure your input is heard and
                        implemented efficiently.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "rgb(219,219,219)" }} className="faq-item-2">
                  <div
                    data-w-id="2fc0906f-59b8-976e-f795-c4c1d2afe30c"
                    className="faq-title-wrapper"
                  >
                    <h3 className="faq-question-2">How do I get started?</h3>
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
                      <div>
                        It’s simple! Just select your package, submit your footage,
                        and we’ll take it from there. You’ll have your first branded
                        sample video in no time.
                      </div>
                    </div>
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
                    <a href="/ghosthost" className="footer-link">
                      GhostHost™
                    </a>
                    <a
                      href="/credits"
                      aria-current="page"
                      className="footer-link w--current"
                    >
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

  )
}

export default Credits;
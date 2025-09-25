import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ClientSuccess = () => {
  const [activeTab, setActiveTab] = useState('Success Stories');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      {/* Last Published: Wed Aug 27 2025 13:44:42 GMT+0000 (Coordinated Universal Time) */}
      <meta charSet="utf-8" />
      <title>Client Success</title>
      <meta
        content="Supercharge your business with viral video clips"
        name="description"
      />
      <meta content="Client Success" property="og:title" />
      <meta
        content="Supercharge your business with viral video clips"
        property="og:description"
      />
      <meta
        content="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6714f90e3c68642767dafdbe_og-img.png"
        property="og:image"
      />
      <meta content="Client Success" property="twitter:title" />
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
        <div className="gradient-wrapper" style={{ zIndex: 0 }}>
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
        <div className="section hero client-success" style={{ zIndex: 1, position: 'relative' }}>
          <div className="container hero-3 clint-success">
            <div className="div-18">
              <h1 className="hero-heading" >Client Success</h1>
              <p className="text-size-big hero-2">
                Look at what our clients have to say about working with us.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container client-success">
            <div
              data-current="Success Stories"
              data-easing="ease"
              data-duration-in={300}
              data-duration-out={100}
              className="w-tabs"
            >
              <div className="tab-menu-2 w-tab-menu">
                <a
                  data-w-tab="Success Stories"
                  className={`tab-option w-inline-block w-tab-link ${activeTab === 'Success Stories' ? 'w--current' : ''}`}
                  onClick={() => handleTabClick('Success Stories')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="tab-option-text">Case Studies</div>
                </a>
                <a
                  data-w-tab="Testimonials"
                  className={`tab-option w-inline-block w-tab-link ${activeTab === 'Testimonials' ? 'w--current' : ''}`}
                  onClick={() => handleTabClick('Testimonials')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="tab-option-text">Testimonials</div>
                </a>
              </div>
              <div className="w-tab-content">
                <div
                  data-w-tab="Success Stories"
                  className={`w-tab-pane ${activeTab === 'Success Stories' ? 'w--tab-active' : ''}`}
                  style={{ display: activeTab === 'Success Stories' ? 'block' : 'none' }}
                >
                  <div className="success-broad-contain">
                    <div className="w-dyn-list">
                      <div role="list" className="success-broad w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div className="result-item broad">
                            <div className="result-content broad">
                              <div>
                                <div className="result-client">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg"
                                    alt=""
                                    sizes="(max-width: 991px) 49px, 4vw"
                                    srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg 750w"
                                    className="port-card_img big"
                                  />
                                  <div className="client-cred">
                                    <div className="client-name">Dr Medhat</div>
                                    <div className="div-30">
                                      <div className="cred-label">Pediatrician</div>
                                      <div className="solution-tag hide">
                                        <div className="solution-tag-label">
                                          66k
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="result-heading">
                                  “I love working with this team. I feel so
                                  comfortable and everyone is amazing”
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
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a2"
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
                                      <div className="stat-label">Views</div>
                                    </div>
                                  </div>
                                  <div className="result-stats-item">
                                    <div
                                      className="lottie-content _3"
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a8"
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
                                        Followers gained
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="w-node-f11954d8-6c6f-ec5b-92fb-77fa8fe972ad-fb5de097"
                              className="result-embed-wrapper broad"
                            >
                              <div className="vsl-embed _2 w-embed w-iframe w-script">
                                <div
                                  style={{
                                    padding: "177.78% 0 0 0",
                                    position: "relative"
                                  }}
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
                        <div role="listitem" className="w-dyn-item">
                          <div className="result-item broad">
                            <div className="result-content broad">
                              <div>
                                <div className="result-client">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg"
                                    alt=""
                                    sizes="(max-width: 991px) 49px, 4vw"
                                    srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg 1080w"
                                    className="port-card_img big"
                                  />
                                  <div className="client-cred">
                                    <div className="client-name">
                                      svenja maltzahn
                                    </div>
                                    <div className="div-30">
                                      <div className="cred-label">Entrepreneur</div>
                                      <div className="solution-tag hide">
                                        <div className="solution-tag-label">
                                          4.6K+
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="result-heading">
                                  “I’m getting so many requests I think I should
                                  stop posting videos”
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
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a2"
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
                                      <div className="stat-label">Views</div>
                                    </div>
                                  </div>
                                  <div className="result-stats-item">
                                    <div
                                      className="lottie-content _3"
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a8"
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
                                        Followers gained
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="w-node-f11954d8-6c6f-ec5b-92fb-77fa8fe972ad-fb5de097"
                              className="result-embed-wrapper broad"
                            >
                              <div className="vsl-embed _2 w-embed w-iframe w-script">
                                <div
                                  style={{
                                    padding: "177.78% 0 0 0",
                                    position: "relative"
                                  }}
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
                        <div role="listitem" className="w-dyn-item">
                          <div className="result-item broad">
                            <div className="result-content broad">
                              <div>
                                <div className="result-client">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg"
                                    alt=""
                                    sizes="(max-width: 991px) 49px, 4vw"
                                    srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg 1080w"
                                    className="port-card_img big"
                                  />
                                  <div className="client-cred">
                                    <div className="client-name">Thera</div>
                                    <div className="div-30">
                                      <div className="cred-label">
                                        Wellness Brand
                                      </div>
                                      <div className="solution-tag hide">
                                        <div className="solution-tag-label">
                                          72K+
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="result-heading">
                                  "The quality of work is amazing and the value
                                  we’re getting is great"
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
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a2"
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
                                      <div className="stat-label">Views</div>
                                    </div>
                                  </div>
                                  <div className="result-stats-item">
                                    <div
                                      className="lottie-content _3"
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a8"
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
                                        Followers gained
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="w-node-f11954d8-6c6f-ec5b-92fb-77fa8fe972ad-fb5de097"
                              className="result-embed-wrapper broad"
                            >
                              <div className="vsl-embed _2 w-embed w-iframe w-script">
                                <div
                                  style={{
                                    padding: "177.78% 0 0 0",
                                    position: "relative"
                                  }}
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
                        <div role="listitem" className="w-dyn-item">
                          <div className="result-item broad">
                            <div className="result-content broad">
                              <div>
                                <div className="result-client">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg"
                                    alt=""
                                    sizes="(max-width: 991px) 49px, 4vw"
                                    srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg 1080w"
                                    className="port-card_img big"
                                  />
                                  <div className="client-cred">
                                    <div className="client-name">Sekhar Mutha</div>
                                    <div className="div-30">
                                      <div className="cred-label">
                                        Thought Leader
                                      </div>
                                      <div className="solution-tag hide">
                                        <div className="solution-tag-label">
                                          102K+
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="result-heading">
                                  “You understood what I wanted to achieve, and with
                                  your team I was able to go online and grow my
                                  brand”
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
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a2"
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
                                      <div className="stat-label">Views</div>
                                    </div>
                                  </div>
                                  <div className="result-stats-item">
                                    <div
                                      className="lottie-content _3"
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a8"
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
                                        Followers gained
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="w-node-f11954d8-6c6f-ec5b-92fb-77fa8fe972ad-fb5de097"
                              className="result-embed-wrapper broad"
                            >
                              <div className="vsl-embed _2 w-embed w-iframe w-script">
                                <div
                                  style={{
                                    padding: "177.78% 0 0 0",
                                    position: "relative"
                                  }}
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
                        <div role="listitem" className="w-dyn-item">
                          <div className="result-item broad">
                            <div className="result-content broad">
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
                                        <div className="solution-tag-label">
                                          68k+
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="result-heading">
                                  “What I do with you in 1 hour used to take me a
                                  full day on a TV set. I gained so much insights
                                  from our sessions ”
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
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a2"
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
                                      <div className="stat-label">Views</div>
                                    </div>
                                  </div>
                                  <div className="result-stats-item">
                                    <div
                                      className="lottie-content _3"
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a8"
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
                                        Followers gained
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="w-node-f11954d8-6c6f-ec5b-92fb-77fa8fe972ad-fb5de097"
                              className="result-embed-wrapper broad"
                            >
                              <div className="vsl-embed _2 w-embed w-iframe w-script">
                                <div
                                  style={{
                                    padding: "177.78% 0 0 0",
                                    position: "relative"
                                  }}
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
                        <div role="listitem" className="w-dyn-item">
                          <div className="result-item broad">
                            <div className="result-content broad">
                              <div>
                                <div className="result-client">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67025756be96d71592e4ed07_Ellipse%20235.svg"
                                    alt=""
                                    className="port-card_img big"
                                  />
                                  <div className="client-cred">
                                    <div className="client-name">
                                      Dr. Sara Alhammadi
                                    </div>
                                    <div className="div-30">
                                      <div className="cred-label">
                                        Prosthodontist
                                      </div>
                                      <div className="solution-tag hide">
                                        <div className="solution-tag-label">
                                          96k+
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="result-heading">
                                  “I’m like a puppet between your hands. It takes a
                                  village to do what you do. Really you have an
                                  amazing team”
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
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a2"
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
                                      <div className="stat-label">Views</div>
                                    </div>
                                  </div>
                                  <div className="result-stats-item">
                                    <div
                                      className="lottie-content _3"
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a8"
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
                                        Followers gained
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="w-node-f11954d8-6c6f-ec5b-92fb-77fa8fe972ad-fb5de097"
                              className="result-embed-wrapper broad"
                            >
                              <div className="vsl-embed _2 w-embed w-iframe w-script">
                                <div
                                  style={{
                                    padding: "177.78% 0 0 0",
                                    position: "relative"
                                  }}
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
                        <div role="listitem" className="w-dyn-item">
                          <div className="result-item broad">
                            <div className="result-content broad">
                              <div>
                                <div className="result-client">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205d08310cb0bd1bda4bca_vivien.jpg"
                                    alt=""
                                    className="port-card_img big"
                                  />
                                  <div className="client-cred">
                                    <div className="client-name">
                                      Dr Vivien Moris
                                    </div>
                                    <div className="div-30">
                                      <div className="cred-label">
                                        Plastic Surgeon
                                      </div>
                                      <div className="solution-tag hide">
                                        <div className="solution-tag-label">
                                          137k+
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="result-heading">
                                  “This is an amazing company. They helped me with
                                  the content ideas and the results are amazing ”
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
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a2"
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
                                      <div className="stat-label">Views</div>
                                    </div>
                                  </div>
                                  <div className="result-stats-item">
                                    <div
                                      className="lottie-content _3"
                                      data-w-id="f11954d8-6c6f-ec5b-92fb-77fa8fe972a8"
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
                                        Followers gained
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="w-node-f11954d8-6c6f-ec5b-92fb-77fa8fe972ad-fb5de097"
                              className="result-embed-wrapper broad"
                            >
                              <div className="vsl-embed _2 w-embed w-iframe w-script">
                                <div
                                  style={{
                                    padding: "177.78% 0 0 0",
                                    position: "relative"
                                  }}
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
                <div data-w-tab="Testimonials" className={`w-tab-pane ${activeTab === 'Testimonials' ? 'w--tab-active' : ''}`}
                  style={{ display: activeTab === 'Testimonials' ? 'block' : 'none' }}
                >
                  <div
                    data-w-id="e8a49e37-376a-0c7b-6b46-43ba937a2b5b"

                    className="collection-list-wrapper-2 w-dyn-list"
                  >
                    <div
                      fs-cmsslider-element="list"
                      role="list"
                      className="work-grid flex portfolio padding-top w-dyn-items"
                    >
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019832195?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Abe Jr"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f791d42d2dabfa806b1ff_Abe.jpg 850w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Abelardo Bandeira
                              </div>
                              <div className="port-card_job-title">
                                Entrepreneur
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/897535468?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Ahmad Khabier"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205f1d310cb0bd1bdbd623_AK.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205f1d310cb0bd1bdbd623_AK-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205f1d310cb0bd1bdbd623_AK-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205f1d310cb0bd1bdbd623_AK.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Ahmad Khabier{" "}
                              </div>
                              <div className="port-card_job-title">Real Estate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/897535493?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Brenton Price"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720865799e3b5e1ff0902bf_Brenton%20Price.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720865799e3b5e1ff0902bf_Brenton%20Price-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720865799e3b5e1ff0902bf_Brenton%20Price-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720865799e3b5e1ff0902bf_Brenton%20Price.jpg 1053w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Brenton Price
                              </div>
                              <div className="port-card_job-title">
                                Entrepreneur
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/897535512?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Chris V"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Chris Velkovski
                              </div>
                              <div className="port-card_job-title">
                                Founder @LuckyPunch
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1073121653?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Dr Medhat"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg 750w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">Dr Medhat</div>
                              <div className="port-card_job-title">
                                Pediatrician
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/897535562?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Dr Sara"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67025756be96d71592e4ed07_Ellipse%20235.svg"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Dr. Sara Alhammadi
                              </div>
                              <div className="port-card_job-title">
                                Prosthodontist
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019832864?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Dr. Leonard"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77f625e184c1e2fc52cd_Leo.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77f625e184c1e2fc52cd_Leo-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77f625e184c1e2fc52cd_Leo-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77f625e184c1e2fc52cd_Leo.jpg 1039w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Leonard Josipovic
                              </div>
                              <div className="port-card_job-title">
                                Plastic Surgeon
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019832271?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Dr.Diana"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78c81894853479d13778_Diana.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78c81894853479d13778_Diana-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78c81894853479d13778_Diana-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78c81894853479d13778_Diana.jpg 997w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Dr.Diana Chehab
                              </div>
                              <div className="port-card_job-title">
                                Cosmetic Dentist
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/897537706?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Dr.Vivien"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205d08310cb0bd1bda4bca_vivien.jpg"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Dr Vivien Moris
                              </div>
                              <div className="port-card_job-title">
                                Plastic Surgeon
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019833007?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Fondako Media"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f776638cfe1b827beff1f_Fondako.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f776638cfe1b827beff1f_Fondako-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f776638cfe1b827beff1f_Fondako-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f776638cfe1b827beff1f_Fondako.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Fondako Media
                              </div>
                              <div className="port-card_job-title">
                                Consulting Agency
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/897535536?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Hafiz"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720871dfc600199c9c65e5f_Hafiz.jpg"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Mohamed Hafiz
                              </div>
                              <div className="port-card_job-title">
                                Business Coach
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019832357?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Hala Barghout"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f783fcafc3926c2536c82_Hala_alt.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f783fcafc3926c2536c82_Hala_alt-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f783fcafc3926c2536c82_Hala_alt-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f783fcafc3926c2536c82_Hala_alt.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Hala Barghout
                              </div>
                              <div className="port-card_job-title">
                                Founder @colourmyplate
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019832578?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Hassan Asad"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7817d10bc61bb82169ab_Hassan.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7817d10bc61bb82169ab_Hassan-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7817d10bc61bb82169ab_Hassan-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7817d10bc61bb82169ab_Hassan.jpg 978w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Dr Hassan Asad
                              </div>
                              <div className="port-card_job-title">
                                Cosmetic Dentist
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019832742?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Khalifa Alsaadi"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77e9e57cb1493b45c9e0_Khalifa.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77e9e57cb1493b45c9e0_Khalifa-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77e9e57cb1493b45c9e0_Khalifa.jpg 573w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Khalifa Alsaadi
                              </div>
                              <div className="port-card_job-title">
                                Infotainment
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/897543071?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Leena Parwani"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672089790ae1a37f952ba7e5_Leena%20P.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672089790ae1a37f952ba7e5_Leena%20P-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672089790ae1a37f952ba7e5_Leena%20P-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672089790ae1a37f952ba7e5_Leena%20P.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Leena Parwani
                              </div>
                              <div className="port-card_job-title">
                                Investment Advisor
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019832926?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Mira Daher"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77a51894853479cffa64_Mira.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77a51894853479cffa64_Mira-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77a51894853479cffa64_Mira-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77a51894853479cffa64_Mira.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Mira Daher
                              </div>
                              <div className="port-card_job-title">
                                Digital Consultant
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1073128813?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Munir Al Deraawi"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6802993f633d04d2385656d5_Munir.png"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6802993f633d04d2385656d5_Munir-p-500.png 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6802993f633d04d2385656d5_Munir-p-800.png 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6802993f633d04d2385656d5_Munir.png 906w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Munir Al Deraawi
                              </div>
                              <div className="port-card_job-title">Real Estate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019833075?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Rakan Alalami"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7744c404bc493a4f10c8_Rakan.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7744c404bc493a4f10c8_Rakan-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7744c404bc493a4f10c8_Rakan.jpg 640w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Rakan Alalami
                              </div>
                              <div className="port-card_job-title">
                                Founder @UnWind Properties
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1073122801?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Reem Alsayegh"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/680297f60fbb09399a58f021_reem.jpg"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Reem Alsayegh
                              </div>
                              <div className="port-card_job-title">Lawyer</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019833207?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Riham S"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f777325e184c1e2fbef60_Riham.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f777325e184c1e2fbef60_Riham-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f777325e184c1e2fbef60_Riham-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f777325e184c1e2fbef60_Riham.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Riham Shamseddine
                              </div>
                              <div className="port-card_job-title">
                                Nutritionist
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/897540097?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Sekhar Mutha"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Sekhar Mutha
                              </div>
                              <div className="port-card_job-title">
                                Thought Leader
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019833291?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Shoug"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76d256f5d1fb46123255_Shougg.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76d256f5d1fb46123255_Shougg-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76d256f5d1fb46123255_Shougg-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76d256f5d1fb46123255_Shougg.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Shoug AlShirazi
                              </div>
                              <div className="port-card_job-title">
                                Travel Influencer
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1019833404?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Steve Hill"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve.jpg 1024w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Steve Hill
                              </div>
                              <div className="port-card_job-title">
                                Personal Coach
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/897535580?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Suzan T"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76be32f450befd331ba6_Suzan.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76be32f450befd331ba6_Suzan-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76be32f450befd331ba6_Suzan-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76be32f450befd331ba6_Suzan.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                Suzan Terzian
                              </div>
                              <div className="port-card_job-title">
                                Holistic Nutritionist
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1073123168?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Svenja"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg"
                              sizes="(max-width: 991px) 35.875px, 3vw"
                              srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg 1080w"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">
                                svenja maltzahn
                              </div>
                              <div className="port-card_job-title">
                                Entrepreneur
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="port-item w-dyn-item">
                        <div className="portfolio-card border">
                          <div className="vsl-embed _2 w-embed w-iframe w-script">
                            <div
                              style={{
                                padding: "177.78% 0 0 0",
                                position: "relative"
                              }}
                            >
                              <iframe
                                src="https://player.vimeo.com/video/1073126053?badge=0&autopause=0&player_id=0&app_id=58479"
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
                              alt="Vennre"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/680296859f31d028e8d2e9d4_vennre%20dp.jpg"
                              className="port-card_img"
                            />
                            <div className="w-layout-vflex common-v-flex">
                              <div className="port-card_client-name">Vennre</div>
                              <div className="port-card_job-title">
                                Digital Wealth Management
                              </div>
                            </div>
                          </div>
                        </div>
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
                    <Link to="/ghosthost" className="footer-link">
                      GhostHost™
                    </Link>
                    <Link to="/credits" className="footer-link">
                      Credits™
                    </Link>
                    <Link to="/powerpod" className="footer-link">
                      PowerPod™
                    </Link>
                  </div>
                  <div className="footer-column">
                    <div className="footer-title">Company</div>
                    <Link to="/" className="footer-link">
                      What We Do
                    </Link>
                    <Link to="/portfolio" className="footer-link">
                      Our Work
                    </Link>
                    <Link
                      to="/client-success"
                      aria-current="page"
                      className="footer-link w--current"
                    >
                      Client Success
                    </Link>
                    <div>
                      <Link to="/careers" className="footer-link">
                        Careers
                      </Link>
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
                    <Link to="https://wa.me/message/4KAVDMIYUEA3K1" className="footer-link">
                      Book a Call
                    </Link>
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
                  <Link to="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </Link>
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
      {/* This site is converting visitors into subscribers and customers with https://respond.io */}
      {/* https://respond.io */}
    </>


  );
};

export default ClientSuccess;

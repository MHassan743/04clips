import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            {/* Last Published: Wed Aug 27 2025 13:44:42 GMT+0000 (Coordinated Universal Time) */}
            <meta charSet="utf-8" />
            <title>Portfolio</title>
            <meta
                content="Supercharge your business with viral video clips"
                name="description"
            />
            <meta content="Portfolio" property="og:title" />
            <meta
                content="Supercharge your business with viral video clips"
                property="og:description"
            />
            <meta
                content="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/6714f90e3c68642767dafdbe_og-img.png"
                property="og:image"
            />
            <meta content="Portfolio" property="twitter:title" />
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
                <div className="section hero portfolio">
                    <div className="container hero-3">
                        <div className="div-18">
                            <h1 className="hero-heading">Portfolio</h1>
                            <p className="text-size-big hero-2">
                                Strategically Crafted Branded Signature Edits Uniquely Designed for
                                Our Partners and Their Audiences
                            </p>
                        </div>
                    </div>
                </div>
                <div id="work" className="section">
                    <div className="container our-work portfolio">
                        <div
                            data-w-id="b0c1e8b7-2e62-608e-d93d-57a0b0a4d011"
                            
                            className="collection-list-wrapper-2 w-dyn-list"
                        >
                            <div
                                fs-cmsslider-element="list"
                                role="list"
                                className="work-grid flex portfolio w-dyn-items"
                            >
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
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
                                                sizes="(max-width: 991px) 35.875px, 3vw"
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
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/897533327?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205f1d310cb0bd1bdbd623_AK.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205f1d310cb0bd1bdbd623_AK-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205f1d310cb0bd1bdbd623_AK-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205f1d310cb0bd1bdbd623_AK.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Ahmad Khabier </div>
                                                <div className="port-card_job-title">Real Estate</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1024251310?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d21388c19d059612b0c_ajmal.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d21388c19d059612b0c_ajmal-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d21388c19d059612b0c_ajmal-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d21388c19d059612b0c_ajmal.jpg 960w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Abdullah Ajmal</div>
                                                <div className="port-card_job-title">
                                                    CEO @ajmalperfumes
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019847364?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7909498849c55bb31a9e_Avin.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7909498849c55bb31a9e_Avin-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7909498849c55bb31a9e_Avin-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7909498849c55bb31a9e_Avin.jpg 874w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Avin Shahani</div>
                                                <div className="port-card_job-title">Entrepreneur</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019845065?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78fa1894853479d15b1f_Carine.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78fa1894853479d15b1f_Carine-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78fa1894853479d15b1f_Carine-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78fa1894853479d15b1f_Carine.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Carine Bouery</div>
                                                <div className="port-card_job-title">Coach</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019852854?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78b825e184c1e2fcdca6_Carole.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78b825e184c1e2fcdca6_Carole-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78b825e184c1e2fcdca6_Carole-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78b825e184c1e2fcdca6_Carole.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Carole Semaan</div>
                                                <div className="port-card_job-title">Skin Care</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1024282968?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672086b4b670001f8224ed32_Chris%20V.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Chris Velkovski</div>
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
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1024285137?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ec5abb55d6a79ab658b_dunia.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ec5abb55d6a79ab658b_dunia-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ec5abb55d6a79ab658b_dunia-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ec5abb55d6a79ab658b_dunia.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">
                                                    Dr. Dunia Ezzeddine
                                                </div>
                                                <div className="port-card_job-title">Dentist</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
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
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg 750w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Dr Medhat</div>
                                                <div className="port-card_job-title">Pediatrician</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019845382?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78c81894853479d13778_Diana.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78c81894853479d13778_Diana-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78c81894853479d13778_Diana-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78c81894853479d13778_Diana.jpg 997w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Dr.Diana Chehab</div>
                                                <div className="port-card_job-title">Cosmetic Dentist</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
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
                                                sizes="(max-width: 991px) 35.875px, 3vw"
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
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
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
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78e3f439fbf6048e6bbb_Dr%20Lindsey-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78e3f439fbf6048e6bbb_Dr%20Lindsey-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78e3f439fbf6048e6bbb_Dr%20Lindsey.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Dr Lindsey</div>
                                                <div className="port-card_job-title">Acupuncturist</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019850164?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7796607f6c4341edc031_Nail.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7796607f6c4341edc031_Nail-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7796607f6c4341edc031_Nail-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7796607f6c4341edc031_Nail.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Dr Nail Dia</div>
                                                <div className="port-card_job-title">Entrepreneur</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/897533461?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205d08310cb0bd1bda4bca_vivien.jpg"
                                                loading="lazy"
                                                alt=""
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Dr Vivien Moris</div>
                                                <div className="port-card_job-title">Plastic Surgeon</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019848218?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7862c7c288397a853faf_Entropy.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7862c7c288397a853faf_Entropy-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7862c7c288397a853faf_Entropy-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7862c7c288397a853faf_Entropy.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Entropy</div>
                                                <div className="port-card_job-title">
                                                    Martial Arts School
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019848835?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78a82abd0241d7cd7f01_Exquis.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78a82abd0241d7cd7f01_Exquis-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78a82abd0241d7cd7f01_Exquis-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f78a82abd0241d7cd7f01_Exquis.jpg 1070w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Exquis</div>
                                                <div className="port-card_job-title">Jewelry</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019845517?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f776638cfe1b827beff1f_Fondako.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f776638cfe1b827beff1f_Fondako-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f776638cfe1b827beff1f_Fondako-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f776638cfe1b827beff1f_Fondako.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Fondako Media</div>
                                                <div className="port-card_job-title">Consulting Agency</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1024293482?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720871dfc600199c9c65e5f_Hafiz.jpg"
                                                loading="lazy"
                                                alt=""
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Mohamed Hafiz</div>
                                                <div className="port-card_job-title">Business Coach</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019845906?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f783fcafc3926c2536c82_Hala_alt.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f783fcafc3926c2536c82_Hala_alt-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f783fcafc3926c2536c82_Hala_alt-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f783fcafc3926c2536c82_Hala_alt.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Hala Barghout</div>
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
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f782956f5d1fb46137d77_KBFilms-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f782956f5d1fb46137d77_KBFilms.jpg 691w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">KB Films</div>
                                                <div className="port-card_job-title">Infotainment</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
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
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77e9e57cb1493b45c9e0_Khalifa-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77e9e57cb1493b45c9e0_Khalifa.jpg 573w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Khalifa Alsaadi</div>
                                                <div className="port-card_job-title">Infotainment</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
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
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1024283413?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205c43ac0991a8522d53da_mahmoud%20bartawi.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205c43ac0991a8522d53da_mahmoud%20bartawi-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205c43ac0991a8522d53da_mahmoud%20bartawi-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205c43ac0991a8522d53da_mahmoud%20bartawi.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Mahmoud Bartawi</div>
                                                <div className="port-card_job-title">Entrepreneur</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1024256522?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d79bb8f8623b8773bbc_ninad.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d79bb8f8623b8773bbc_ninad-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d79bb8f8623b8773bbc_ninad-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d79bb8f8623b8773bbc_ninad.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Ninad Tipnis</div>
                                                <div className="port-card_job-title">
                                                    Founder of @JTCPL Designs
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1024251254?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7783e50f5c17563d1e3b_OM.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7783e50f5c17563d1e3b_OM-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7783e50f5c17563d1e3b_OM-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7783e50f5c17563d1e3b_OM.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Omar Meski</div>
                                                <div className="port-card_job-title">Entrepreneur</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019846575?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77553d27dc48dc401fb7_Omnia.jpg"
                                                loading="lazy"
                                                alt=""
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Omnia</div>
                                                <div className="port-card_job-title">Digital Agency</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/908523246?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f233a5f18dae2e228ac95_rafif.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f233a5f18dae2e228ac95_rafif-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f233a5f18dae2e228ac95_rafif-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f233a5f18dae2e228ac95_rafif.jpg 1024w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Rafif Taraya</div>
                                                <div className="port-card_job-title">Pediatric Dentist</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019846688?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7744c404bc493a4f10c8_Rakan.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7744c404bc493a4f10c8_Rakan-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7744c404bc493a4f10c8_Rakan.jpg 640w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Rakan Alalami</div>
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
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019853755?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f777325e184c1e2fbef60_Riham.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f777325e184c1e2fbef60_Riham-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f777325e184c1e2fbef60_Riham-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f777325e184c1e2fbef60_Riham.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">
                                                    Riham Shamseddine
                                                </div>
                                                <div className="port-card_job-title">Nutritionist</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/897533701?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/67205db2dec665b00f1cc878_Sekhar%20Mutha.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Sekhar Mutha</div>
                                                <div className="port-card_job-title">Thought Leader</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
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
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve.jpg 1024w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Steve Hill</div>
                                                <div className="port-card_job-title">Personal Coach</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019846943?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f7734c8213facd8c20a71_Steve.jpg 1024w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Steve Hill</div>
                                                <div className="port-card_job-title">Personal Coach</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019850620?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77221894853479cf8205_sumayyah.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77221894853479cf8205_sumayyah-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77221894853479cf8205_sumayyah-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f77221894853479cf8205_sumayyah.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Sumayah Saadi</div>
                                                <div className="port-card_job-title">Entrepreneur</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019847010?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76be32f450befd331ba6_Suzan.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76be32f450befd331ba6_Suzan-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76be32f450befd331ba6_Suzan-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f76be32f450befd331ba6_Suzan.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Suzan Terzian</div>
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
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1024282866?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">svenja maltzahn</div>
                                                <div className="port-card_job-title">Entrepreneur</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019845691?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Thera</div>
                                                <div className="port-card_job-title">Wellness Brand</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019845793?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Thera</div>
                                                <div className="port-card_job-title">Wellness Brand</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/1019851428?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f767ebd13ec4c3c9cf1c2_Xtrnd.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f767ebd13ec4c3c9cf1c2_Xtrnd-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f767ebd13ec4c3c9cf1c2_Xtrnd-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f767ebd13ec4c3c9cf1c2_Xtrnd.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Xtrnd</div>
                                                <div className="port-card_job-title">Community</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="port-item w-dyn-item">
                                    <div className="portfolio-card border">
                                        <div className="vsl-embed _2 w-embed w-iframe w-script">
                                            <div
                                                style={{ padding: "177.78% 0 0 0", position: "relative" }}
                                            >
                                                <iframe
                                                    src="https://player.vimeo.com/video/?badge=0&autopause=0&player_id=0&app_id=58479"
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
                                                src="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d79bb8f8623b8773bbc_ninad.jpg"
                                                loading="lazy"
                                                alt=""
                                                sizes="(max-width: 991px) 35.875px, 3vw"
                                                srcSet="https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d79bb8f8623b8773bbc_ninad-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d79bb8f8623b8773bbc_ninad-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6d79bb8f8623b8773bbc_ninad.jpg 1080w"
                                                className="port-card_img"
                                            />
                                            <div className="w-layout-vflex common-v-flex">
                                                <div className="port-card_client-name">Ninad Tipnis</div>
                                                <div className="port-card_job-title">
                                                    Founder of @JTCPL Designs
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
                                        <Link
                                            to="/portfolio"
                                            aria-current="page"
                                            className="footer-link w--current"
                                        >
                                            Our Work
                                        </Link>
                                        <Link to="/client-success" className="footer-link">
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

export default Portfolio;

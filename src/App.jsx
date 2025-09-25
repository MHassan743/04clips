import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './App.css';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const swiperRef = useRef(null);
  const SCROLL_SPEED = 70;

  const LottieIcon = ({ src, className }) => {
    const containerRef = useRef(null);

    useEffect(() => {
      if (containerRef.current) {
        const animation = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: src
        });

        return () => {
          animation.destroy();
        };
      }
    }, [src]);

    return <div ref={containerRef} className={className}></div>;
  };

  const VideoEmbed = ({ src, title = "Video", className = "vsl-embed w-embed w-iframe w-script" }) => (
    <div className={className}>
      <div className="video-container">
        <iframe
          src={src}
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className="video-iframe"
          title={title}
        />
      </div>
    </div>
  );

  const MetricBlock = ({ value, suffix, label, noBorder = false }) => (
    <div className={`metric-block ${noBorder ? 'no-border' : ''}`}>
      <div>
        <div className="counter">
          {inView && <CountUp start={0} end={value} duration={3} separator="," />}
        </div>
        <div className="counter-exclude">{suffix}</div>
      </div>
      <div className="text-block-22">{label}</div>
    </div>
  );

  const TestimonialSlide = ({ testimonial }) => (
    <div className="swiper-slide testimonial_content">
      <div className="result-item">
        <div className="result-content">
          <div>
            <div className="result-client">
              <img
                loading="lazy"
                src={testimonial.image.src}
                alt={testimonial.client.name}
                sizes="100vw"
                srcSet={testimonial.image.srcSet}
                className="port-card_img big"
              />
              <div className="client-cred">
                <div className="client-name">{testimonial.client.name}</div>
                <div className="div-30">
                  <div className="cred-label">{testimonial.client.role}</div>
                  <div className="solution-tag hide">
                    <div className="solution-tag-label">{testimonial.stats[0].value}</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="result-heading small">"{testimonial.quote}"</h3>
          </div>
          <div>
            <div className="text-block-20">{testimonial.startingPoint}</div>
            <div className="result-stats">
              {testimonial.stats.map((stat, index) => (
                <div key={index} className="result-stats-item">
                  <div className="lottie-content _3" />
                  <div>
                    <div className="state-count">{stat.value}</div>
                    <div className="stat-label">
                      {stat.label.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < stat.label.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="result-embed-wrapper">
          <VideoEmbed
            src={testimonial.videoUrl}
            title="Welcome to TheClipsAgency"
            className="vsl-embed _2"
          />
          <div className="overlay-transparent-half" />
        </div>
      </div>
    </div>
  );

  // Testimonials data
  const testimonials = [
    {
      client: { name: "Dr Medhat", role: "Pediatrician" },
      quote: "I love working with this team. I feel so comfortable and everyone is amazing",
      startingPoint: "Started with 0 Followers",
      image: {
        src: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg",
        srcSet: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/6720577b1055a4940102a304_dr.medhat.jpg 750w"
      },
      stats: [
        { value: "66K", label: "Followers\nGained" },
        { value: "5M+", label: "View\nCount" },
        { value: "5K+", label: "Leads\nGenerated" }
      ],
      videoUrl: "https://player.vimeo.com/video/1069179698?badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
      client: { name: "svenja maltzahn", role: "Entrepreneur" },
      quote: "I'm getting so many requests I think I should stop posting videos",
      startingPoint: "Started with 0 Followers",
      image: {
        src: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg",
        srcSet: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de56b76e3b2d676bec8_svenja.jpg 1080w"
      },
      stats: [
        { value: "4.6K+", label: "Followers\nGained" },
        { value: "350K", label: "View\nCount" },
        { value: "3K+", label: "Leads\nGenerated" }
      ],
      videoUrl: "https://player.vimeo.com/video/1035892706?badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
      client: { name: "Thera", role: "Wellness Brand" },
      quote: "Working with clips agency is so easy, it feels like I have my personal team",
      startingPoint: "Started with 0 Followers",
      image: {
        src: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg",
        srcSet: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/671f769ae492a0a83dde8951_Thera.jpg 1080w"
      },
      stats: [
        { value: "72K+", label: "Followers\nGained" },
        { value: "2M+", label: "View\nCount" },
        { value: "8K+", label: "Leads\nGenerated" }
      ],
      videoUrl: "https://player.vimeo.com/video/1069179763?badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
      client: { name: "Rakan", role: "Fitness Coach" },
      quote: "I can focus more on my clients because I don't need to think about editing",
      startingPoint: "Started with 0 Followers",
      image: {
        src: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de2e4bbaa851b05d66c_rakan.jpg",
        srcSet: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de2e4bbaa851b05d66c_rakan-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de2e4bbaa851b05d66c_rakan-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de2e4bbaa851b05d66c_rakan.jpg 1080w"
      },
      stats: [
        { value: "15K+", label: "Followers\nGained" },
        { value: "850K", label: "View\nCount" },
        { value: "2K+", label: "Leads\nGenerated" }
      ],
      videoUrl: "https://player.vimeo.com/video/1024282866?badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
      client: { name: "Omnia", role: "Content Creator" },
      quote: "Now I can just be myself in front of the camera and they handle everything",
      startingPoint: "Started with 0 Followers",
      image: {
        src: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ddeda9d7cc53bd3f969_omnia.jpg",
        srcSet: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ddeda9d7cc53bd3f969_omnia-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ddeda9d7cc53bd3f969_omnia-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ddeda9d7cc53bd3f969_omnia.jpg 1080w"
      },
      stats: [
        { value: "24K+", label: "Followers\nGained" },
        { value: "1.2M+", label: "View\nCount" },
        { value: "6K+", label: "Leads\nGenerated" }
      ],
      videoUrl: "https://player.vimeo.com/video/1024283413?badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
      client: { name: "Steve", role: "Business Coach" },
      quote: "The quality of content they produce is incredible. My engagement went through the roof",
      startingPoint: "Started with 0 Followers",
      image: {
        src: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de09ba0cf1e4c0eb1b2_steve.jpg",
        srcSet: "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de09ba0cf1e4c0eb1b2_steve-p-500.jpg 500w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de09ba0cf1e4c0eb1b2_steve-p-800.jpg 800w, https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6de09ba0cf1e4c0eb1b2_steve.jpg 1080w"
      },
      stats: [
        { value: "18K+", label: "Followers\nGained" },
        { value: "960K", label: "View\nCount" },
        { value: "4K+", label: "Leads\nGenerated" }
      ],
      videoUrl: "https://player.vimeo.com/video/1019846838?badge=0&autopause=0&player_id=0&app_id=58479"
    }
  ]; useEffect(() => {
    if (typeof window !== 'undefined' && window.Swiper && swiperRef.current) {
      const swiper = new window.Swiper(swiperRef.current, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 800,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 30,
          },
        },
      }); return () => {
        if (swiper) swiper.destroy();
      };
    }
  }, []); const images = [
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70289a5a99badc0f9951_Dr%20Dunia%20-%20Tourist%20Infectionn.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70140a505fc39767c232_Chris%20V%20-%20What%20are%20the%20steps%20for%20investing%20with%20LP.mp4.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b7867aba77299709fc7fa_Svenja.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6fe0639f18a8d6073fb2_Ajmal%20Perfumes%20-Processing%20techniques%20of%20Oud.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70a8f013b880e870e41f_Dr%20Vivien%20-%20History%20of%20Plastic%20Surgery.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b7149cb7793071bbde701_Mahmood%20Bartawi%20-%20Hot%20Seat%20Exercise.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b781fb59f6f8d368492ac_Rafif.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ff7723d51118aedc820_Carine%20Boury%20-%20%20Why%20employees%20fighting%20a%20good%20sign.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b71a2f2cc4ec8df5236e5_Steve%20Hill%20-%20when%20you%20hear%20dubai.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b782c827be802385c54fb_Rakan.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b716c424fb491a1b7c8c3_Omnia%20-%20Pitfalls%20in%20Digital%20Branding.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b7126074b4f4921ec1793_Khaled%20Bartawi%20-%20Hypoxia%20With%20Pilots.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70e45a2a42171638021b_Hala%20B%20-%20%20How%20to%20read%20food%20labels.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70cdee847086dd4abf86_Fondaku%20-%20Challenges%20in%20Insurance%20Recruiting.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70411982de8ef1a7dad9_Dr-Diana%20-%20Treat%20your%20toothbrush%20as%20a%20VIP%20Tool.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b77f6a7debae6b88f6f66_gigi.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6fed7a5bd1bbb1b00c0c_Avin%20-%20most%20effective%20productivity%20tools.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b78550b0391b00525da24_Suzan.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70343552187b99f54164_Dr%20Medhat-%20Signs%20of%20Toungue%20Tie.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6fcca361098e538030ca_Abe%20Jr%20-%20Power%20of%20Gut%20Feeling.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b71332fb9301d7e51c972_Khalifa%20-%20Tesla%20Admiration.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b783aba0040d26f4364c0_Riham.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70033b1fba738fe8290d_Carole-Founder%20of%20CaroCare.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b78476188322f33779499_Sumaya.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b709b018255d1c65d67cf_Dr%20Nail%20Dia-%20Gum%20Disease.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b780a1bfb8cf857671e03_Lindesy.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b713e842917ec483ebf4f_Lamar-Who%20Is%20Your%20ICP.mp4.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70c36f3d3594abb26a04_Exquis-Gold%20under%20tones.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70b864fa55b3aadadfab_Entropy-Building%20Resilience%20Through%20Martial%20Arts.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/687cfc758f19e6978db06ed7_Ninad_HG_240p.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70d942fc3328f945ee40_Hafiz.gif",
    "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b7153f2cc4ec8df51ef70_Ninad%20-%20The%20Healthy%20Office.gif",
  ];

  return (
    <>
      <div className="page-wrapper-2">
        <Navigation />
        <div className="hero-section">
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
            <div className="container-new home-marquee">
              <div className="hero-wrapper-4"
              >
                <h1 className="hero-heading-2 responsive-heading" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', textAlign: 'center', margin: 0}}>
                  Supercharge your brand with<br />viral signature clips
                </h1>
                <div className="text-large max-width-616px align-center responsive-text" style={{fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', margin: '1.5rem auto 0', textAlign: 'center', maxWidth: '90vw'}}>
                  If you’re a busy creator with no time to edit or post consistently
                  on social media but still recognize the need to grow your brand
                  faster, then this is for you.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroller-container">
          <div
            className="scroller-track"
            style={{
              animationDuration: `${SCROLL_SPEED}s`,
            }}
          >
            {images.map((src, i) => (
              <img key={i} src={src} alt={`img-${i}`} />
            ))}
            {images.map((src, i) => (
              <img key={`dup-${i}`} src={src} alt={`img-dup-${i}`} />
            ))}
          </div>
        </div>
        <div className="video-section padding-vert-big">
          <div className="container-4"
          >
            <div className="vsl-embed intro-vid w-embed w-iframe w-script">
              <VideoEmbed
                src="https://player.vimeo.com/video/1023694654?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Welcome to TheClipsAgency"
                className=""
              />
            </div>
          </div>
        </div>
        <div className="container-new results-highlights padding-vert-small padding-no-top">
          <div className="metric-wrap" ref={ref}>
            <MetricBlock value={500} suffix="Hr+" label="Time Saved" />
            <MetricBlock value={50} suffix="M+" label="Organic Views" />
            <MetricBlock value={10} suffix="X" label="Credibility" noBorder />
          </div>
        </div>
        <div id="what-we-do" className="features-section home">
          <div className="container_large">
            <div className="title-wrapper max-width-662px"
            >
              <h2 className="section-heading center"
              >
                Branding, Content &amp; Systems.
              </h2>
              <div className="text-large center"
              >
                What happens when a branding agency who is obsessed with systems and
                frameworks, decides to dive in the world content creation? you get
                the clips agency.
              </div>
            </div>            <div style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
              transformStyle: "preserve-3d"
            }}
              className="features-list home"
            >
              <div className="feature-item home">
                <div className="lottie-wrapper">
                  <div
                    className="lottie-content"
                  >
                    <img src={'/gif1.gif'} height={100} width={100} alt="Animated GIF" />
                  </div>
                </div>
                <h3 className="feature-heading animated fadeIn">
                  Nothing is
                  <br />
                  unbranded
                </h3>
                <div className="text-color-grey">
                  In the world of branding, it's a runway. Will you sizzle and steal the
                  show, or will you be lost in the background?
                </div>
              </div>
              <div className="feature-item home">
                <div className="lottie-wrapper">
                  <div
                    className="lottie-content" >
                    <img src={'/gif2.gif'} height={100} width={100} alt="Animated GIF" />
                  </div>
                </div>
                <h3 className="feature-heading animated fadeIn">
                  Videos that drive engagements.
                </h3>
                <div className="text-color-grey">
                  Level up your online game with videos that don't just snag attention but
                  set sparks flying in your audience.
                </div>
              </div>
              <div className="feature-item home">
                <div className="lottie-wrapper">
                  <div
                    className="lottie-content"                  >
                    <img src={'/gif3.gif'} height={100} width={100} alt="Animated GIF" />
                  </div>
                </div>
                <h3 className="feature-heading animated fadeIn">
                  Removing all the
                  <br />
                  headaches.
                </h3>
                <div className="text-color-grey">
                  Say adios to the hassle, and time consuming tasks in content creation.
                  Embrace a process that's all about doing more with less fuss.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="solutions" className="solution-section">
          <div className="container-new padding-vert-big">
            <div className="title-wrapper max-width-850px">
              <h2 className="section-heading center"
              >
                No-brainer solutions for Brain-wrecking problems
              </h2>
              <div className="text-large center"
              >
                Transforming Real-Life Issues with Effective Solutions
              </div>
            </div>
            <div className="solution-list padding-content-top"
            >
              <Link to="/credits" className="solution-item-link w-inline-block">
                <div className="solutions-item">
                  <div className="solution-top">
                    <div className="lottie-icon-wrapper">
                      <LottieIcon
                        src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede6_thunder.json"
                        className="lottie-content _2"
                      />
                    </div>
                    <h3 className="solution-heading">
                      Need
                      <br />
                      Editing?
                    </h3>
                    <div className="text-large-2">
                      A world class editing team at your disposal. Turn your raw
                      videos into visual masterpieces.
                    </div>
                  </div>
                  <div className="solution-button">
                    <div className="solution-button-label">Explore Credits™</div>
                  </div>
                </div>
              </Link>
              <Link to="/ghosthost" className="solution-item-link w-inline-block">
                <div className="solutions-item">
                  <div className="solution-top">
                    <div className="lottie-icon-wrapper">
                      <LottieIcon
                        src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4ede7_%20Wave%20V2.json"
                        className="lottie-content _2"
                      />
                    </div>
                    <h3 className="solution-heading">
                      Need A-Z
                      <br />
                      Support?
                    </h3>
                    <div className="text-large-2">
                      A complete done-for-you solution helping you create 15+
                      high-quality content in 2 hours of your time only.
                    </div>
                  </div>
                  <div className="solution-button">
                    <div className="solution-button-label">Explore GhostHost™</div>
                  </div>
                </div>
              </Link>
              <Link to="/powerpod" className="solution-item-link w-inline-block">
                <div className="solutions-item">
                  <div className="solution-top">
                    <div className="lottie-icon-wrapper">
                      <LottieIcon
                        src="https://cdn.prod.website-files.com/67025756be96d71592e4ec7d/67025756be96d71592e4edeb_mic.json"
                        className="lottie-content _2"
                      />
                    </div>
                    <h3 className="solution-heading">
                      Have a<br />
                      Podcast?
                    </h3>
                    <div className="text-large-2">
                      Outsource your podcast’s signature editing and distribution
                    </div>
                  </div>
                  <div className="solution-button">
                    <div className="solution-button-label">Explore PowerPod™</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="results-section">
          <div className="container-new padding-vert-big padding-no-bottom">
            <div className="title-wrapper max-width-662px">
              <h2 className="section-heading center"
              >
                Success Stories
              </h2>
              <div className="max-width-sub-header">
                <div className="text-large center"
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
            <div className="swiper" ref={swiperRef}>
              <div className="swiper-wrapper">
                <div className="swiper-slide testimonial_content">
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
                              className="lottie-content _3" />
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
                              className="lottie-content _3" />
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
                      <VideoEmbed
                        src="https://player.vimeo.com/video/1069179698?badge=0&autopause=0&player_id=0&app_id=58479"
                        title="Welcome to TheClipsAgency"
                        className="vsl-embed _2"
                      />
                      <div className="overlay-transparent-half" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide testimonial_content">
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
                              className="lottie-content _3" />
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
                              className="lottie-content _3" />
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
                      <VideoEmbed
                        src="https://player.vimeo.com/video/1035892706?badge=0&autopause=0&player_id=0&app_id=58479"
                        title="Welcome to TheClipsAgency"
                        className="vsl-embed _2"
                      />
                      <div className="overlay-transparent-half" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide testimonial_content">
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
                              className="lottie-content _3" />
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
                              className="lottie-content _3" />
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
                      <VideoEmbed
                        src="https://player.vimeo.com/video/1069179763?badge=0&autopause=0&player_id=0&app_id=58479"
                        title="Welcome to TheClipsAgency"
                        className="vsl-embed _2"
                      />
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
                              className="lottie-content _3" />
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
                              className="lottie-content _3" />
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
                <div className="swiper-slide testimonial_content">
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
                              className="lottie-content _3" />
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
                              className="lottie-content _3" />
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
                <div className="swiper-slide testimonial_content">
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
                              className="lottie-content _3" />
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
                              className="lottie-content _3" />
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
                <div className="swiper-slide testimonial_content">
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
                              className="lottie-content _3" />
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
              </div>              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div className="section drag hide">
          <div className="container-7 padding-vert-big">
            <div className="title-wrapper max-width-480px">
              <h2 className="section-heading center"
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
        <div className="cta-section padding-vert-10em">
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
          <div className="container_large padding-vert-large" style={{ zIndex: 11, position: 'relative' }}>
            <div className="cta-wrapper"
            >
              <div className="text-large center">
                Take your brand to the next level
              </div>
              <h2 className="section-heading center cta">
                Have some questions?
                <br />
                Get in touch
              </h2>
              <a href="https://wa.me/message/4KAVDMIYUEA3K1"
                className="button-3 is--yellow w-button"
              >
                Book a call
              </a>
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
                    <a href="/credits" className="footer-link">
                      Credits™
                    </a>
                    <a href="/powerpod" className="footer-link">
                      PowerPod™
                    </a>
                  </div>
                  <div className="footer-column">
                    <div className="footer-title">Company</div>
                    <a
                      href="/"
                      aria-current="page"
                      className="footer-link w--current"
                    >
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
    </>);
} export default App;

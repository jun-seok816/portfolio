import React, { useEffect, useRef } from "react";
import "./Header.scss";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const onScroll = () => {
      if (window.scrollY > 0) el.classList.add("is-scrolled");
      else el.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
    <header ref={headerRef} className="site-header" role="banner">
      <div className="container header__inner">
        <a href="#about" className="brand" aria-label="Go to About">
          <span className="brand__mark" aria-hidden>
            ●
          </span>
          <span className="brand__text">Junseok's Web Portfolio</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#aboutme" className="nav__link">
                ABOUT ME
              </a>
            </li>            
            <li className="nav__item">
              <a href="#work" className="nav__link">
                WORK
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                PROJECT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
     <section
     id="about"
     className="section--about"
     aria-labelledby="about-heading"
   >
     <section id="main" className="main__wrap">
       <div className="blur float__1"></div>
       <div className="blur float__2"></div>
       <div className="blur float__3"></div>
       <h1
         data-aos="fade-up"
         data-aos-easing="linear"
         data-aos-duration="500"
         className="aos-init aos-animate"
       >
         JUNSEOK'S
         <br />
         PORTFOLIO
       </h1>
       <p
         data-aos="fade-up"
         data-aos-easing="linear"
         data-aos-duration="500"
         className="aos-init aos-animate"
       >
         저는 프론트와 백엔드를 아우르는 풀스택 개발자 오준석입니다. <br /> <br />
         주제에 맞는 인터페이스와 안정적인 서버 구조를 설계하고, <br /> 누구나
         편리하게 사용할 수 있는 웹을 구현합니다.
       </p>
     </section>
   </section>
   </>
  );
}

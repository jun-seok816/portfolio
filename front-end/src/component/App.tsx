import React from "react";
import "./main.scss";
import AboutMe from "./Main/AboutMe";
import Header from "./Main/Header";
import WorkExperience from "./Main/WorkExperience";
import EmblaCarousel from "./Main/Icons";
import Work from "./Main/Work";
import Project from "./Main/Project";
import { useReveal } from "@jsLib/hooks/useReveal";

export default function App() {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  useReveal();
  useReveal(".half-rot");
  useReveal(".half-left");
  return (
    <div className="portfolio" id="bguruoiskdjj2323">
      {/* Accessibility: skip navigation */}
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>

      <Header />

      <main id="main" className="site-main">
        {/* ABOUT ME */}
        <AboutMe />
        {/* WORK EXPERIENCE */}
        <WorkExperience />
        {/* ICONS */}
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        {/* WORK: 만든 사이트 리스트 뷰 */}
        <Work />
        {/* PROJECT: 작업한 프로젝트 리스트 뷰 */}
        <Project/>
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container footer__inner">
          <small>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </small>
          <a href="#about" className="to-top" aria-label="Back to top">
            ▲
          </a>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import "./main.scss";
import AboutMe from "./Main/AboutMe";
import Header from "./Main/Header";
import WorkExperience from "./Main/WorkExperience";
import EmblaCarousel from "./Main/Icons";

export default function App() {
  const OPTIONS = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className="portfolio" id="bguruoiskdjj2323">
      {/* Accessibility: skip navigation */}
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>

      <Header />

      <main id="main" className="site-main">
        {/* ABOUT ME */}
        <AboutMe/>
        {/* WORK EXPERIENCE */}
        <WorkExperience/>
        {/* ICONS */}
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        {/* WORK: 만든 사이트 리스트 뷰 */}
        <section
          id="work"
          className="section section--work"
          aria-labelledby="work-heading"
        >
          <div className="container">
            <h1 id="work-heading" className="section__title">
              WORK
            </h1>

            <ul className="card-list" aria-label="Built sites list">
              <li className="card" onClick={()=>{
                window.open("https://www.translationfactory.co.kr/", '_blank', 'noopener,noreferrer');
              }}>
                <div className="card__body">
                  <h3 className="card__title">번역공장</h3>
                  <img src="./assets/img/subfactory.png" alt="" />
                  <p className="card__desc">
                    영상/문서 번역 주문 플랫폼 — 파일 업로드 · 온라인 결제 · 진행상태 추적 · 기한 내 납품
                  </p>
                  <div className="card__tags">
                    <span className="badge">React</span>
                    <span className="badge">TypeScript</span>
                    <span className="badge">SCSS</span>
                    <span className="badge">Express</span>
                  </div>
                </div>               
              </li>
              <li className="card" onClick={()=>{                
                window.open('https://crew.dal-da.co.kr/', '_blank', 'noopener,noreferrer');
              }}>
                <div className="card__body">
                  <h3 className="card__title">달다 Crew</h3>
                  <img src="./assets/img/crew.png" alt="" />
                  <p className="card__desc">
                    작업 매칭 알고리즘 · 마감 스케줄러 · 진행상태 추적 · 반응형
                  </p>
                  <div className="card__tags">
                    <span className="badge">Next.js</span>
                    <span className="badge">Express</span>
                    <span className="badge">TailWind</span>
                  </div>
                </div>                
              </li>
              <li className="card" onClick={()=>{                
                window.open('https://sass.translationfactory.co.kr/', '_blank', 'noopener,noreferrer');
              }}>
                <div className="card__body">
                  <h3 className="card__title">TranSpeak</h3>
                  <img src="./assets/img/transpeak.png" alt="" />
                  <p className="card__desc">웹툰 번역 툴 · 토큰 결제 · 자동 말풍선 추출(OCR) · AI 번역 · 실시간 미리보기 · 작업내보내기</p>
                  <div className="card__tags">
                  <span className="badge">React</span>
                    <span className="badge">TypeScript</span>
                    <span className="badge">SCSS</span>
                    <span className="badge">Express</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* PROJECT: 작업한 프로젝트 리스트 뷰 */}
        <section
          id="projects"
          className="section section--projects"
          aria-labelledby="proj-heading"
        >
          <div className="container">
            <h2 id="proj-heading" className="section__title">
              PROJECT <span className="section__subtitle">작업한 프로젝트</span>
            </h2>

            <ul
              className="card-list card-list--compact"
              aria-label="Projects list"
            >
              <li className="card card--row">
                <div className="card__body">
                  <h3 className="card__title">디자인 시스템 구축</h3>
                  <p className="card__desc">
                    토큰/컴포넌트/가이드 문서화 및 배포 파이프라인 정비
                  </p>
                  <div className="card__tags">
                    <span className="badge">Design Tokens</span>
                    <span className="badge">Docs</span>
                  </div>
                </div>
                <div className="card__cta">
                  <a
                    className="btn-link"
                    href="#"
                    aria-label="디자인 시스템 상세"
                  >
                    Details
                  </a>
                </div>
              </li>

              <li className="card card--row">
                <div className="card__body">
                  <h3 className="card__title">웹 접근성 개선</h3>
                  <p className="card__desc">
                    키보드 내비게이션/명확한 포커스/스크린 리더 레이블링
                  </p>
                  <div className="card__tags">
                    <span className="badge">a11y</span>
                    <span className="badge">ARIA</span>
                  </div>
                </div>
                <div className="card__cta">
                  <a className="btn-link" href="#" aria-label="웹 접근성 상세">
                    Details
                  </a>
                </div>
              </li>

              <li className="card card--row">
                <div className="card__body">
                  <h3 className="card__title">성능 최적화</h3>
                  <p className="card__desc">
                    코드 스플리팅/이미지 최적화/오류 경계 적용
                  </p>
                  <div className="card__tags">
                    <span className="badge">Code Split</span>
                    <span className="badge">Perf</span>
                  </div>
                </div>
                <div className="card__cta">
                  <a
                    className="btn-link"
                    href="#"
                    aria-label="성능 최적화 상세"
                  >
                    Details
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
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

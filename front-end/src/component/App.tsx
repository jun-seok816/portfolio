import React from "react";
import "./main.scss";
import AboutMe from "./Main/AboutMe";

import Header from "./Main/Header";
import WorkExperience from "./Main/WorkExperience";

export default function App() {
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

        {/* WORK: 만든 사이트 리스트 뷰 */}
        <section
          id="work"
          className="section section--work"
          aria-labelledby="work-heading"
        >
          <div className="container">
            <h2 id="work-heading" className="section__title">
              WORK <span className="section__subtitle">만든 사이트</span>
            </h2>

            <ul className="card-list" aria-label="Built sites list">
              <li className="card">
                <div className="card__body">
                  <h3 className="card__title">상점 플랫폼</h3>
                  <p className="card__desc">
                    전자상거래 SPA · 반응형 · SSR 준비
                  </p>
                  <div className="card__tags">
                    <span className="badge">React</span>
                    <span className="badge">TypeScript</span>
                    <span className="badge">SCSS</span>
                  </div>
                </div>
                <div className="card__cta">
                  <a
                    className="btn-link"
                    href="#"
                    aria-label="상점 플랫폼 보기"
                  >
                    View
                  </a>
                </div>
              </li>
              <li className="card">
                <div className="card__body">
                  <h3 className="card__title">콘텐츠 매거진</h3>
                  <p className="card__desc">
                    무한 스크롤 피드 · 라이트/다크 테마
                  </p>
                  <div className="card__tags">
                    <span className="badge">React</span>
                    <span className="badge">Vite</span>
                    <span className="badge">SCSS</span>
                  </div>
                </div>
                <div className="card__cta">
                  <a
                    className="btn-link"
                    href="#"
                    aria-label="콘텐츠 매거진 보기"
                  >
                    View
                  </a>
                </div>
              </li>
              <li className="card">
                <div className="card__body">
                  <h3 className="card__title">기업 랜딩</h3>
                  <p className="card__desc">애니메이션 스크롤 · SEO 친화</p>
                  <div className="card__tags">
                    <span className="badge">React</span>
                    <span className="badge">TypeScript</span>
                    <span className="badge">SCSS</span>
                  </div>
                </div>
                <div className="card__cta">
                  <a className="btn-link" href="#" aria-label="기업 랜딩 보기">
                    View
                  </a>
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

import React from "react";

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="section section--experience"
      aria-labelledby="exp-heading"
    >
      <div className="container">
        <h2 id="exp-heading" className="section__title">
          WORK EXPERIENCE 
        </h2>

        <ol className="timeline" aria-label="Work experience timeline">
          <li className="timeline__item">
            <div className="timeline__dot" aria-hidden></div>
            <div className="timeline__content">
              <div className="timeline__meta">
                <span className="timeline__role">(주)크리포터</span>
                <span className="timeline__company">Web developer</span>
                <span className="timeline__period">2022.04 – 현재</span>
              </div>
              <p className="timeline__desc">
                디자인 시스템 구축, 반응형 레이아웃, 접근성 개선 및 성능 최적화
                담당.
              </p>
            </div>
          </li>
          <li className="timeline__item">
            <div className="timeline__dot" aria-hidden></div>
            <div className="timeline__content">
              <div className="timeline__meta">
                <span className="timeline__role">Web Engineer</span>
                <span className="timeline__company">Beta Studio</span>
                <span className="timeline__period">2021.01 – 2023.02</span>
              </div>
              <p className="timeline__desc">
                사내 UI 컴포넌트 개발, 빌드 파이프라인 개선, 테스트 자동화.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

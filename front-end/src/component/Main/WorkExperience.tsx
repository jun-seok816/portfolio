import React from "react";
import "./WorkExperience.scss";

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
                <span className="timeline__role">Full-Stack Engineer</span>
                <span className="timeline__company">(주)크리포터</span>
                <span className="timeline__period">2022.04 – 현재</span>
              </div>
              <p className="timeline__desc">
                React·TypeScript(webpack)로 프런트엔드 구축,
                Express(TypeScript)+MySQL로 백엔드 API 설계·구현, Linux/Apache
                기반 서비스 배포·운영
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="container">
        <h2 id="exp-heading" className="section__title">
          EDUCATION
        </h2>

        <ol className="timeline" aria-label="Work experience timeline">
          <li className="timeline__item">
            <div className="timeline__dot" aria-hidden></div>
            <div className="timeline__content">
              <div className="timeline__meta">
                <span className="timeline__role"> IT소프트웨어과</span>
                <span className="timeline__company">신구대학교</span>
                <span className="timeline__period">2017.03 – 2023.02</span>
              </div>
              <p className="timeline__desc">직급학년 3년 , 입학구분 신입학</p>
            </div>
          </li>
          <li className="timeline__item">
            <div className="timeline__dot" aria-hidden></div>
            <div className="timeline__content">
              <div className="timeline__meta">
                <span className="timeline__role"> 소프트웨어공학과</span>
                <span className="timeline__company">세종사이버대학교</span>
                <span className="timeline__period">2023.09 – 2025.08</span>
              </div>
              <p className="timeline__desc">직급학년 4년 , 입학구분 편입</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

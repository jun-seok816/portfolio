import React from "react";


export default function Work() {
  return (
    <section
      id="work"
      className="section section--work reveal"
      aria-labelledby="work-heading"
    >
      <div className="container">
        <h1 id="work-heading" className="section__title">
          WORK
        </h1>

        <ul className="card-list" aria-label="Built sites list">
          <li
            className="card"
            onClick={() => {
              window.open(
                "https://www.translationfactory.co.kr/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <div className="card__body">
              <h3 className="card__title">번역공장</h3>
              <img src="./assets/img/subfactory.png" alt="" />
              <p className="card__desc">
                영상/문서 번역 주문 플랫폼 — 파일 업로드 · 온라인 결제 ·
                진행상태 추적 · 기한 내 납품
              </p>
              <div className="card__tags">
                <span className="badge">React</span>
                <span className="badge">TypeScript</span>
                <span className="badge">SCSS</span>
                <span className="badge">Express</span>
              </div>
            </div>
          </li>
          <li
            className="card"
            onClick={() => {
              window.open(
                "https://crew.dal-da.co.kr/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
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
          <li
            className="card"
            onClick={() => {
              window.open(
                "https://sass.translationfactory.co.kr/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <div className="card__body">
              <h3 className="card__title">TranSpeak</h3>
              <img src="./assets/img/transpeak.png" alt="" />
              <p className="card__desc">
                웹툰 번역 툴 · 토큰 결제 · 자동 말풍선 추출(OCR) · AI 번역 ·
                실시간 미리보기 · 작업내보내기
              </p>
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
  );
}

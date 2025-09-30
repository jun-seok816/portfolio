import React from "react";
import HoverFollower from "@jsLib/hooks/useFollowCursorFloating";
import "./Project.scss";

export default function Project() {
  return (
    <section
      id="projects"
      className="section section--projects"
      aria-labelledby="proj-heading"
    >
      <div className="container">
        <h1 id="proj-heading" className="section__title">
          PROJECT
        </h1>

        <ul className="project-list" aria-label="Projects list">
          <HoverFollower
            placement="top-start"
            offset={6}
            className="parent-area"
            floating={
              <img src="./assets/img/waveform.png" width={650} alt="preview" />
            }
          >
            <li className="p__list" onClick={()=>{window.location.href = "http://eedensoft.com:3000/"}}>
              <div className="card__body">
                <h3 className="card__title">자막 편집 웹사이트</h3>
                <p className="card__desc desc__red">
                  자막 구간을 쉽게 관리하고, 보이는 영역만 리렌더링해 렉을 줄인
                  편집 도구.
                </p>
                <div className="card__tags">
                  <span className="badge">자막관리</span>
                  <span className="badge">타임라인</span>
                  <span className="badge">성능최적화</span>
                </div>
              </div>
              <div className="card__cta">
                <a className="btn-link">
                  Details
                </a>
              </div>
            </li>
          </HoverFollower>
          <HoverFollower
            placement="top-start"
            offset={6}
            className="parent-area"
            floating={
              <img src="./assets/img/token.jpg" width={650} alt="preview" />
            }
          >
            <li className="p__list" onClick={()=>{window.location.href = "http://eedensoft.com:3002/"}}>
              <div className="card__body">
                <h3 className="card__title">월 정기결제 웹사이트</h3>
                <p className="card__desc desc__red">
                  아임포트 빌링키로 구독 결제 자동 승인, Webhook 기반 결과
                  로깅·리트라이.
                </p>
                <div className="card__tags">
                  <span className="badge">정길결제</span>
                  <span className="badge">빌링키</span>
                  <span className="badge">웹훅</span>
                  <span className="badge">로깅</span>
                </div>
              </div>
              <div className="card__cta">
                <a className="btn-link">
                  Details
                </a>
              </div>
            </li>
          </HoverFollower>
        </ul>
      </div>
    </section>
  );
}

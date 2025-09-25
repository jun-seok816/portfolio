import React from "react";
import "./AboutMe.scss";

export default function AboutMe() {
  const years = new Date().getFullYear() - 2022;
  
  const nyeoncha = years + 1;
  return (
    <section id="nvlkneug2dc_ss" className="container">
      <h1>ABOUT ME</h1>
      <div className="box">
        <div className="img_box">
          <img src="/assets/img/me.jpg" alt="" />
        </div>
        <div className="txt_box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 320"
            width={250}
          >
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7dd3fc" />
                <stop offset="1" stopColor="#60a5fa" />
              </linearGradient>
              <filter id="ink">
                <feGaussianBlur stdDeviation="0.6" result="b" />
                <feComposite in="SourceGraphic" in2="b" operator="atop" />
              </filter>
            </defs>
            <rect width="100%" height="100%" fill="none" />
            <text
              x="43%"
              y="58%"
              textAnchor="middle"
              fontFamily="Pacifico, 'Dancing Script', 'Great Vibes', 'Segoe Script', 'Apple Chancery', 'Bradley Hand', cursive"
              fontSize="140"
              fill="var(--accent)"
              stroke="#0b1020"
              strokeWidth="1"
              paintOrder="stroke fill"
              filter="url(#ink)"
              style={{ letterSpacing: "2px" }}
            >
              JUNSEOK OH
            </text>
          </svg>

          <p>안녕하세요, 오준석입니다.</p>
          <p>
            {nyeoncha}년 차 풀스택 개발자로서 <br /> React·Next.js와 Node.js(Express)를
            중심으로 웹 서비스를 만들고 운영합니다.
          </p>
          <p>
            JavaScript/TypeScript, Webpack, MySQL, Linux에 익숙하며 <br />{" "}
            가볍고 유지보수 쉬운 코드를 지향합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

import { computePosition, shift, flip, offset } from "@floating-ui/dom";
import { useEffect, useMemo, useRef } from "react";
import type { Placement } from "@floating-ui/dom";
import React from "react";

type Props = {
  placement?: Placement;
  offset?: number;
  // children: 마우스를 움직일 부모 영역(컨테이너)
  children: React.ReactNode;
  // floating: 커서를 따라다닐 내용 (이미지 등)
  floating: React.ReactNode;
  className?: string; // 부모 영역 스타일링용
};
export default function HoverFollower({
  placement = "right-start",
  offset = 6,
  children,
  floating,
  className,
}: Props) {
  const parentRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  // 옵션 객체는 바뀔 때만 새로 생성 (리렌더 최소화)
  const opts = useMemo(() => ({ placement, offset }), [placement, offset]);

  useEffect(() => {
    const parentEl = parentRef.current;
    const floatingEl = floatingRef.current;
    if (!parentEl || !floatingEl) return;

    // parent를 주입한 최종 옵션
    attachFollowCursor(floatingEl, {
      ...opts,
      parent: parentEl,
    });
  }, [opts]); // placement/offset 변경 시 재바인딩

  return (
    <div ref={parentRef} className={className} style={{ position: "relative" }}>
      {children}

      {/* 커서를 따라다닐 엘리먼트 */}
      <div ref={floatingRef} className="floating">
        {floating}
      </div>
    </div>
  );
}

function attachFollowCursor(floating: HTMLElement, opts: any) {
  opts.parent.addEventListener("mousemove", ({ clientX, clientY }:any) => {    
    floating.classList.add("is-visible");

    const virtualEl = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: clientX,
          y: clientY,
          left: clientX,
          right: clientX,
          top: clientY,
          bottom: clientY,
        };
      },
    };

    computePosition(virtualEl, floating, {
      placement: "right-start",
      middleware: [offset(5), flip(), shift()],
    }).then(({ x, y }) => {      
      Object.assign(floating.style, {
        top: `${y}px`,
        left: `${x}px`,
      });
    });
  });

  opts.parent.addEventListener("mouseleave", ({ clientX, clientY }:any) => {
    floating.classList.remove("is-visible");
  });
}

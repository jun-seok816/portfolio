import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { NextButton, PrevButton, usePrevNextButtons } from "./TestButton";
import "./Main/Icons.scss";
import * as icons from "simple-icons";
import { SimpleIcon } from "simple-icons";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);    
  
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <BrandIcon {...icons.siReact} />
          <BrandIcon {...icons.siWebpack} />
          <BrandIcon {...icons.siJavascript} />
          <BrandIcon {...icons.siTypescript} />
          <BrandIcon {...icons.siCss} />
          <BrandIcon {...icons.siSass} />
          <BrandIcon {...icons.siHtml5} />
          <BrandIcon {...icons.siNodedotjs} />
          <BrandIcon {...icons.siExpress} />
          <BrandIcon {...icons.siNextdotjs} />
          <BrandIcon {...icons.siMysql} />
          <BrandIcon {...icons.siGit} />
        </div>
      </div>

    </div>
  );
};

function BrandIcon({ title, hex, svg }: SimpleIcon) {
  return (
    <div className="embla__slide">
      <svg
        role="img"
        width={100}
        height={100}
        viewBox="0 0 24 24"
        aria-label={title}
        xmlns="http://www.w3.org/2000/svg"
        fill={`#${hex}`}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}

export default EmblaCarousel;

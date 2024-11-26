'use client';

import React, {ComponentProps, useCallback, useEffect, useRef} from 'react';
import Image, {StaticImageData} from 'next/image';
import useCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {useWindowSize} from '@hooks/useWindowSize';

import './Carousel.css';

interface Props extends ComponentProps<typeof Image> {
  items: StaticImageData[];
}

export const Carousel: React.FC<Props> = ({className, items, src: defaultSrc, ...props}) => {
  const winSize = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const [setRef, api] = useCarousel({loop: true}, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  useEffect(() => {
    if (ref && ref.current) {
      // setRef(ref);
    }
  }, [ref]);

  useEffect(() => {
    if (ref && ref.current) {
      const rootEl = ref.current;
      const containerEl = rootEl.querySelector('.embla__container');
      if (!containerEl) {
        return;
      }
      const className = 'fill-height';
      if (containerEl.clientHeight < winSize.height) {
        containerEl.classList.add(className);
      } else {
        containerEl.classList.remove(className);
      }
    }
  }, [ref, winSize]);

  return <div className={`embla ${className}`} ref={ref}>
    <div className="embla__container">
      {items.map((item, i) => <div className="embla__slide" key={i}>
        <Image src={item}  {...props}/>
      </div>)}
    </div>
  </div>;
};

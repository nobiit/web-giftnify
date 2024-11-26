'use client';
import React, {ComponentProps, useCallback} from 'react';
import Image, {StaticImageData} from 'next/image';
import useCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import './Carousel.css';

interface Props extends ComponentProps<typeof Image> {
  items: StaticImageData[];
}

export const Carousel: React.FC<Props> = ({className, items, src: defaultSrc, ...props}) => {
  const [ref, api] = useCarousel({loop: true}, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  return <div className={`embla ${className}`} ref={ref}>
    <div className="embla__container">
      {items.map((item, i) => <div className="embla__slide" key={i}>
        <Image src={item}  {...props}/>
      </div>)}
    </div>
  </div>;
};

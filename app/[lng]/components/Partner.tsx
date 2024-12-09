'use client';

import React, {useCallback, useEffect, useRef} from 'react';
import styles from './Partner.module.css';
import {PartnerCard} from './PartnerCard';
import {PARTNER_ITEMS} from '@constants';
import useCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const Partner: React.FC = () => {
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
      setRef(ref.current);
    }
  }, [ref]);

  return <div className={`embla ${styles.partnerSection}`} ref={ref}>
    {'<'}
    <div className="embla__container">
      {PARTNER_ITEMS.map((item, i) => <div className="embla__slide" key={i}>
        <PartnerCard {...item}/>
      </div>)}
    </div>
    {'>'}
  </div>;
};

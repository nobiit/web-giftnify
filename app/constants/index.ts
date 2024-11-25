import {CompanyInfo, NavItem, PricingPlan, SocialLink} from '@types';


export const APP_NAME = 'Giftnify';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'create_game',
    href: '#create',
  },
  {
    label: 'pricing',
    href: '#pricing',
  },
  {
    label: 'contact',
    href: '#contact',
  },
];

export const GAMES = [
  {
    title: 'Lucky Wheel',
    imageSrc: '/games/lucky-wheel.png',
  },
  {
    title: 'Scratch Card',
    imageSrc: '/games/scratch-card.png',
  },
  {
    title: 'Memory Match',
    imageSrc: '/games/memory-match.png',
  },
  {
    title: 'Quiz Game',
    imageSrc: '/games/quiz.png',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: 'Trial Package',
    price: '49,000 VND',
    freePlayCount: '300',
    imageSrc: '/pricing/trial.png',
    features: [
      'FREE game creation',
      'Get 5 game plays per creation',
      '15 DAYS usage period',
      '500 FREE game plays',
      'Access to all system games',
      'Access to all system vouchers',
    ],
  },
  {
    title: 'Basic Package',
    price: '199,000 VND',
    freePlayCount: '2,000',
    imageSrc: '/pricing/basic.png',
    features: [
      'FREE game creation',
      'Get 5 game plays per creation',
      '30 DAYS usage period',
      '2,000 FREE game plays',
      'Access to all system games',
      'Access to all system vouchers',
    ],
  },
  {
    title: 'Advanced Package',
    price: '399,000 VND',
    freePlayCount: '5,000',
    imageSrc: '/pricing/advanced.png',
    features: [
      'FREE game creation',
      'Get 5 game plays per creation',
      '60 DAYS usage period',
      '10,000 FREE game plays',
      'Access to all system games',
      'Access to all system vouchers',
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://facebook.com/bitcover',
    imageSrc: '/social/facebook.png',
    alt: 'Facebook',
  },
  {
    href: 'https://twitter.com/bitcover',
    imageSrc: '/social/twitter.png',
    alt: 'Twitter',
  },
  {
    href: 'https://instagram.com/bitcover',
    imageSrc: '/social/instagram.png',
    alt: 'Instagram',
  },
  {
    href: 'https://linkedin.com/company/bitcover',
    imageSrc: '/social/linkedin.png',
    alt: 'LinkedIn',
  },
];

export const COMPANY_INFO: CompanyInfo = {
  name: 'Bitcover Company Limited',
  address:
    '41 Street 2, Van Phuc Urban Area, Hiep Binh Phuoc Ward, Thu Duc City, Ho Chi Minh City, Vietnam',
  phone: '+84 988 150 144',
  email: 'sale@bitcover.vn or support@bitcover.ai',
  registrationInfo:
    'Business Registration Certificate No. 0318291897 issued on 31/01/2024 by Ho Chi Minh City Department of Planning and Investment',
};

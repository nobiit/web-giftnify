export interface GameCardProps {
  title: string;
  imageSrc: string;
  onPlay?: () => void;
  onCreate?: () => void;
}

export interface PricingPlan {
  title: string;
  price: string;
  freePlayCount: string;
  imageSrc: string;
  features: string[];
}

export interface PricingCardProps extends PricingPlan {
  isHighlighted?: boolean;
}

export interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
}

export interface SocialLink {
  href: string;
  imageSrc: string;
  alt: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  registrationInfo: string;
}

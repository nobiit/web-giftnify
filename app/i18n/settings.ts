export const fallbackLng = 'en';
export const languages = [fallbackLng, 'vi'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    supportedLngs: languages,
    preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

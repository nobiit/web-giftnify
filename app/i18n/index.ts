import {createInstance, FlatNamespace, KeyPrefix, Namespace} from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import {initReactI18next} from 'react-i18next/initReactI18next';
import {FallbackNs} from 'react-i18next';
import {getOptions} from './settings';

const initI18next = async (lng: string, ns: string | string[]) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));
  return i18nInstance;
};

type $Tuple<T> = readonly [T?, ...T[]];
type $FirstNamespace<Ns extends Namespace> = Ns extends readonly any[] ? Ns[0] : Ns;

export async function useTranslation<
  Ns extends FlatNamespace | $Tuple<FlatNamespace>,
  KPrefix extends KeyPrefix<FallbackNs<Ns extends FlatNamespace ? FlatNamespace : $FirstNamespace<FlatNamespace>>> = undefined
>(
  lng: string,
  ns?: Ns,
  options: { keyPrefix?: KPrefix } = {},
) {
  const i18nextInstance = await initI18next(lng, Array.isArray(ns) ? ns as string[] : ns as string);
  const nsStr: FlatNamespace = Array.isArray(ns) ? ns[0] : ns;
  return {
    lng,
    ns: nsStr,
    t: i18nextInstance.getFixedT(lng, nsStr, options.keyPrefix),
    i18n: i18nextInstance,
    keyPrefix: options.keyPrefix,
  };
}

export type I18n = Awaited<ReturnType<typeof useTranslation>>;

export async function i18nWithNs(v: I18n, ns: string): Promise<I18n> {
  const {lng, keyPrefix} = v;
  return useTranslation(lng, ns, {keyPrefix});
}

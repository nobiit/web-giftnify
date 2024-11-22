import {useTranslation} from './index';

type translation = Awaited<ReturnType<typeof useTranslation>>;

export type tFunc = translation['t'];

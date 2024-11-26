import {WindowSize} from '@types';
import {proxy} from 'valtio/vanilla';
import {useSnapshot} from 'valtio/react';

const {window} = global;

const state: WindowSize = proxy({
  width: window?.innerWidth,
  height: window?.innerHeight,
});

window?.addEventListener('resize', () => {
  state.width = window.innerWidth;
  state.height = window.innerHeight;
});


export const useWindowSize = () => useSnapshot(state);

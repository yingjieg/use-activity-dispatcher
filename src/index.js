import { useEffect } from 'react';

const mousemoveHandler = e => {
  window.parent.postMessage('iframe-mousemove', '*');
};

const keypressHandler = e => {
  window.parent.postMessage('iframe-keypress', '*');
};

const clickHandler = e => {
  window.parent.postMessage('iframe-click', '*');
};

export function useActivityDispatcher() {
  useEffect(() => {
    if (window.parent) {
      window.addEventListener('mousemove', mousemoveHandler);
      window.addEventListener('keypress', keypressHandler);
      window.addEventListener('click', clickHandler);
    }

    return () => {
      window.removeEventListener('mousemove', mousemoveHandler);
      window.removeEventListener('keypress', mousemoveHandler);
      window.removeEventListener('click', mousemoveHandler);
    };
  }, []);
}

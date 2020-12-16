import { useEffect } from 'react';

function mousemoveHandler(e) {
  window.parent.postMessage('iframe-mousemove', '*');
}

function keypressHandler(e) {
  window.parent.postMessage('iframe-keypress', '*');
}

function clickHandler(e) {
  window.parent.postMessage('iframe-click', '*');
}

export function useActivityDispatcher() {
  useEffect(() => {
    if (window.parent) {
      window.addEventListener('mousemove', mousemoveHandler);
      window.addEventListener('keypress', keypressHandler);
      window.addEventListener('click', clickHandler);
    }

    return () => {
      window.removeEventListener('mousemove', mousemoveHandler);
      window.removeEventListener('keypress', keypressHandler);
      window.removeEventListener('click', clickHandler);
    };
  }, []);
}

export function metaTagContent(name) {
    return document.querySelector(`meta[name='${name}']`)?.content;
  }
  
  export function prefersReducedMotion() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return !mediaQuery || mediaQuery.matches;
  }
  
  export function imageLoaded(image) {
    return new Promise((resolve) => {
      if (image.complete && image.naturalWidth !== undefined) {
        resolve(image);
      }
  
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', () => resolve(image));
    });
  }
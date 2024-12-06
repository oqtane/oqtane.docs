import { Fancybox } from '@fancyapps/ui';
import packageJson from '../../../../package.json';
const { enableDebug } = packageJson; 

export function configureLightboxes() {
  // find all image tags but not #logo, and add the lightbox
  // - all images
  // - but not images for links
  // - not the logo
  // - not a feature logo
  const imgSelector = 'img:not(#logo):not(.for-link):not(.feature)';

  const imgs: NodeListOf<HTMLImageElement> = document.querySelectorAll(imgSelector);
  imgs.forEach(img => {
    // debug
    if (enableDebug)
      console.log('2dm img', img);
    const filename = img.src;
    // add cursor
    img.style.cursor = 'zoom-in';
    img.style.cursor = '-moz-zoom-in';
    img.style.cursor = '-webkit-zoom-in';

    // Find a parent div which is marked as a gallery
    // It can be 1 or 2 levels up, depending on if the <a> tag was already added by another script
    const parentDiv = img.parentElement?.tagName === 'DIV'
      ? img.parentElement
      : img.parentElement?.parentElement?.tagName === 'DIV'
        ? img.parentElement?.parentElement
        : null;
    if (parentDiv) {
      if (enableDebug) console.log('found div around img', parentDiv);
      const named = parentDiv.attributes.getNamedItem('gallery');
      if (named !== null) {
        const name = named.value;
        img.dataset.fancybox = name || 'gallery';
      }
      else if (parentDiv?.classList.contains('gallery')) {
        img.dataset.fancybox = 'gallery';
      }
    }

    // add alt if not already there
    if (!img.alt) img.setAttribute('alt', filename);
  });

  // Attach Fancybox to all these images
  Fancybox.bind(imgSelector);
}

import { Fancybox } from '@fancyapps/ui';
import packageJson from '../../../../package.json';
const { enableDebug } = packageJson; 

export function lightboxForContextIllustration() {

  // Get all the context containers, and copy (otherwise the collection is live)
  const containersLive = document.getElementsByClassName("fancybox-auto");
  const containers = Array.from(containersLive);

  for (var i = 0; i < containers.length; i++) {
    const e = containers[i] as HTMLElement;

    // add ID if missing
    if (!e.id) e.id = 'rndId-' + Math.floor(Math.random() * Math.floor(9999999));

    // check if we need to attach some classes from parent
    // note: not sure if this is needed, maybe a leftover from a previous version?
    var pcls = e.parentElement?.className;
    if (pcls) {
      var clsList = pcls.split(' ');
      var contextCls = clsList.find(c => c.startsWith('context'));
      if (contextCls)
        e.classList.add(contextCls);
    }

    if (enableDebug)
      console.log('context containers', e.id, pcls);

    // Create the popup div and attach it to the element
    createPopupDiv(e, `${e.id}-clone`);
    e.setAttribute('data-src', `#${e.id}-clone`);

    // add fancybox attribute
    e.attributes.setNamedItem(document.createAttribute('data-fancybox'));
  };

  // attach fancybox to all
  Fancybox.bind("[data-fancybox]");
}

function createPopupDiv(original: HTMLElement, newName: string) {
  const clone = original.cloneNode(true) as HTMLElement;
  clone.id = newName;
  clone.style.width = "95%";
  document.body.appendChild(clone);  
}
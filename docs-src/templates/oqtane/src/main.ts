import * as hljsRazor from 'highlightjs-cshtml-razor';
import { Xref } from '../../shared-global/src/scripts/xref/xref';
import { docReady } from '../../shared-global/src/scripts/utils/docready';
import { configureLightboxes } from '../../shared-global/src/scripts/images';
import { setVersionButtonLink } from '../../shared-global/src/scripts/versions';
import packageJson from '../../../package.json';
import { lightboxForContextIllustration } from '../../shared-global/src/scripts/context-illustrations';
import "./main.scss";

// Log some version of this file so we see changes are being applied
// console.log('2sxc main.ts ' + packageJson.version);

// Expose some functions to the global scope
// for the way this file is imported in docfx
export default {

  // Customize highlightjs
  configureHljs: (hljs: any) => {
    // https://github.com/highlightjs/highlightjs-cshtml-razor
    // console.log('configuring configureHljs to support Razor');

    // Add support for Razor
    hljs.registerLanguage('cshtml-razor', hljsRazor);
    hljs.registerAliases('razor', { languageName: 'cshtml-razor' });
  },

}

docReady(function() {
  // configure lightboxes
  configureLightboxes();

  // set version button link
  setVersionButtonLink();

  // add xref links if we're on xref.html
  // This is a bit special, but I don't know how to trigger code inside the JS-Module
  // from the page itself, so I'm just doing it here with url-checks
  Xref.runXrefPage();

  // Activate popups on the small context illustrations
  // typically to the right of the introduction content
  lightboxForContextIllustration();
});


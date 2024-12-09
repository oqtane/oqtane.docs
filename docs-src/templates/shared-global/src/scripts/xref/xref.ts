import { XrefMap } from './XrefMap';

const yaml = require('js-yaml');

const XrefMapFile = 'xrefmap.yml';
export const XrefNotFound = `XREF not found in ${XrefMapFile}`;

export class Xref {
  constructor() {
    console.log('xref constructor');
  }
  
  public static async runXrefPage() {
    const xrefNotFound = 'xref not found in url';
    const docLoc = document.location.pathname;
    if (docLoc.includes('xref.html')) {
      console.log('xref page');

      // get url parameters xref
      var urlParams = new URLSearchParams(window.location.search);
      var xref = urlParams.get('xref') ?? xrefNotFound;
      // console.log('xref', xref);

      const showXref = document.getElementById('xref-show');
      const showTarget = document.getElementById('xref-target') as HTMLAnchorElement;
      if (!showXref)
      {
        console.error('xref-show not found');
        return;
      }
      showXref.textContent = xref;

      // if not found exit now - the html has already been updated with the message
      if (xref === xrefNotFound) return;

      // get target to show the url and set link + text
      const target = await Xref.getLink(xref);
      showTarget.href = target;
      showTarget.textContent = target;

      // if not found exit now - the html has already been updated with the message
      if (target === XrefNotFound) return;

      // Set Timer to redirect
      const timer = setTimeout(() => {
        document.location.href = target;
      }, 3000);

      // Listen for Escape key to cancel
      window.addEventListener('keydown', (event) => {
        // Detect esc key pressed
        if (event.key === 'Esc' || event.keyCode === 27 || event.code === 'Escape') {
          // console.log('esc pressed');
          clearTimeout(timer);
          // find element xref-cancelled
          const cancelled = document.getElementById('xref-cancelled');
          if (!cancelled) {
            console.error('xref-cancelled not found');
            return;
          }
          cancelled.style.display = 'inline';
        }
      });
    }
  }

  /** Find the link in the YAML file */
  public static async getLink(xref: string) {
    const xrefJson = await this.get() as XrefMap;
    const refs = xrefJson.references;
    
    const found = refs.find(r => r.uid === xref);
    if (!found)
      return XrefNotFound;

    return '/' + found.href;
  }

  /** Load the YAML file */
  public static async get() {
    const xref = await fetch(`/${XrefMapFile}`);
    const xrefYaml = await xref.text();
    const xrefJson = yaml.load(xrefYaml);
    return xrefJson;
  }
}

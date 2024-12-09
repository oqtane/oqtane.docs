import packageJson from '../../../../package.json'; 

export function setVersionButtonLink() {
  const versionSelector = document.getElementsByClassName('version-button')[0] as HTMLAnchorElement;
  if (!versionSelector) { 
    console.log('Version button not found');
    return; 
  }
  var oldLink = versionSelector.href;
  var newLink = oldLink + '?version=' + packageJson.version + '&path=' + window.location.pathname;
  versionSelector.setAttribute('href', newLink);
}

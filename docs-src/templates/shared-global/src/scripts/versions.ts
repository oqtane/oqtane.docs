import docsVersion from '../../../../package.json'; 

export function setVersionButtonLink() {
  const versionSelector = document.getElementsByClassName('version-button')[0] as HTMLAnchorElement;
  var oldLink = versionSelector.href;
  var newLink = oldLink + '?version=' + docsVersion + '&path=' + window.location.pathname;
  versionSelector.setAttribute('href', newLink);
}

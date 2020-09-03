
// List of namespaces which have special rules for display, icons etc.
const namespaceMetadata = require('./namespace-metadata.js');

// The primary prefix of all namespaces. Used to detect if an API-node is a namespace-node
const rootNamespace = 'Oqtane';
const prefix1 = 'Oqtane';
const prefix2 = 'TodoAddIfNeeded';

// These two values determine how the nodes are shortened if they are long
const truncateTo = 2;
const keepParts = 2;

/**
 * This method will be called at the start of exports.transform in toc.html.js
 */
exports.preTransform = function (model) {
  // console.warn('2dm-preTransform');
  return model;
}

/**
 * This method will be called at the end of exports.transform in toc.html.js
 */
exports.postTransform = function (model) {
  // console.warn('2dm-postTransform:');
  if(isApiToc(model))
    processNode(model, 1);

  // console.error("count:" + count);
  return model;
}


// ----------------------------------------------------------------------------------------------------


// find out if it's the API toc
// returns false or truthy
function isApiToc(model) {
  if(!model) return false;
  //var debugModel = JSON.stringify(model);
  //var first100 = debugModel.substr(0, 100);

  // find out if it's the TOC of the API
  if(!(model.items && model.items.length))
    return false;

  const firstName = model.items[0].name;
  const match = isNamespace(firstName);
  return match;
}

// check if a string is likely a namespace API prefix
function isNamespace(name) {
  return name && (name.indexOf(prefix1) === 0 || name.indexOf(prefix2) === 0);
}

// repeat a string X times
function repeatString(part, count) {
  if(count <= 0) return '';
  var result = '';
  for(let i = 0; i < count; i++)
    result += part;
  return result;
}

let count = 0;

function processNode(item, depth) {
  // console.warn('2dm-processNode');

  if(isNamespace(item.name)) {
    // add metadata - before changing the namespace
    decorateWithMetadata(item, depth);
    // "folders" in the menu have a depth <= 2
    if(depth <= 2)
      shortenNamespace(item, depth);
  }
  else
    removeMetadata(item);

  // do recursively if necessary, but should only matter on the 1st or 2nd recursion
  // if(level > 2) return; 

  item.level = depth;
  if (item.items && item.items.length > 0) {
    const length = item.items.length;
    for (let i = 0; i < length; i++) {
      processNode(item.items[i], depth + 1);
    };
  } 
}

/**
 * shorten ... the namespace
 */
function shortenNamespace(item, level) {
  item.fullName = item.name;

  // if we only have 1 namespace part like "Oqtane", just keep that
  if (item.name.split('.').length === 1) return;

  // truncate leading primary namespace as it makes the TOC too long
  item.name = item.name.indexOf(rootNamespace) === 0
    ? item.name.substr(rootNamespace.length + 1) 
    : item.name;
  const parts = item.name.split('.');
  const partCount = parts.length;

  if(partCount > keepParts) {
    parts.splice(0, partCount - truncateTo);
    const newName = repeatString('...', partCount - keepParts) + parts.join('.');
    item.name = newName;
  }
}



/**
 * add metadata for the template to prioritizes
 * @param {*} item 
 * @param {*} depth 
 */
function decorateWithMetadata(item, depth) {
  count++;
  // if(level > 2) return;
  item.priority = namespaceMetadata.priorityNormal;

  // skip if it's not a "folder"
  if(!item.topicUid) return;

  // find metadata if available, and attach the metadata-properties
  const foundMetadata = namespaceMetadata.data[item.topicUid];
  if(foundMetadata) {
    // console.warn('uid:' + item.topicUid);
    item.priority = foundMetadata.priority;
  }
  // if(item.priority == "adam")
  //   console.warn("found and added priority" + JSON.stringify(item));
}

function removeMetadata(item) {
  count++;
  item.priority = namespaceMetadata.priorityNormal;
}
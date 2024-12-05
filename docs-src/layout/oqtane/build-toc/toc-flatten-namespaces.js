const debug = false;

function flattenNamespace(parentList, ns, specs) {
  if (debug)
    console.log(`Debug flattenNamespace: ${parentList.length}; ns: ${ns}; specs: ${specs}`);

  const index = parentList.findIndex(item => item.topicUid === ns);
  const child = parentList[index];

  // run rename and Highlight on all nsItems
  const childItemsOriginal = child.items;

  // Determine which of the children are namespaces and which are simply properties
  // Split all childItems into namespaces and non-namespaces based on the items property
  const namespaces = childItemsOriginal.filter(item => item.items && item.items.length > 0);
  const nonNamespaces = childItemsOriginal.filter(item => !item.items || item.items.length === 0);

  const childNamespaces = namespaces.map(item => renameWithNamespaceAndHighlight(item, specs.highlights[item.topicUid]));

  if (debug && childNamespaces.length > 0) {
    const first = childNamespaces[0];
    const firstJson = JSON.stringify(first);
    console.log(`Debug flattenNamespace: ${firstJson}`);

    const last = childNamespaces[childNamespaces.length - 1];
    const lastJson = JSON.stringify(last);
    console.log(`Debug flattenNamespace: ${lastJson}`);
  }

  // Clear all items below this namespace
  child.items = nonNamespaces;

  const before = parentList.splice(0, index + 1);
  const after = parentList.splice(index - 1);
  const inserted = [...before, ...childNamespaces, ...after];

  return inserted;
}

function renameWithNamespaceAndHighlight(item, highlight = '') {
  const name = item.topicUid;// + (highlight ? ' ' + highlight : '');
  return { ...item, name };
}

function transformMemberPage(model) {
  var groupNames = {
      "constructor": { key: "constructorsInSubtitle" },
      "field":       { key: "fieldsInSubtitle" },
      "property":    { key: "propertiesInSubtitle" },
      "method":      { key: "methodsInSubtitle" },
      "event":       { key: "eventsInSubtitle" },
      "operator":    { key: "operatorsInSubtitle" },
      "eii":         { key: "eiisInSubtitle" },
  };

  groupChildren(model);
  transformItem(model, 1);
  return model;

  function groupChildren(item) {
      if (!item || !item.items || item.items.length == 0) {
          return;
      }
      var grouped = {};
      var items = [];
      item.items.forEach(function (element) {
          groupChildren(element);
          if (element.type) {
              var type = element.isEii ? "eii" : element.type.toLowerCase();
              if (!grouped.hasOwnProperty(type)) {
                  if (!groupNames.hasOwnProperty(type)) {
                      groupNames[type] = {
                          name: element.type
                      };
                      console.log(type + " is not predefined type, use its type name as display name.")
                  }
                  grouped[type] = [];
              }
              grouped[type].push(element);
          } else {
              items.push(element);
          }

      }, this);

      // With order defined in groupNames
      for (var key in groupNames) {
          if (groupNames.hasOwnProperty(key) && grouped.hasOwnProperty(key)) {
              items.push({
                  name: model.__global[groupNames[key].key] || groupNames[key].name,
                  items: grouped[key]
              })
          }
      }

      item.items = items;
  }

  function transformItem(item, level) {
      // set to null in case mustache looks up
      item.topicHref = item.topicHref || null;
      item.tocHref = item.tocHref || null;
      item.name = item.name || null;

      item.level = level;

      if (item.items && item.items.length > 0) {
          item.leaf = false;
          var length = item.items.length;
          for (var i = 0; i < length; i++) {
              transformItem(item.items[i], level + 1);
          };
      } else {
          item.items = [];
          item.leaf = true;
      }
  }
}

exports.flattenNamespace = flattenNamespace;
exports.transformMemberPage = transformMemberPage;
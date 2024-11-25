// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// 2024-11-25 2dm
// Copied from default template -> 2sxc Docs -> Oqtane Docs

const tocTools = require('./build-toc/toc-tools-new.js');

const specs = require('./build-toc-specs.js');

const flattenTools = require('./build-toc/toc-flatten-namespaces.js');

exports.transform = function (model) {

  // 2024-03-19 2dm
  // Catch the first TOC which is in the .net namespace - first namespace item is the AppCode namespace
  model = { ...model };
  if (false || model?.items?.[0]?.name == specs.firstNamespaceInApi) {
    // console.error('\n\n2dm in items: \n' + JSON.stringify(model.items[0]));

    let items = model.items;

    for (const ns of specs.flattenNamespacesFor) {
      items = flattenTools.flattenNamespace(items, ns, specs);
    }      

    model = { ...model, items: [ ...items ] };

    tocTools.processNodeRecursive(model, 1, function (node, level) {
      // console.error('2dm node: ' + JSON.stringify(node) + ' level: ' + level);
      if (node.topicUid && specs.highlights[node.topicUid]) {
        node.name = node.name + ' ' + specs.highlights[node.topicUid];
      }
    });
  }

  if (model.memberLayout === 'SeparatePages') {
    model = flattenTools.transformMemberPage(model);
  }

  for (var key in model) {
    if (key[0] === '_') {
      delete model[key]
    }
  }

  // new
  const stringified = JSON.stringify(model);
  // test while developing
  // console.error('\n\n2dm in SeparatePages: \n' + stringified);

  return {
      content: stringified
  };
}

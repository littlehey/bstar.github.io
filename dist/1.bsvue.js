webpackJsonp([1],{

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(627);

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "\n.bs-crumb-select {\n  background: #fff;\n  border: 1px solid gray;\n  max-height: 300px;\n}\n.bs-crumb-select-item:hover {\n  color: red;\n}\n.bs-crumb-sep {\n  margin: 0 10px 0 5px;\n  width: 20px;\n}\n", "", {"version":3,"sources":["D:/bsvue/docs/md/docs/md/crumb.vue?d8e8b66a"],"names":[],"mappings":";AAwKA;EACA,iBAAA;EACA,uBAAA;EACA,kBAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,qBAAA;EACA,YAAA;CACA","file":"crumb.md","sourcesContent":["<template><section><h1>描述</h1>\n<p>组件提供类似于windows文件夹的可回退可选择子级的面包屑展示</p>\n<h1>效果展示</h1>\n<template>\n  <div>\n    <bs-crumb v-model=\"v\" :data=\"data\"></bs-crumb>\n  </div>\n</template>\n\n\n<h1>代码示例</h1>\n<pre v-pre=\"\"><code v-pre=\"\" class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">bs-crumb</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"v\"</span> <span class=\"hljs-attr\">:data</span>=<span class=\"hljs-string\">\"data\"</span> &gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">bs-crumb</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">const</span> data = {\n      <span class=\"hljs-attr\">v</span>: <span class=\"hljs-number\">5</span>,\n      <span class=\"hljs-attr\">data</span>: [{\n        <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">1</span>,\n        <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'root'</span>,\n        <span class=\"hljs-attr\">child</span>: [{\n          <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">2</span>,\n          <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level1-1'</span>,\n          <span class=\"hljs-attr\">child</span>: [{\n            <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">4</span>,\n            <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level2-1'</span>\n          }, {\n            <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">3</span>,\n            <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level2-2'</span>,\n            <span class=\"hljs-attr\">child</span>: [{\n              <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">5</span>,\n              <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level3-1'</span>,\n              <span class=\"hljs-attr\">child</span>: [{\n                <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">6</span>,\n                <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level4-1'</span>\n              }, {\n                <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">7</span>,\n                <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level4-2'</span>\n              }, {\n                <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">8</span>,\n                <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level4-3'</span>\n              }]\n            }]\n          }]\n        }]\n      }]\n    }\n    <span class=\"hljs-keyword\">let</span> id = <span class=\"hljs-number\">30</span>\n    <span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">30</span>\n    <span class=\"hljs-keyword\">while</span> (i--) {\n      data.data[<span class=\"hljs-number\">0</span>].child.push({\n        <span class=\"hljs-attr\">id</span>: id++,\n        <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'id'</span> + id\n      })\n    }\n    <span class=\"hljs-keyword\">return</span> data\n  }\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">style</span>&gt;</span><span class=\"css\">\n<span class=\"hljs-selector-class\">.bs-crumb-select</span> {\n  <span class=\"hljs-attribute\">background</span>: <span class=\"hljs-number\">#fff</span>;\n  <span class=\"hljs-attribute\">border</span>: <span class=\"hljs-number\">1px</span> solid gray;\n  <span class=\"hljs-attribute\">max-height</span>: <span class=\"hljs-number\">300px</span>;\n}\n<span class=\"hljs-selector-class\">.bs-crumb-select-item</span><span class=\"hljs-selector-pseudo\">:hover</span> {\n  <span class=\"hljs-attribute\">color</span>: red;\n}\n<span class=\"hljs-selector-class\">.bs-crumb-sep</span> {\n  <span class=\"hljs-attribute\">margin</span>: <span class=\"hljs-number\">0</span> <span class=\"hljs-number\">10px</span> <span class=\"hljs-number\">0</span> <span class=\"hljs-number\">5px</span>;\n  <span class=\"hljs-attribute\">width</span>: <span class=\"hljs-number\">20px</span>;\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">style</span>&gt;</span>\n\n</code></pre>\n<h1>props</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>当前的id值</td>\n<td>String</td>\n<td>必须</td>\n</tr>\n<tr>\n<td>data</td>\n<td>组件的数据对象数组</td>\n<td>Array(Object)</td>\n<td>必须</td>\n</tr>\n<tr>\n<td>childName</td>\n<td>数据对象中child的属性名字</td>\n<td>String</td>\n<td>child</td>\n</tr>\n<tr>\n<td>textName</td>\n<td>数据对象中显示值的属性名字</td>\n<td>String</td>\n<td>text</td>\n</tr>\n</tbody>\n</table>\n<h1>events</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>事件名称</th>\n<th>描述</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>input</td>\n<td>选中某个值</td>\n<td>选中节点的id值</td>\n</tr>\n<tr>\n<td>update:node</td>\n<td>选中某个值</td>\n<td>选中节点对象</td>\n</tr>\n</tbody>\n</table>\n<h1>样式定义</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>类名</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>.bs-crumb-item</td>\n<td>面包屑文字</td>\n</tr>\n<tr>\n<td>.bs-crumb-sep</td>\n<td>面包屑后面的箭头</td>\n</tr>\n<tr>\n<td>.bs-crumb-sep.actived</td>\n<td>面包屑后面的箭头,激活状态</td>\n</tr>\n<tr>\n<td>.bs-crumb-select</td>\n<td>弹出下拉框的框</td>\n</tr>\n<tr>\n<td>.bs-crumb-select-item</td>\n<td>弹出下拉框的单条li</td>\n</tr>\n</tbody>\n</table>\n</section></template>\n<style>\n.bs-crumb-select {\n  background: #fff;\n  border: 1px solid gray;\n  max-height: 300px;\n}\n.bs-crumb-select-item:hover {\n  color: red;\n}\n.bs-crumb-sep {\n  margin: 0 10px 0 5px;\n  width: 20px;\n}\n</style><style>\n.bs-crumb-select {\n  background: #fff;\n  border: 1px solid gray;\n  max-height: 300px;\n}\n.bs-crumb-select-item:hover {\n  color: red;\n}\n.bs-crumb-sep {\n  margin: 0 10px 0 5px;\n  width: 20px;\n}\n</style>\n<script>\nexport default {\n  data() {\n    const data = {\n      v: 5,\n      data: [{\n        id: 1,\n        text: 'root',\n        child: [{\n          id: 2,\n          text: 'level1-1',\n          child: [{\n            id: 4,\n            text: 'level2-1'\n          }, {\n            id: 3,\n            text: 'level2-2',\n            child: [{\n              id: 5,\n              text: 'level3-1',\n              child: [{\n                id: 6,\n                text: 'level4-1'\n              }, {\n                id: 7,\n                text: 'level4-2'\n              }, {\n                id: 8,\n                text: 'level4-3'\n              }]\n            }]\n          }]\n        }]\n      }]\n    }\n    let id = 30\n    let i = 30\n    while (i--) {\n      data.data[0].child.push({\n        id: id++,\n        text: 'id' + id\n      })\n    }\n    return data\n  }\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "\n.bs-crumb-select {\n  background: #fff;\n  border: 1px solid gray;\n  max-height: 300px;\n}\n.bs-crumb-select-item:hover {\n  color: red;\n}\n.bs-crumb-sep {\n  margin: 0 10px 0 5px;\n  width: 20px;\n}\n", "", {"version":3,"sources":["D:/bsvue/docs/md/docs/md/crumb.vue?d8e8b66a"],"names":[],"mappings":";AAqLA;EACA,iBAAA;EACA,uBAAA;EACA,kBAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,qBAAA;EACA,YAAA;CACA","file":"crumb.md","sourcesContent":["<template><section><h1>描述</h1>\n<p>组件提供类似于windows文件夹的可回退可选择子级的面包屑展示</p>\n<h1>效果展示</h1>\n<template>\n  <div>\n    <bs-crumb v-model=\"v\" :data=\"data\"></bs-crumb>\n  </div>\n</template>\n\n\n<h1>代码示例</h1>\n<pre v-pre=\"\"><code v-pre=\"\" class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">bs-crumb</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"v\"</span> <span class=\"hljs-attr\">:data</span>=<span class=\"hljs-string\">\"data\"</span> &gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">bs-crumb</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">const</span> data = {\n      <span class=\"hljs-attr\">v</span>: <span class=\"hljs-number\">5</span>,\n      <span class=\"hljs-attr\">data</span>: [{\n        <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">1</span>,\n        <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'root'</span>,\n        <span class=\"hljs-attr\">child</span>: [{\n          <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">2</span>,\n          <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level1-1'</span>,\n          <span class=\"hljs-attr\">child</span>: [{\n            <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">4</span>,\n            <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level2-1'</span>\n          }, {\n            <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">3</span>,\n            <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level2-2'</span>,\n            <span class=\"hljs-attr\">child</span>: [{\n              <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">5</span>,\n              <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level3-1'</span>,\n              <span class=\"hljs-attr\">child</span>: [{\n                <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">6</span>,\n                <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level4-1'</span>\n              }, {\n                <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">7</span>,\n                <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level4-2'</span>\n              }, {\n                <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">8</span>,\n                <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'level4-3'</span>\n              }]\n            }]\n          }]\n        }]\n      }]\n    }\n    <span class=\"hljs-keyword\">let</span> id = <span class=\"hljs-number\">30</span>\n    <span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">30</span>\n    <span class=\"hljs-keyword\">while</span> (i--) {\n      data.data[<span class=\"hljs-number\">0</span>].child.push({\n        <span class=\"hljs-attr\">id</span>: id++,\n        <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'id'</span> + id\n      })\n    }\n    <span class=\"hljs-keyword\">return</span> data\n  }\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">style</span>&gt;</span><span class=\"css\">\n<span class=\"hljs-selector-class\">.bs-crumb-select</span> {\n  <span class=\"hljs-attribute\">background</span>: <span class=\"hljs-number\">#fff</span>;\n  <span class=\"hljs-attribute\">border</span>: <span class=\"hljs-number\">1px</span> solid gray;\n  <span class=\"hljs-attribute\">max-height</span>: <span class=\"hljs-number\">300px</span>;\n}\n<span class=\"hljs-selector-class\">.bs-crumb-select-item</span><span class=\"hljs-selector-pseudo\">:hover</span> {\n  <span class=\"hljs-attribute\">color</span>: red;\n}\n<span class=\"hljs-selector-class\">.bs-crumb-sep</span> {\n  <span class=\"hljs-attribute\">margin</span>: <span class=\"hljs-number\">0</span> <span class=\"hljs-number\">10px</span> <span class=\"hljs-number\">0</span> <span class=\"hljs-number\">5px</span>;\n  <span class=\"hljs-attribute\">width</span>: <span class=\"hljs-number\">20px</span>;\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">style</span>&gt;</span>\n\n</code></pre>\n<h1>props</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>当前的id值</td>\n<td>String</td>\n<td>必须</td>\n</tr>\n<tr>\n<td>data</td>\n<td>组件的数据对象数组</td>\n<td>Array(Object)</td>\n<td>必须</td>\n</tr>\n<tr>\n<td>childName</td>\n<td>数据对象中child的属性名字</td>\n<td>String</td>\n<td>child</td>\n</tr>\n<tr>\n<td>textName</td>\n<td>数据对象中显示值的属性名字</td>\n<td>String</td>\n<td>text</td>\n</tr>\n</tbody>\n</table>\n<h1>events</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>事件名称</th>\n<th>描述</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>input</td>\n<td>选中某个值</td>\n<td>选中节点的id值</td>\n</tr>\n<tr>\n<td>update:node</td>\n<td>选中某个值</td>\n<td>选中节点对象</td>\n</tr>\n</tbody>\n</table>\n<h1>样式定义</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>类名</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>.bs-crumb-item</td>\n<td>面包屑文字</td>\n</tr>\n<tr>\n<td>.bs-crumb-sep</td>\n<td>面包屑后面的箭头</td>\n</tr>\n<tr>\n<td>.bs-crumb-sep.actived</td>\n<td>面包屑后面的箭头,激活状态</td>\n</tr>\n<tr>\n<td>.bs-crumb-select</td>\n<td>弹出下拉框的框</td>\n</tr>\n<tr>\n<td>.bs-crumb-select-item</td>\n<td>弹出下拉框的单条li</td>\n</tr>\n</tbody>\n</table>\n</section></template>\n<style>\n.bs-crumb-select {\n  background: #fff;\n  border: 1px solid gray;\n  max-height: 300px;\n}\n.bs-crumb-select-item:hover {\n  color: red;\n}\n.bs-crumb-sep {\n  margin: 0 10px 0 5px;\n  width: 20px;\n}\n</style><style>\n.bs-crumb-select {\n  background: #fff;\n  border: 1px solid gray;\n  max-height: 300px;\n}\n.bs-crumb-select-item:hover {\n  color: red;\n}\n.bs-crumb-sep {\n  margin: 0 10px 0 5px;\n  width: 20px;\n}\n</style>\n<script>\nexport default {\n  data() {\n    const data = {\n      v: 5,\n      data: [{\n        id: 1,\n        text: 'root',\n        child: [{\n          id: 2,\n          text: 'level1-1',\n          child: [{\n            id: 4,\n            text: 'level2-1'\n          }, {\n            id: 3,\n            text: 'level2-2',\n            child: [{\n              id: 5,\n              text: 'level3-1',\n              child: [{\n                id: 6,\n                text: 'level4-1'\n              }, {\n                id: 7,\n                text: 'level4-2'\n              }, {\n                id: 8,\n                text: 'level4-3'\n              }]\n            }]\n          }]\n        }]\n      }]\n    }\n    let id = 30\n    let i = 30\n    while (i--) {\n      data.data[0].child.push({\n        id: id++,\n        text: 'id' + id\n      })\n    }\n    return data\n  }\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_crumb_md__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_crumb_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_crumb_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_661926e4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_crumb_md__ = __webpack_require__(631);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(628)
  __webpack_require__(629)
}
var normalizeComponent = __webpack_require__(15)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_crumb_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_661926e4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_crumb_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs\\md\\crumb.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(6)
  hotAPI.install(__webpack_require__(13), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-661926e4", Component.options)
  } else {
    hotAPI.reload("data-v-661926e4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(604);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("24fc94fc", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(604, function() {
     var newContent = __webpack_require__(604);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(605);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("98a7837a", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(605, function() {
     var newContent = __webpack_require__(605);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    var data = {
      v: 5,
      data: [{
        id: 1,
        text: 'root',
        child: [{
          id: 2,
          text: 'level1-1',
          child: [{
            id: 4,
            text: 'level2-1'
          }, {
            id: 3,
            text: 'level2-2',
            child: [{
              id: 5,
              text: 'level3-1',
              child: [{
                id: 6,
                text: 'level4-1'
              }, {
                id: 7,
                text: 'level4-2'
              }, {
                id: 8,
                text: 'level4-3'
              }]
            }]
          }]
        }]
      }]
    };
    var id = 30;
    var i = 30;
    while (i--) {
      data.data[0].child.push({
        id: id++,
        text: 'id' + id
      });
    }
    return data;
  }
};

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("h1", [_vm._v("描述")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("组件提供类似于windows文件夹的可回退可选择子级的面包屑展示")
      ]),
      _vm._v(" "),
      _c("h1", [_vm._v("效果展示")]),
      _vm._v(" "),
      [
        _c(
          "div",
          [
            _c("bs-crumb", {
              attrs: { data: _vm.data },
              model: {
                value: _vm.v,
                callback: function($$v) {
                  _vm.v = $$v
                },
                expression: "v"
              }
            })
          ],
          1
        )
      ],
      _vm._v(" "),
      _c("h1", [_vm._v("代码示例")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("h1", [_vm._v("props")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("h1", [_vm._v("events")]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("h1", [_vm._v("样式定义")]),
      _vm._v(" "),
      _vm._m(3)
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("pre", { pre: true }, [
      _c("code", { attrs: { "v-pre": "", class: "language-html" } }, [
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("template")]),
          _vm._v(">")
        ]),
        _vm._v("\n  "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
          _vm._v(">")
        ]),
        _vm._v("\n    "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("bs-crumb")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("v-model")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"v"')]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v(":data")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"data"')]),
          _vm._v(" >")
        ]),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("bs-crumb")]),
          _vm._v(">")
        ]),
        _vm._v("\n  "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
          _vm._v(">")
        ]),
        _vm._v("\n"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("template")]),
          _vm._v(">")
        ]),
        _vm._v("\n"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("script")]),
          _vm._v(">")
        ]),
        _c("span", { attrs: { class: "javascript" } }, [
          _vm._v("\n"),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("export")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("default")]),
          _vm._v(" {\n  data() {\n    "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("const")]),
          _vm._v(" data = {\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("v")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("5")]),
          _vm._v(",\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("data")]),
          _vm._v(": [{\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("id")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1")]),
          _vm._v(",\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("text")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'root'")]),
          _vm._v(",\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("child")]),
          _vm._v(": [{\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("id")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("2")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("text")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'level1-1'")
          ]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("child")]),
          _vm._v(": [{\n            "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("id")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("4")]),
          _vm._v(",\n            "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("text")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'level2-1'")
          ]),
          _vm._v("\n          }, {\n            "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("id")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("3")]),
          _vm._v(",\n            "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("text")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'level2-2'")
          ]),
          _vm._v(",\n            "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("child")]),
          _vm._v(": [{\n              "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("id")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("5")]),
          _vm._v(",\n              "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("text")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'level3-1'")
          ]),
          _vm._v(",\n              "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("child")]),
          _vm._v(": [{\n                "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("id")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("6")]),
          _vm._v(",\n                "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("text")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'level4-1'")
          ]),
          _vm._v("\n              }, {\n                "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("id")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("7")]),
          _vm._v(",\n                "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("text")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'level4-2'")
          ]),
          _vm._v("\n              }, {\n                "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("id")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("8")]),
          _vm._v(",\n                "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("text")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'level4-3'")
          ]),
          _vm._v(
            "\n              }]\n            }]\n          }]\n        }]\n      }]\n    }\n    "
          ),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("let")]),
          _vm._v(" id = "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("30")]),
          _vm._v("\n    "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("let")]),
          _vm._v(" i = "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("30")]),
          _vm._v("\n    "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("while")]),
          _vm._v(" (i--) {\n      data.data["),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("0")]),
          _vm._v("].child.push({\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("id")]),
          _vm._v(": id++,\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("text")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'id'")]),
          _vm._v(" + id\n      })\n    }\n    "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("return")]),
          _vm._v(" data\n  }\n}\n")
        ]),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("script")]),
          _vm._v(">")
        ]),
        _vm._v("\n"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("style")]),
          _vm._v(">")
        ]),
        _c("span", { attrs: { class: "css" } }, [
          _vm._v("\n"),
          _c("span", { attrs: { class: "hljs-selector-class" } }, [
            _vm._v(".bs-crumb-select")
          ]),
          _vm._v(" {\n  "),
          _c("span", { attrs: { class: "hljs-attribute" } }, [
            _vm._v("background")
          ]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("#fff")]),
          _vm._v(";\n  "),
          _c("span", { attrs: { class: "hljs-attribute" } }, [
            _vm._v("border")
          ]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1px")]),
          _vm._v(" solid gray;\n  "),
          _c("span", { attrs: { class: "hljs-attribute" } }, [
            _vm._v("max-height")
          ]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("300px")]),
          _vm._v(";\n}\n"),
          _c("span", { attrs: { class: "hljs-selector-class" } }, [
            _vm._v(".bs-crumb-select-item")
          ]),
          _c("span", { attrs: { class: "hljs-selector-pseudo" } }, [
            _vm._v(":hover")
          ]),
          _vm._v(" {\n  "),
          _c("span", { attrs: { class: "hljs-attribute" } }, [_vm._v("color")]),
          _vm._v(": red;\n}\n"),
          _c("span", { attrs: { class: "hljs-selector-class" } }, [
            _vm._v(".bs-crumb-sep")
          ]),
          _vm._v(" {\n  "),
          _c("span", { attrs: { class: "hljs-attribute" } }, [
            _vm._v("margin")
          ]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("0")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10px")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("0")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("5px")]),
          _vm._v(";\n  "),
          _c("span", { attrs: { class: "hljs-attribute" } }, [_vm._v("width")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("20px")]),
          _vm._v(";\n}\n")
        ]),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("style")]),
          _vm._v(">")
        ]),
        _vm._v("\n\n")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table table-striped table-bordered" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("属性名称")]),
          _vm._v(" "),
          _c("th", [_vm._v("描述")]),
          _vm._v(" "),
          _c("th", [_vm._v("类型")]),
          _vm._v(" "),
          _c("th", [_vm._v("默认值")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("value")]),
          _vm._v(" "),
          _c("td", [_vm._v("当前的id值")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("必须")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("data")]),
          _vm._v(" "),
          _c("td", [_vm._v("组件的数据对象数组")]),
          _vm._v(" "),
          _c("td", [_vm._v("Array(Object)")]),
          _vm._v(" "),
          _c("td", [_vm._v("必须")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("childName")]),
          _vm._v(" "),
          _c("td", [_vm._v("数据对象中child的属性名字")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("child")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("textName")]),
          _vm._v(" "),
          _c("td", [_vm._v("数据对象中显示值的属性名字")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("text")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table table-striped table-bordered" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("事件名称")]),
          _vm._v(" "),
          _c("th", [_vm._v("描述")]),
          _vm._v(" "),
          _c("th", [_vm._v("参数")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("input")]),
          _vm._v(" "),
          _c("td", [_vm._v("选中某个值")]),
          _vm._v(" "),
          _c("td", [_vm._v("选中节点的id值")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("update:node")]),
          _vm._v(" "),
          _c("td", [_vm._v("选中某个值")]),
          _vm._v(" "),
          _c("td", [_vm._v("选中节点对象")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table table-striped table-bordered" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("类名")]),
          _vm._v(" "),
          _c("th", [_vm._v("描述")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v(".bs-crumb-item")]),
          _vm._v(" "),
          _c("td", [_vm._v("面包屑文字")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(".bs-crumb-sep")]),
          _vm._v(" "),
          _c("td", [_vm._v("面包屑后面的箭头")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(".bs-crumb-sep.actived")]),
          _vm._v(" "),
          _c("td", [_vm._v("面包屑后面的箭头,激活状态")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(".bs-crumb-select")]),
          _vm._v(" "),
          _c("td", [_vm._v("弹出下拉框的框")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(".bs-crumb-select-item")]),
          _vm._v(" "),
          _c("td", [_vm._v("弹出下拉框的单条li")])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(6)      .rerender("data-v-661926e4", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=1.bsvue.js.map
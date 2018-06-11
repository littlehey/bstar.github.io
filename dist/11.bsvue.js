webpackJsonp([11],{

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(655);

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c26231d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_start_md__ = __webpack_require__(656);
var disposed = false
var normalizeComponent = __webpack_require__(15)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c26231d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_start_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs\\md\\start.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(6)
  hotAPI.install(__webpack_require__(13), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c26231d", Component.options)
  } else {
    hotAPI.reload("data-v-2c26231d", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c("h1", [_vm._v("快速上手")]),
      _vm._v(" "),
      _c("h2", [_vm._v("引用并注册插件")]),
      _vm._v(" "),
      _c("pre", { pre: true }, [
        _c("code", { attrs: { "v-pre": "", class: "language-js" } }, [
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("import")]),
          _vm._v(" bs "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("from")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'bstar-components'")
          ]),
          _vm._v("\n"),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("import")]),
          _vm._v(" Vue "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("from")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'vue'")]),
          _vm._v("\nVue.use(bs)\n")
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
    __webpack_require__(6)      .rerender("data-v-2c26231d", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=11.bsvue.js.map
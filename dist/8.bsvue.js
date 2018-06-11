webpackJsonp([8],{

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(650);

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_select_md__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_select_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_select_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7151828f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_select_md__ = __webpack_require__(652);
var disposed = false
var normalizeComponent = __webpack_require__(15)
/* script */

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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_select_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7151828f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_select_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs\\md\\select.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(6)
  hotAPI.install(__webpack_require__(13), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7151828f", Component.options)
  } else {
    hotAPI.reload("data-v-7151828f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 651:
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

exports.default = {
  data: function data() {
    var options = [{
      value: '123',
      label: 'llllllll嘻嘻lllllllllllllllllllllllllllllllllllllllllllllllllll'
    }];
    var i = 22;
    while (i--) {
      options.push({
        label: i,
        value: i
      });
    }
    return {
      options: options,
      scrollOptions: {
        color: 'rgba(0,0,0,.75)',
        width: '8px',
        background: 'rgba(0,0,0,.15)'
      },
      v: ''
    };
  }
};

/***/ }),

/***/ 652:
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
        _vm._v(
          "提供了简单的选择器组件，比起三方组件的提升是提供了选项框覆盖插件功能，集成了scroll组件避免页面插件闪烁"
        )
      ]),
      _vm._v(" "),
      _c("h1", [_vm._v("效果展示")]),
      _vm._v(" "),
      [
        _c(
          "div",
          {
            staticStyle: {
              background: "#1c3053",
              height: "60px",
              padding: "30px"
            }
          },
          [
            _c("bs-select", {
              staticStyle: { width: "200px" },
              attrs: { options: _vm.options, scrollOptions: _vm.scrollOptions },
              model: {
                value: _vm.v,
                callback: function($$v) {
                  _vm.v = $$v
                },
                expression: "v"
              }
            }),
            _vm._v("\n  " + _vm._s(_vm.v) + "\n")
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
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4)
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
        _vm._v("\n"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("style")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"background:#1c3053;height: 60px;padding: 30px;"')
          ]),
          _vm._v(">")
        ]),
        _vm._v("\n  "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("bs-select")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v(":options")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"options"')
          ]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [
            _vm._v(":scrollOptions")
          ]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"scrollOptions"')
          ]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("v-model")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"v"')]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("style")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"width:200px;"')
          ]),
          _vm._v(">")
        ]),
        _vm._v("\n  "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("bs-select")]),
          _vm._v(">")
        ]),
        _vm._v("\n  {{v}}\n"),
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
          _vm._v(" options = []\n    "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("let")]),
          _vm._v(" i = "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("22")]),
          _vm._v("\n    "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("while")]),
          _vm._v(" (i--) {\n      options.push({\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("label")]),
          _vm._v(": i,\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("value")]),
          _vm._v(": i\n      })\n    }\n    "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("return")]),
          _vm._v(" {\n      options,\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [
            _vm._v("scrollOptions")
          ]),
          _vm._v(": {\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("color")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'rgba(0,0,0,.75)'")
          ]),
          _vm._v(",\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("width")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'8px'")]),
          _vm._v(",\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("background")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'rgba(0,0,0,.15)'")
          ]),
          _vm._v("\n      },\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("v")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("''")]),
          _vm._v("\n    }\n  }\n}\n")
        ]),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("script")]),
          _vm._v(">")
        ]),
        _vm._v("\n")
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
          _c("td", [_vm._v("options")]),
          _vm._v(" "),
          _c("td", [_vm._v("数据对象")]),
          _vm._v(" "),
          _c("td", [_vm._v("Array[{value, label}]")]),
          _vm._v(" "),
          _c("td", [_vm._v("必须")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("value")]),
          _vm._v(" "),
          _c("td", [_vm._v("值")]),
          _vm._v(" "),
          _c("td", [_vm._v("String,Number")]),
          _vm._v(" "),
          _c("td", [_vm._v("必须")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("scrollNum")]),
          _vm._v(" "),
          _c("td", [_vm._v("大于此数量的选项出滚动条")]),
          _vm._v(" "),
          _c("td", [_vm._v("Number")]),
          _vm._v(" "),
          _c("td", [_vm._v("4")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("scrollOptions")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("滚动条组件样式定义("),
            _c("a", { attrs: { href: "#/bs-scroll" } }, [_vm._v("详见")]),
            _vm._v(")")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Object")]),
          _vm._v(" "),
          _c("td", [_vm._v("{}")])
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
          _c("td", [_vm._v("选中值")]),
          _vm._v(" "),
          _c("td", [_vm._v("value")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("strong", [
        _vm._v("样式覆盖可能需要更高的权重覆盖， 如div.bs-slt-tog")
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
          _c("td", [_vm._v(".bs-slt-tog")]),
          _vm._v(" "),
          _c("td", [_vm._v("按钮框")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(".bs-slt-tog.open")]),
          _vm._v(" "),
          _c("td", [_vm._v("按钮框展开")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(".bs-slt-tog:hover")]),
          _vm._v(" "),
          _c("td", [_vm._v("按钮框鼠标悬浮")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(".bs-slt-drp")]),
          _vm._v(" "),
          _c("td", [_vm._v("选项框容器")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(".bs-slt-item")]),
          _vm._v(" "),
          _c("td", [_vm._v("单个选项")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(".bs-slt-item:hover")]),
          _vm._v(" "),
          _c("td", [_vm._v("选项鼠标悬浮")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(".bs-slt-item.selected")]),
          _vm._v(" "),
          _c("td", [_vm._v("已选中选项")])
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
    __webpack_require__(6)      .rerender("data-v-7151828f", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=8.bsvue.js.map
webpackJsonp([7],{

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(632);

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_timeline_md__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_timeline_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_timeline_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a1e47aa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_timeline_md__ = __webpack_require__(634);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_timeline_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a1e47aa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_timeline_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs\\md\\timeline.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(6)
  hotAPI.install(__webpack_require__(13), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a1e47aa", Component.options)
  } else {
    hotAPI.reload("data-v-2a1e47aa", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 633:
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

exports.default = {
  data: function data() {
    return {
      recordInfo: [{
        title: '通道1',
        eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }, { start: new Date().getTime() + 10500000, end: new Date().getTime() + 11000000 }],
        timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
      }, {
        title: '视频通道2',
        eventVideo: [{ start: new Date().getTime() - 5000000, end: new Date().getTime() + 10000000 }],
        timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
      }, {
        title: '通道3',
        eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
        timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }, { start: new Date().getTime() + 10005000, end: new Date().getTime() + 10010000 }]
      }, {
        title: '通道4',
        eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
        timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() - 1000000 }]
      }, {
        title: '自定义通道5',
        eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
        timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
      }, {
        title: '通道6',
        eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
        timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
      }],
      value: new Date().getTime(),
      levels: [1 / 60, 1 / 5, 1, 6, 12, 24], // 5s/60s, 60s/12m, 5m/1h, 0.5h/6h, 1h/12h, 2h/24h
      step: 5
    };
  },

  methods: {
    zoomOut: function zoomOut() {
      if (this.step === 0) return;
      this.step--;
    },
    zoomIn: function zoomIn() {
      if (this.step === this.levels.length - 1) return;
      this.step++;
    },
    activeLine: function activeLine(index) {
      console.log(index);
    },
    now: function now() {
      var date = new Date(this.value);
      var addZero = function addZero(n) {
        return n.toString().length < 2 ? '0' + n : '' + n;
      };
      return addZero(date.getFullYear()) + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
    }
  }
};

/***/ }),

/***/ 634:
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
      _c("p", [_vm._v("时间轴组件")]),
      _vm._v(" "),
      _c("h1", [_vm._v("效果展示")]),
      _vm._v(" "),
      [
        _c(
          "div",
          [
            _c("bs-timeline", {
              attrs: {
                recordInfo: _vm.recordInfo,
                level: _vm.levels[_vm.step]
              },
              on: { activeLine: _vm.activeLine },
              model: {
                value: _vm.value,
                callback: function($$v) {
                  _vm.value = $$v
                },
                expression: "value"
              }
            }),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.zoomOut } }, [_vm._v("+")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.zoomIn } }, [_vm._v("-")]),
            _vm._v(" "),
            _c(
              "span",
              {
                on: {
                  click: function($event) {
                    _vm.value = new Date().getTime()
                  }
                }
              },
              [_vm._v("当前时间：")]
            ),
            _vm._v("  " + _vm._s(_vm.now()) + "\n  ")
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
      _c("h1", [_vm._v("说明")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "这个时间轴只保留了最根本的轴体，不包括之前的标题、日历、图例，使用时可以根据v-model与level自行添加"
        )
      ])
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
          _c("span", { attrs: { class: "hljs-name" } }, [
            _vm._v("bs-timeline")
          ]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("v-model")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"value"')]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [
            _vm._v(":recordInfo")
          ]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"recordInfo"')
          ]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v(":level")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"levels[step]"')
          ]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [
            _vm._v("@activeLine")
          ]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"activeLine"')
          ]),
          _vm._v(">")
        ]),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [
            _vm._v("bs-timeline")
          ]),
          _vm._v(">")
        ]),
        _vm._v("\n    "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("@click")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"zoomOut"')
          ]),
          _vm._v(">")
        ]),
        _vm._v("+"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(">")
        ]),
        _vm._v("  "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("@click")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"zoomIn"')]),
          _vm._v(">")
        ]),
        _vm._v("-"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(">")
        ]),
        _vm._v("\n    "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("span")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("@click")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"value= new Date().getTime()"')
          ]),
          _vm._v(">")
        ]),
        _vm._v("当前时间："),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("span")]),
          _vm._v(">")
        ]),
        _vm._v("  {{now()}}\n  "),
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
        _vm._v("\n\n"),
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
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("return")]),
          _vm._v(" {\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("recordInfo")]),
          _vm._v(": [\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'通道1'")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("eventVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime(), "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(" },\n          { "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10500000")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("11000000")]),
          _vm._v(" }],\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timedVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() - "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() }]\n        },\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'视频通道2'")
          ]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("eventVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() - "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("5000000")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(" }],\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timedVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() - "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() }]\n        },\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'通道3'")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("eventVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime(), "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(" }],\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timedVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() - "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() },\n          { "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10005000")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10010000")]),
          _vm._v(" }]\n        },\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'通道4'")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("eventVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime(), "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(" }],\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timedVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() - "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() - "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1000000")]),
          _vm._v(" }]\n        },\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'通道5'")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("eventVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime(), "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(" }],\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timedVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() - "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() }]\n        },\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'通道6'")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("eventVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime(), "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(" }],\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timedVideo")]),
          _vm._v(": [{ "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("start")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() - "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("10000000")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("end")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() }]\n        }\n      ],\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("value")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime(),\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("levels")]),
          _vm._v(": ["),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1")]),
          _vm._v("/"),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1")]),
          _vm._v("/"),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("5")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("6")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("12")]),
          _vm._v(", "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("24")]),
          _vm._v("], "),
          _c("span", { attrs: { class: "hljs-comment" } }, [
            _vm._v("// 5s/60s, 60s/12m, 5m/1h, 0.5h/6h, 1h/12h, 2h/24h")
          ]),
          _vm._v("\n      step: "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("5")]),
          _vm._v("\n    }\n  },\n  "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("methods")]),
          _vm._v(": {\n    zoomOut() {\n      "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("if")]),
          _vm._v(" ("),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(".step === "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("0")]),
          _vm._v(") "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("return")]),
          _vm._v("\n      "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(".step--\n    },\n    zoomIn() {\n      "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("if")]),
          _vm._v(" ("),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(".step === "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(".levels.length - "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1")]),
          _vm._v(") "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("return")]),
          _vm._v("\n      "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(".step++\n    },\n    activeLine(index) {\n      "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [
            _vm._v("console")
          ]),
          _vm._v(".log(index)\n    },\n    now() {\n      "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("const")]),
          _vm._v(" date = "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("("),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(".value)\n      "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("const")]),
          _vm._v(" addZero = "),
          _c("span", { attrs: { class: "hljs-function" } }, [
            _vm._v("("),
            _c("span", { attrs: { class: "hljs-params" } }, [_vm._v("n")]),
            _vm._v(") =>")
          ]),
          _vm._v(" (n.toString().length < "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("2")]),
          _vm._v(" ? "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'0'")]),
          _vm._v(" + n : "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("''")]),
          _vm._v(" + n)\n      "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("`"),
            _c("span", { attrs: { class: "hljs-subst" } }, [
              _vm._v("${addZero(date.getFullYear())}")
            ]),
            _vm._v("-"),
            _c("span", { attrs: { class: "hljs-subst" } }, [
              _vm._v("${addZero(date.getMonth() + "),
              _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1")]),
              _vm._v(")}")
            ]),
            _vm._v("-"),
            _c("span", { attrs: { class: "hljs-subst" } }, [
              _vm._v("${addZero(date.getDate())}")
            ]),
            _vm._v(" "),
            _c("span", { attrs: { class: "hljs-subst" } }, [
              _vm._v("${addZero(date.getHours())}")
            ]),
            _vm._v(":"),
            _c("span", { attrs: { class: "hljs-subst" } }, [
              _vm._v("${addZero(date.getMinutes())}")
            ]),
            _vm._v(":"),
            _c("span", { attrs: { class: "hljs-subst" } }, [
              _vm._v("${addZero(date.getSeconds())}")
            ]),
            _vm._v("`")
          ]),
          _vm._v("\n    }\n  }\n}\n")
        ]),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("script")]),
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
          _c("td", [_vm._v("v-model")]),
          _vm._v(" "),
          _c("td", [_vm._v("双向绑定当前时间戳(毫秒)")]),
          _vm._v(" "),
          _c("td", [_vm._v("Number")]),
          _vm._v(" "),
          _c("td", [_vm._v("当天12点时间戳")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("level")]),
          _vm._v(" "),
          _c("td", [_vm._v("当前可视时间轴区域所能表示的时间（小时）")]),
          _vm._v(" "),
          _c("td", [_vm._v("Number")]),
          _vm._v(" "),
          _c("td", [_vm._v("24")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("recordInfo")]),
          _vm._v(" "),
          _c("td", [_vm._v("回放信息")]),
          _vm._v(" "),
          _c("td", [_vm._v("Array")]),
          _vm._v(" "),
          _c("td", [_vm._v("无")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("timeLineColor")]),
          _vm._v(" "),
          _c("td", [_vm._v("定时录像条颜色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#1fa0fe")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("eventLineColor")]),
          _vm._v(" "),
          _c("td", [_vm._v("事件录像条颜色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#fc6e30")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("lineColor")]),
          _vm._v(" "),
          _c("td", [_vm._v("轴背景颜色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#ccc")])
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
          _c("td", [_vm._v("activeLine")]),
          _vm._v(" "),
          _c("td", [_vm._v("焦点轴")]),
          _vm._v(" "),
          _c("td", [_vm._v("焦点轴的索引")])
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
    __webpack_require__(6)      .rerender("data-v-2a1e47aa", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=7.bsvue.js.map
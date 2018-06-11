webpackJsonp([6],{

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(610);

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "\n.inb {\n  display: inline-block;\n}\n", "", {"version":3,"sources":["D:/bsvue/docs/md/docs/md/scroll.vue?324ada1b"],"names":[],"mappings":";AA2MA;EACA,sBAAA;CACA","file":"scroll.md","sourcesContent":["<template><section><h1>描述</h1>\n<p>scroll组件用于页面有插件，原生滚动条会导致插件闪烁，或者因为原生滚动条不够美观时的解决方案。</p>\n<p>注意事项为组件高度一定要是可计算的，若为100%则他的父容器高度需要是可计算的。</p>\n<h1>效果展示</h1>\n<template>\n  <div>\n    <div style=\"height:200px\">\n      <bs-scroll class=\"inb\" style=\"width:200px\" ref=\"scroller\">\n        <ul>\n          <li v-for=\"index in count\" :key=\"index\">{{index}}</li>\n        </ul>\n      </bs-scroll>\n      <div class=\"inb\">\n        <v-btn @click=\"count++\">+</v-btn>\n        <v-btn @click=\"count--\">-</v-btn>\n        <v-btn @click=\"getT\">getTop</v-btn>\n        <v-btn @click=\"setT\">setTop</v-btn>\n      </div>\n    </div>\n  </div>\n</template>\n\n\n<h1>代码示例</h1>\n<pre v-pre=\"\"><code v-pre=\"\" class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"height:200px\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">bs-scroll</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inb\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width:200px\"</span> <span class=\"hljs-attr\">ref</span>=<span class=\"hljs-string\">\"scroller\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ul</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">\"index in count\"</span> <span class=\"hljs-attr\">:key</span>=<span class=\"hljs-string\">\"index\"</span>&gt;</span>{{index}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ul</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">bs-scroll</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inb\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">v-btn</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"count++\"</span>&gt;</span>+<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">v-btn</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">v-btn</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"count--\"</span>&gt;</span>-<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">v-btn</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">v-btn</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"getT\"</span>&gt;</span>getTop<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">v-btn</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">v-btn</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"setT\"</span>&gt;</span>setTop<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">v-btn</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">count</span>: <span class=\"hljs-number\">11</span>\n    }\n  },\n  <span class=\"hljs-attr\">watch</span>: {\n    count(a) {\n      <span class=\"hljs-keyword\">if</span> (a &lt; <span class=\"hljs-number\">0</span>) {\n        <span class=\"hljs-keyword\">this</span>.count = <span class=\"hljs-number\">0</span>\n      }\n      <span class=\"hljs-keyword\">this</span>.update()\n    }\n  },\n  <span class=\"hljs-attr\">methods</span>: {\n    getT() {\n      <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-keyword\">this</span>.$refs.scroller.getScrollTop())\n    },\n    setT() {\n      <span class=\"hljs-keyword\">this</span>.$refs.scroller.setScrollTop(<span class=\"hljs-number\">0</span>)\n    },\n    update() {\n      <span class=\"hljs-keyword\">this</span>.$refs.scroller.update()\n    }\n  }\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n</code></pre>\n<h1>props</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>height</td>\n<td>组件限定高度</td>\n<td>String</td>\n<td>100%</td>\n</tr>\n<tr>\n<td>wheelSpeed</td>\n<td>滚动速度</td>\n<td>Number</td>\n<td>40</td>\n</tr>\n<tr>\n<td>option</td>\n<td>组件的option对象（可选）, 对象属性如下表格</td>\n<td>Object</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n<h3>option属性列表</h3>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>color</td>\n<td>滚动条颜色</td>\n<td>String</td>\n<td>#909090</td>\n</tr>\n<tr>\n<td>background</td>\n<td>滚动条底色</td>\n<td>String</td>\n<td>#e3e3e3</td>\n</tr>\n<tr>\n<td>width</td>\n<td>滚动条宽度</td>\n<td>String</td>\n<td>10px</td>\n</tr>\n<tr>\n<td>margin</td>\n<td>滚动条边距</td>\n<td>String</td>\n<td>0px</td>\n</tr>\n</tbody>\n</table>\n<p>以上属性还可以通过设置全局变量来实现\n如:</p>\n<pre v-pre=\"\"><code v-pre=\"\" class=\"language-javascript\">Vue.ScrollOption = {\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">'red'</span>\n}\n</code></pre>\n<p>通过全局变量设置的样式会影响所有的默认样式\n建议在main中定义全局样式</p>\n<h1>events</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>事件名称</th>\n<th>描述</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>on-scroll</td>\n<td>滚动事件</td>\n<td>无</td>\n</tr>\n<tr>\n<td>scroll-top</td>\n<td>滚动到顶部</td>\n<td>无</td>\n</tr>\n<tr>\n<td>scroll-bottom</td>\n<td>滚动到底部</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n<h1>methods</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>方法名称</th>\n<th>描述</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getScrollTop</td>\n<td>获得scrolltop的值</td>\n<td>无</td>\n<td>scrolltop的值</td>\n</tr>\n<tr>\n<td>setScrollTop</td>\n<td>设置scrolltop的值</td>\n<td>scrolltop的值</td>\n<td>无</td>\n</tr>\n<tr>\n<td>update</td>\n<td>内容高度变化时调用此方法重新计算区域(简单结构会自动调用)</td>\n<td>无</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n</section></template>\n<style>\n.inb {\n  display: inline-block;\n}\n</style>\n<script>\nexport default {\n  data() {\n    return {\n      count: 15\n    }\n  },\n  watch: {\n    count(a) {\n      if (a < 0) {\n        this.count = 0\n      }\n    }\n  },\n  methods: {\n    getT() {\n      window.alert(this.$refs.scroller.getScrollTop())\n    },\n    setT() {\n      this.$refs.scroller.setScrollTop(0)\n    }\n  }\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_scroll_md__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_scroll_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_scroll_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1eff99c4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_scroll_md__ = __webpack_require__(613);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(611)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_scroll_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1eff99c4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_scroll_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs\\md\\scroll.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(6)
  hotAPI.install(__webpack_require__(13), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1eff99c4", Component.options)
  } else {
    hotAPI.reload("data-v-1eff99c4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(599);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("635ee276", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(599, function() {
     var newContent = __webpack_require__(599);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 612:
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
//
//
//
//
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
      count: 15
    };
  },

  watch: {
    count: function count(a) {
      if (a < 0) {
        this.count = 0;
      }
    }
  },
  methods: {
    getT: function getT() {
      window.alert(this.$refs.scroller.getScrollTop());
    },
    setT: function setT() {
      this.$refs.scroller.setScrollTop(0);
    }
  }
};

/***/ }),

/***/ 613:
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
          "scroll组件用于页面有插件，原生滚动条会导致插件闪烁，或者因为原生滚动条不够美观时的解决方案。"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "注意事项为组件高度一定要是可计算的，若为100%则他的父容器高度需要是可计算的。"
        )
      ]),
      _vm._v(" "),
      _c("h1", [_vm._v("效果展示")]),
      _vm._v(" "),
      [
        _c("div", [
          _c(
            "div",
            { staticStyle: { height: "200px" } },
            [
              _c(
                "bs-scroll",
                {
                  ref: "scroller",
                  staticClass: "inb",
                  staticStyle: { width: "200px" }
                },
                [
                  _c(
                    "ul",
                    _vm._l(_vm.count, function(index) {
                      return _c("li", { key: index }, [_vm._v(_vm._s(index))])
                    })
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "inb" },
                [
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.count++
                        }
                      }
                    },
                    [_vm._v("+")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.count--
                        }
                      }
                    },
                    [_vm._v("-")]
                  ),
                  _vm._v(" "),
                  _c("v-btn", { on: { click: _vm.getT } }, [_vm._v("getTop")]),
                  _vm._v(" "),
                  _c("v-btn", { on: { click: _vm.setT } }, [_vm._v("setTop")])
                ],
                1
              )
            ],
            1
          )
        ])
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
      _c("h3", [_vm._v("option属性列表")]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("p", [_vm._v("以上属性还可以通过设置全局变量来实现\n如:")]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "通过全局变量设置的样式会影响所有的默认样式\n建议在main中定义全局样式"
        )
      ]),
      _vm._v(" "),
      _c("h1", [_vm._v("events")]),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("h1", [_vm._v("methods")]),
      _vm._v(" "),
      _vm._m(5)
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
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("style")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"height:200px"')
          ]),
          _vm._v(">")
        ]),
        _vm._v("\n      "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("bs-scroll")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("class")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"inb"')]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("style")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"width:200px"')
          ]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("ref")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"scroller"')
          ]),
          _vm._v(">")
        ]),
        _vm._v("\n        "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("ul")]),
          _vm._v(">")
        ]),
        _vm._v("\n          "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("li")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("v-for")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"index in count"')
          ]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v(":key")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"index"')]),
          _vm._v(">")
        ]),
        _vm._v("{{index}}"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("li")]),
          _vm._v(">")
        ]),
        _vm._v("\n        "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("ul")]),
          _vm._v(">")
        ]),
        _vm._v("\n      "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("bs-scroll")]),
          _vm._v(">")
        ]),
        _vm._v("\n      "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("class")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"inb"')]),
          _vm._v(">")
        ]),
        _vm._v("\n        "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("@click")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"count++"')
          ]),
          _vm._v(">")
        ]),
        _vm._v("+"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(">")
        ]),
        _vm._v("\n        "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("@click")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"count--"')
          ]),
          _vm._v(">")
        ]),
        _vm._v("-"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(">")
        ]),
        _vm._v("\n        "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("@click")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"getT"')]),
          _vm._v(">")
        ]),
        _vm._v("getTop"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(">")
        ]),
        _vm._v("\n        "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("@click")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"setT"')]),
          _vm._v(">")
        ]),
        _vm._v("setTop"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("v-btn")]),
          _vm._v(">")
        ]),
        _vm._v("\n      "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
          _vm._v(">")
        ]),
        _vm._v("\n    "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
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
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("return")]),
          _vm._v(" {\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("count")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("11")]),
          _vm._v("\n    }\n  },\n  "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("watch")]),
          _vm._v(": {\n    count(a) {\n      "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("if")]),
          _vm._v(" (a < "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("0")]),
          _vm._v(") {\n        "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(".count = "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("0")]),
          _vm._v("\n      }\n      "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(".update()\n    }\n  },\n  "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("methods")]),
          _vm._v(": {\n    getT() {\n      "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("window")]),
          _vm._v(".alert("),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(
            ".$refs.scroller.getScrollTop())\n    },\n    setT() {\n      "
          ),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(".$refs.scroller.setScrollTop("),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("0")]),
          _vm._v(")\n    },\n    update() {\n      "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("this")]),
          _vm._v(".$refs.scroller.update()\n    }\n  }\n}\n")
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
          _c("td", [_vm._v("height")]),
          _vm._v(" "),
          _c("td", [_vm._v("组件限定高度")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("100%")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("wheelSpeed")]),
          _vm._v(" "),
          _c("td", [_vm._v("滚动速度")]),
          _vm._v(" "),
          _c("td", [_vm._v("Number")]),
          _vm._v(" "),
          _c("td", [_vm._v("40")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("option")]),
          _vm._v(" "),
          _c("td", [_vm._v("组件的option对象（可选）, 对象属性如下表格")]),
          _vm._v(" "),
          _c("td", [_vm._v("Object")]),
          _vm._v(" "),
          _c("td", [_vm._v("无")])
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
          _c("td", [_vm._v("color")]),
          _vm._v(" "),
          _c("td", [_vm._v("滚动条颜色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#909090")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("background")]),
          _vm._v(" "),
          _c("td", [_vm._v("滚动条底色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#e3e3e3")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("width")]),
          _vm._v(" "),
          _c("td", [_vm._v("滚动条宽度")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("10px")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("margin")]),
          _vm._v(" "),
          _c("td", [_vm._v("滚动条边距")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("0px")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("pre", { pre: true }, [
      _c("code", { attrs: { "v-pre": "", class: "language-javascript" } }, [
        _vm._v("Vue.ScrollOption = {\n  "),
        _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("color")]),
        _vm._v(": "),
        _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'red'")]),
        _vm._v("\n}\n")
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
          _c("td", [_vm._v("on-scroll")]),
          _vm._v(" "),
          _c("td", [_vm._v("滚动事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("无")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("scroll-top")]),
          _vm._v(" "),
          _c("td", [_vm._v("滚动到顶部")]),
          _vm._v(" "),
          _c("td", [_vm._v("无")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("scroll-bottom")]),
          _vm._v(" "),
          _c("td", [_vm._v("滚动到底部")]),
          _vm._v(" "),
          _c("td", [_vm._v("无")])
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
          _c("th", [_vm._v("方法名称")]),
          _vm._v(" "),
          _c("th", [_vm._v("描述")]),
          _vm._v(" "),
          _c("th", [_vm._v("参数")]),
          _vm._v(" "),
          _c("th", [_vm._v("返回值")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("getScrollTop")]),
          _vm._v(" "),
          _c("td", [_vm._v("获得scrolltop的值")]),
          _vm._v(" "),
          _c("td", [_vm._v("无")]),
          _vm._v(" "),
          _c("td", [_vm._v("scrolltop的值")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("setScrollTop")]),
          _vm._v(" "),
          _c("td", [_vm._v("设置scrolltop的值")]),
          _vm._v(" "),
          _c("td", [_vm._v("scrolltop的值")]),
          _vm._v(" "),
          _c("td", [_vm._v("无")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("update")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("内容高度变化时调用此方法重新计算区域(简单结构会自动调用)")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("无")]),
          _vm._v(" "),
          _c("td", [_vm._v("无")])
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
    __webpack_require__(6)      .rerender("data-v-1eff99c4", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=6.bsvue.js.map
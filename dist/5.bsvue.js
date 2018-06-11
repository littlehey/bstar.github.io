webpackJsonp([5],{

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(646);

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "\n.trees[data-v-0d67bba6] {\n  display: flex;\n  justify-content: space-between;\n}\n.tree-box[data-v-0d67bba6] {\n  width: 500px;\n}\n", "", {"version":3,"sources":["D:/bsvue/docs/md/docs/md/tree.vue?d530e876"],"names":[],"mappings":";AAqNA;EACA,cAAA;EACA,+BAAA;CACA;AAEA;EACA,aAAA;CACA","file":"tree.md","sourcesContent":["<template><section><h1>描述</h1>\n<p>提供了树组件，可以在节点上增加图标</p>\n<h1>效果展示</h1>\n<template>\n  <div id=\"vtree-demo\">\n    <div class=\"trees\">\n      <div class=\"tree-box\">\n        <bs-tree v-model=\"checkedItem\" :treeData=\"treeData1\" :renderTitle=\"renderTitle\" :isDrag=\"isDrag\" @node-dblclick=\"dblclick\">\n      </bs-tree></div>\n      <div class=\"tree-box\">\n        <input type=\"text\" v-model=\"searchval\" placeholder=\"请输入...\" style=\"border:1px solid #999;\">\n        <bs-tree :treeData=\"treeData2\" ref=\"tree\" :multiple=\"true\" :renderBtn=\"renderBtn\">\n      </bs-tree></div>\n    </div>\n    <div @click=\"getChecked\">getChecked</div>\n    <div>checkedItem：{{checkedItem}}</div>\n    <div style=\"width:200px;height:100px;border:1px solid #ccc;\" @dragover.prevent.stop=\"\" @drop.prevent.stop=\"handleDrop\">{{dragItem}}</div>\n  </div>\n</template>\n\n\n<h1>代码示例</h1>\n<pre v-pre=\"\"><code v-pre=\"\" class=\"language-html\">\n\n</code></pre>\n<h1>props</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>treeData</td>\n<td>组件接受的树形数据</td>\n<td>Array</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>是否多选模式</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>isDrag</td>\n<td>是否可以拖拽</td>\n<td>Function</td>\n<td>(item) =&gt; false；(item当前节点对象)</td>\n</tr>\n<tr>\n<td>renderTitle</td>\n<td>自定义标题显示内容, 可以在标题前添加图标</td>\n<td>Function</td>\n<td>显示标题</td>\n</tr>\n<tr>\n<td>renderBtn</td>\n<td>自定义节点右侧按钮</td>\n<td>Function</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n<p><strong>注:</strong><br>\n<code v-pre=\"\">renderTitle</code>, <code v-pre=\"\">renderBtn</code>是通过render函数渲染, 其第二个参数有两个字段item(当前的节点)、index(当前节点的索引值)<br>\n节点的高亮需求可以通过<code v-pre=\"\">renderTitle</code>来处理<br>\n节点的右侧控制按钮图标可以通过<code v-pre=\"\">renderBtn</code>来处理<br></p>\n<h1>tree属性</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>当前选中的节点</td>\n</tr>\n</tbody>\n</table>\n<h1>treeData结构</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>节点id</td>\n<td>String</td>\n<td>N</td>\n<td>—</td>\n</tr>\n<tr>\n<td>title</td>\n<td>节点名称</td>\n<td>String</td>\n<td>N</td>\n<td>—</td>\n</tr>\n<tr>\n<td>open</td>\n<td>节点是否展开(可以通过addAttr方法添加)</td>\n<td>Boolean</td>\n<td>Y</td>\n<td>false</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>节点复选框是否选中(可以通过addAttr方法添加)</td>\n<td>Boolean</td>\n<td>Y</td>\n<td>false</td>\n</tr>\n<tr>\n<td>visible</td>\n<td>节点是否可见(可以通过addAttr方法添加)</td>\n<td>Boolean</td>\n<td>Y</td>\n<td>true</td>\n</tr>\n<tr>\n<td>selected</td>\n<td>节点是否被选中(可以通过addAttr方法添加)</td>\n<td>Boolean</td>\n<td>Y</td>\n<td>false</td>\n</tr>\n<tr>\n<td>pid</td>\n<td>节点父id(可以通过addPid方法添加)</td>\n<td>Boolean</td>\n<td>Y</td>\n<td>false</td>\n</tr>\n<tr>\n<td>children</td>\n<td>子节点</td>\n<td>Array[Object]</td>\n<td>Y</td>\n<td>—</td>\n</tr>\n</tbody>\n</table>\n<h1>events</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>事件名称</th>\n<th>描述</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>select-change</td>\n<td>选中的值发生改变</td>\n<td>args1:树形选中数据，完整上下级,args2:数组型选中数据，只有最底级的数据</td>\n</tr>\n<tr>\n<td>node-dblclick</td>\n<td>节点双击事件</td>\n<td>当前节点</td>\n</tr>\n</tbody>\n</table>\n<h1>methods</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>方法名称</th>\n<th>描述</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getNodes</td>\n<td>通过属性查找节点</td>\n<td>①查找条件②treeData(可选)</td>\n<td>符合条件的节点组</td>\n</tr>\n<tr>\n<td>searchNodes</td>\n<td>搜索,过滤treeData</td>\n<td>①过滤条件②treeData(可选)</td>\n<td>无</td>\n</tr>\n<tr>\n<td>addAttr</td>\n<td>给treeData添加属性</td>\n<td>①treeData②属性</td>\n<td>无</td>\n</tr>\n<tr>\n<td>addPid</td>\n<td>给treeData添加pid</td>\n<td>①treeData②根节点的pid(默认0)</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n</section></template>\n<style scoped>\n.trees {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tree-box {\n  width: 500px;\n}\n</style>\n<script>\nexport default {\n  name: 'Tree-demo',\n  data() {\n    return {\n      checkedItem: {},\n      dragItem: {},\n      treeData1: [\n        {\n          id: 1,\n          title: '一级-01',\n          type: 1,\n          children: [\n            {\n              id: 2,\n              title: '二级-01',\n              type: 1,\n              children: [\n                {\n                  id: 3,\n                  title: '三级-01',\n                  type: 1\n                }\n              ]\n            },\n            {\n              id: 4,\n              title: '二级-02',\n              type: 1\n            }\n          ]\n        }\n      ],\n      treeData2: [\n        {\n          id: 1,\n          title: '一级-01',\n          type: 1,\n          pid: 0,\n          children: [\n            {\n              id: 2,\n              title: '二级-01',\n              type: 1,\n              children: [\n                {\n                  id: 3,\n                  title: '三级-01',\n                  type: 1,\n                  children: [\n                    {\n                      id: 31,\n                      title: '四级-01',\n                      type: 1\n                    },\n                    {\n                      id: 32,\n                      title: '四级-02',\n                      type: 1\n                    }\n                  ]\n                }\n              ]\n            },\n            {\n              id: 4,\n              title: '二级-02',\n              type: 1\n            }\n          ]\n        }\n      ],\n      searchval: '',\n      renderTitle: (h, ctx) => {\n        return h('div', {\n          class: {'searched': ctx.item.searched}\n        }, '#' + ctx.item.title)\n      },\n      renderBtn: (h, {item, index}) => {\n        if (!item.children) {\n          return h('div', {\n            class: {'item-right': true}\n          }, [\n            h('span', {\n              on: {\n                click: () => { this.print(item) }\n              }\n            }, '删除'),\n            h('span', {\n              on: {\n                click: () => { this.alert(item) }\n              }\n            }, '打印')\n          ])\n        }\n      },\n      isDrag: (item) => {\n        return !item.children\n      }\n    }\n  },\n  computed: {\n  },\n  watch: {\n    searchval(val) {\n      this.$refs.tree.searchNodes(val,this.treeData2)\n      if (val === '') {\n        this.$refs.tree.addAttr (this.treeData2, {open: false})\n      }\n    }\n  },\n  methods: {\n    getChecked() {\n      const answer2 = this.$refs.tree.getChecked({hasHalf: false})\n      console.log('tree getChecked ans', answer2)\n    },\n    print(target) {\n      console.log('你点击的是：', target)\n    },\n    alert(target) {\n      alert('你点击的是：' + target.title)\n    },\n    dblclick(node) {\n      console.log(node)\n    },\n    handleDrop(e) {\n      this.dragItem = e.dataTransfer.getData('Text')\n    }\n  },\n  mounted() {\n    let attr = {\n      open: false,\n      checked: false,\n      searched: false,\n      visible: true\n    }\n    \n    this.$refs.tree.addAttr (this.treeData1, attr)\n    this.$refs.tree.addAttr (this.treeData2, attr)\n\n    this.$refs.tree.addPid (this.treeData2)\n  }\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_tree_md__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_tree_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_tree_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d67bba6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_tree_md__ = __webpack_require__(649);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(647)
}
var normalizeComponent = __webpack_require__(15)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d67bba6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_tree_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d67bba6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_tree_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs\\md\\tree.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(6)
  hotAPI.install(__webpack_require__(13), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d67bba6", Component.options)
  } else {
    hotAPI.reload("data-v-0d67bba6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(609);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("51207cda", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(609, function() {
     var newContent = __webpack_require__(609);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 648:
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
//
//
//
//
//
//
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
  name: 'Tree-demo',
  data: function data() {
    var _this = this;

    return {
      checkedItem: {},
      dragItem: {},
      treeData1: [{
        id: 1,
        title: '一级-01',
        type: 1,
        children: [{
          id: 2,
          title: '二级-01',
          type: 1,
          children: [{
            id: 3,
            title: '三级-01',
            type: 1
          }]
        }, {
          id: 4,
          title: '二级-02',
          type: 1
        }]
      }],
      treeData2: [{
        id: 1,
        title: '一级-01',
        type: 1,
        pid: 0,
        children: [{
          id: 2,
          title: '二级-01',
          type: 1,
          children: [{
            id: 3,
            title: '三级-01',
            type: 1,
            children: [{
              id: 31,
              title: '四级-01',
              type: 1
            }, {
              id: 32,
              title: '四级-02',
              type: 1
            }]
          }]
        }, {
          id: 4,
          title: '二级-02',
          type: 1
        }]
      }],
      searchval: '',
      renderTitle: function renderTitle(h, ctx) {
        return h('div', {
          class: { 'searched': ctx.item.searched }
        }, '#' + ctx.item.title);
      },
      renderBtn: function renderBtn(h, _ref) {
        var item = _ref.item,
            index = _ref.index;

        if (!item.children) {
          return h('div', {
            class: { 'item-right': true }
          }, [h('span', {
            on: {
              click: function click() {
                _this.print(item);
              }
            }
          }, '删除'), h('span', {
            on: {
              click: function click() {
                _this.alert(item);
              }
            }
          }, '打印')]);
        }
      },
      isDrag: function isDrag(item) {
        return !item.children;
      }
    };
  },

  computed: {},
  watch: {
    searchval: function searchval(val) {
      this.$refs.tree.searchNodes(val, this.treeData2);
      if (val === '') {
        this.$refs.tree.addAttr(this.treeData2, { open: false });
      }
    }
  },
  methods: {
    getChecked: function getChecked() {
      var answer2 = this.$refs.tree.getChecked({ hasHalf: false });
      console.log('tree getChecked ans', answer2);
    },
    print: function print(target) {
      console.log('你点击的是：', target);
    },
    alert: function (_alert) {
      function alert(_x) {
        return _alert.apply(this, arguments);
      }

      alert.toString = function () {
        return _alert.toString();
      };

      return alert;
    }(function (target) {
      alert('你点击的是：' + target.title);
    }),
    dblclick: function dblclick(node) {
      console.log(node);
    },
    handleDrop: function handleDrop(e) {
      this.dragItem = e.dataTransfer.getData('Text');
    }
  },
  mounted: function mounted() {
    var attr = {
      open: false,
      checked: false,
      searched: false,
      visible: true
    };

    this.$refs.tree.addAttr(this.treeData1, attr);
    this.$refs.tree.addAttr(this.treeData2, attr);

    this.$refs.tree.addPid(this.treeData2);
  }
};

/***/ }),

/***/ 649:
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
      _c("p", [_vm._v("提供了树组件，可以在节点上增加图标")]),
      _vm._v(" "),
      _c("h1", [_vm._v("效果展示")]),
      _vm._v(" "),
      [
        _c("div", { attrs: { id: "vtree-demo" } }, [
          _c("div", { staticClass: "trees" }, [
            _c(
              "div",
              { staticClass: "tree-box" },
              [
                _c("bs-tree", {
                  attrs: {
                    treeData: _vm.treeData1,
                    renderTitle: _vm.renderTitle,
                    isDrag: _vm.isDrag
                  },
                  on: { "node-dblclick": _vm.dblclick },
                  model: {
                    value: _vm.checkedItem,
                    callback: function($$v) {
                      _vm.checkedItem = $$v
                    },
                    expression: "checkedItem"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tree-box" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchval,
                      expression: "searchval"
                    }
                  ],
                  staticStyle: { border: "1px solid #999" },
                  attrs: { type: "text", placeholder: "请输入..." },
                  domProps: { value: _vm.searchval },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchval = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("bs-tree", {
                  ref: "tree",
                  attrs: {
                    treeData: _vm.treeData2,
                    multiple: true,
                    renderBtn: _vm.renderBtn
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { on: { click: _vm.getChecked } }, [_vm._v("getChecked")]),
          _vm._v(" "),
          _c("div", [_vm._v("checkedItem：" + _vm._s(_vm.checkedItem))]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticStyle: {
                width: "200px",
                height: "100px",
                border: "1px solid #ccc"
              },
              on: {
                dragover: function($event) {
                  $event.preventDefault()
                  $event.stopPropagation()
                },
                drop: function($event) {
                  $event.preventDefault()
                  $event.stopPropagation()
                  _vm.handleDrop($event)
                }
              }
            },
            [_vm._v(_vm._s(_vm.dragItem))]
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
      _vm._m(2),
      _vm._v(" "),
      _c("h1", [_vm._v("tree属性")]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("h1", [_vm._v("treeData结构")]),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("h1", [_vm._v("events")]),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _c("h1", [_vm._v("methods")]),
      _vm._v(" "),
      _vm._m(6)
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
          _c("td", [_vm._v("treeData")]),
          _vm._v(" "),
          _c("td", [_vm._v("组件接受的树形数据")]),
          _vm._v(" "),
          _c("td", [_vm._v("Array")]),
          _vm._v(" "),
          _c("td", [_vm._v("[]")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("multiple")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否多选模式")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("isDrag")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否可以拖拽")]),
          _vm._v(" "),
          _c("td", [_vm._v("Function")]),
          _vm._v(" "),
          _c("td", [_vm._v("(item) => false；(item当前节点对象)")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("renderTitle")]),
          _vm._v(" "),
          _c("td", [_vm._v("自定义标题显示内容, 可以在标题前添加图标")]),
          _vm._v(" "),
          _c("td", [_vm._v("Function")]),
          _vm._v(" "),
          _c("td", [_vm._v("显示标题")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("renderBtn")]),
          _vm._v(" "),
          _c("td", [_vm._v("自定义节点右侧按钮")]),
          _vm._v(" "),
          _c("td", [_vm._v("Function")]),
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
    return _c("p", [
      _c("strong", [_vm._v("注:")]),
      _c("br"),
      _vm._v(" "),
      _c("code", { pre: true }, [_vm._v("renderTitle")]),
      _vm._v(", "),
      _c("code", { pre: true }, [_vm._v("renderBtn")]),
      _vm._v(
        "是通过render函数渲染, 其第二个参数有两个字段item(当前的节点)、index(当前节点的索引值)"
      ),
      _c("br"),
      _vm._v("\n节点的高亮需求可以通过"),
      _c("code", { pre: true }, [_vm._v("renderTitle")]),
      _vm._v("来处理"),
      _c("br"),
      _vm._v("\n节点的右侧控制按钮图标可以通过"),
      _c("code", { pre: true }, [_vm._v("renderBtn")]),
      _vm._v("来处理"),
      _c("br")
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
          _c("th", [_vm._v("描述")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("v-model")]),
          _vm._v(" "),
          _c("td", [_vm._v("当前选中的节点")])
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
          _c("th", [_vm._v("参数")]),
          _vm._v(" "),
          _c("th", [_vm._v("说明")]),
          _vm._v(" "),
          _c("th", [_vm._v("类型")]),
          _vm._v(" "),
          _c("th", [_vm._v("可选值")]),
          _vm._v(" "),
          _c("th", [_vm._v("默认值")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("id")]),
          _vm._v(" "),
          _c("td", [_vm._v("节点id")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("N")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("title")]),
          _vm._v(" "),
          _c("td", [_vm._v("节点名称")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("N")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("open")]),
          _vm._v(" "),
          _c("td", [_vm._v("节点是否展开(可以通过addAttr方法添加)")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("Y")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("checked")]),
          _vm._v(" "),
          _c("td", [_vm._v("节点复选框是否选中(可以通过addAttr方法添加)")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("Y")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("visible")]),
          _vm._v(" "),
          _c("td", [_vm._v("节点是否可见(可以通过addAttr方法添加)")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("Y")]),
          _vm._v(" "),
          _c("td", [_vm._v("true")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("selected")]),
          _vm._v(" "),
          _c("td", [_vm._v("节点是否被选中(可以通过addAttr方法添加)")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("Y")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("pid")]),
          _vm._v(" "),
          _c("td", [_vm._v("节点父id(可以通过addPid方法添加)")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("Y")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("children")]),
          _vm._v(" "),
          _c("td", [_vm._v("子节点")]),
          _vm._v(" "),
          _c("td", [_vm._v("Array[Object]")]),
          _vm._v(" "),
          _c("td", [_vm._v("Y")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
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
          _c("td", [_vm._v("select-change")]),
          _vm._v(" "),
          _c("td", [_vm._v("选中的值发生改变")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "args1:树形选中数据，完整上下级,args2:数组型选中数据，只有最底级的数据"
            )
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("node-dblclick")]),
          _vm._v(" "),
          _c("td", [_vm._v("节点双击事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("当前节点")])
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
          _c("td", [_vm._v("getNodes")]),
          _vm._v(" "),
          _c("td", [_vm._v("通过属性查找节点")]),
          _vm._v(" "),
          _c("td", [_vm._v("①查找条件②treeData(可选)")]),
          _vm._v(" "),
          _c("td", [_vm._v("符合条件的节点组")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("searchNodes")]),
          _vm._v(" "),
          _c("td", [_vm._v("搜索,过滤treeData")]),
          _vm._v(" "),
          _c("td", [_vm._v("①过滤条件②treeData(可选)")]),
          _vm._v(" "),
          _c("td", [_vm._v("无")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("addAttr")]),
          _vm._v(" "),
          _c("td", [_vm._v("给treeData添加属性")]),
          _vm._v(" "),
          _c("td", [_vm._v("①treeData②属性")]),
          _vm._v(" "),
          _c("td", [_vm._v("无")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("addPid")]),
          _vm._v(" "),
          _c("td", [_vm._v("给treeData添加pid")]),
          _vm._v(" "),
          _c("td", [_vm._v("①treeData②根节点的pid(默认0)")]),
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
    __webpack_require__(6)      .rerender("data-v-0d67bba6", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=5.bsvue.js.map
webpackJsonp([10],{

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(644);

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d1c57ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_videoDoc_md__ = __webpack_require__(645);
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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d1c57ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_videoDoc_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs\\md\\videoDoc.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(6)
  hotAPI.install(__webpack_require__(13), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d1c57ae", Component.options)
  } else {
    hotAPI.reload("data-v-7d1c57ae", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 645:
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
      _c("h1", [_vm._v("使用")]),
      _vm._v(" "),
      _c("p", [_vm._v("这是一个对象不是组件")]),
      _vm._v(" "),
      _c("pre", { pre: true }, [
        _c("code", { attrs: { "v-pre": "", class: "language-js" } }, [
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("import")]),
          _vm._v(" { playback, preview, local } "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("from")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'bsvue'")]),
          _vm._v("\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_c("strong", [_vm._v("所有方法的第一个参数都是插件对象")])]),
      _vm._v(" "),
      _c("h1", [_vm._v("通用(指可以通过上面的任意对象调用)")]),
      _vm._v(" "),
      _c("h3", [_vm._v("fullScreen")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.fullScreen(plugin) 全屏")]),
      _vm._v(" "),
      _c("h3", [_vm._v("boost")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.boost(plugin) 鸟瞰")]),
      _vm._v(" "),
      _c("h3", [_vm._v("openSound")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.openSound(plugin) 打开伴音")]),
      _vm._v(" "),
      _c("h3", [_vm._v("closeSound")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.closeSound(plugin) 关闭伴音")]),
      _vm._v(" "),
      _c("h3", [_vm._v("setVolume")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.setVolume(plugin, volume) 设置音量")]),
      _vm._v(" "),
      _c("h3", [_vm._v("getVolume")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.getVolume(plugin) 获取音量")]),
      _vm._v(" "),
      _c("h3", [_vm._v("getFile")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.getFile(plugin) 打开文件")]),
      _vm._v(" "),
      _c("h3", [_vm._v("saveFile")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.saveFile(plugin, [ext], [extStr]) 保存文件")]),
      _vm._v(" "),
      _c("p", [_vm._v("参数2,3 分别为文件后缀名，后缀名筛选器")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("例如保存bsr文件 'bsr', 'BSR Files ("),
        _c("em", [_vm._v(".bsr)|")]),
        _vm._v(".bsr|AVI Files ("),
        _c("em", [_vm._v(".avi)|")]),
        _vm._v(".avi|All Files ("),
        _c("em", [_vm._v(".")]),
        _vm._v(")|"),
        _c("em", [_vm._v(".")]),
        _vm._v("||'")
      ]),
      _vm._v(" "),
      _c("h3", [_vm._v("getPath")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.getPath(plugin) 打开目录")]),
      _vm._v(" "),
      _c("h3", [_vm._v("getCapture")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("playback.getCapture(plugin, [quality]) 获取base64的截图")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("参数2为截图质量")]),
      _vm._v(" "),
      _c("h3", [_vm._v("saveCapture")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("playback.saveCapture(plugin, path) 保存截图到path位置")
      ]),
      _vm._v(" "),
      _c("h3", [_vm._v("setScaleMode")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.setScaleMode(plugin, mode) 设置画面比例")]),
      _vm._v(" "),
      _c("p", [_vm._v("mode值为 1原始比例 2自适应 3 4:3 4 16:9")]),
      _vm._v(" "),
      _c("h3", [_vm._v("setClickEvent")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.setClickEvent(plugin, event) 设置点击事件")]),
      _vm._v(" "),
      _c("p", [_vm._v("event的参数为")]),
      _vm._v(" "),
      _c("p", [_vm._v("index:窗口的索引")]),
      _vm._v(" "),
      _c("p", [_vm._v("status: 1为单击 2为双击")]),
      _vm._v(" "),
      _c("h3", [_vm._v("setKeyEvent")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.setKeyEvent(plugin, event) 设置键盘事件")]),
      _vm._v(" "),
      _c("p", [_vm._v("event的参数为")]),
      _vm._v(" "),
      _c("p", [_vm._v("index:窗口的索引")]),
      _vm._v(" "),
      _c("p", [_vm._v("type: 无用参数")]),
      _vm._v(" "),
      _c("p", [_vm._v("code: 按键的keycode")]),
      _vm._v(" "),
      _c("h1", [_vm._v("playback对象")]),
      _vm._v(" "),
      _c("h3", [_vm._v("open")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "playback.open(plugin, {\ndsIp,\nstartTime,\nendTime,\nstrmInfo\n})"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("打开回放")]),
      _vm._v(" "),
      _c("h3", [_vm._v("stop")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.stop(plugin) 关闭回放")]),
      _vm._v(" "),
      _c("h3", [_vm._v("pause")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.pause(plugin) 暂停")]),
      _vm._v(" "),
      _c("h3", [_vm._v("resume")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.resume(plugin) 恢复播放")]),
      _vm._v(" "),
      _c("h3", [_vm._v("getRecordTime")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("playback.getRecordTime(plguin) 获得播放的录像时间信息")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("返回对象: {start: time, end: time} 单位毫秒")]),
      _vm._v(" "),
      _c("h3", [_vm._v("getCurTime")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.getCurTime(plugin) 获得当前播放时间 毫秒")]),
      _vm._v(" "),
      _c("h3", [_vm._v("setPlayerRate")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.setPlayerRate(plugin, rate) 设置播放速率")]),
      _vm._v(" "),
      _c("p", [_vm._v("rate参数 如果是8倍传8  如果是1/8就传1/8 数值型")]),
      _vm._v(" "),
      _c("h3", [_vm._v("setPlayerMode")]),
      _vm._v(" "),
      _c("p", [_vm._v("playback.setPlayerMode(plugin, mode) 设置播放模式")]),
      _vm._v(" "),
      _c("p", [_vm._v("mode的值为 0正常模式 1逐帧模式 2 I帧模式")]),
      _vm._v(" "),
      _c("h3", [_vm._v("download")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "playback.download(plugin, {\ndsIp,\nstartTime,\nendTime,\nstrmInfo,\npath\n}, callback) 下载文件到path下"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("下载完成执行callback")]),
      _vm._v(" "),
      _c("p", [_vm._v("返回值为该下载的句柄")]),
      _vm._v(" "),
      _c("h3", [_vm._v("closeDownload")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "playback.closeDownload(plugin, dumpHandler) 关闭下载， 参数2为下载句柄"
        )
      ]),
      _vm._v(" "),
      _c("h3", [_vm._v("isFinishDownload")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "playback.isFinishDownload(plugin, dumpHandler) 判断是否下载完成"
        )
      ]),
      _vm._v(" "),
      _c("h1", [_vm._v("preview对象")]),
      _vm._v(" "),
      _c("h3", [_vm._v("open")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "preview.open(plugin, {\nip,\nport,\nchannel,\nvendor,\nstreamType,\ndsIp,\ndsPort\n}) 打开现场，其中dsIp和dsPort是开流请求返回的值"
        )
      ]),
      _vm._v(" "),
      _c("h3", [_vm._v("stop")]),
      _vm._v(" "),
      _c("p", [_vm._v("preview.stop(plugin) 关闭现场")]),
      _vm._v(" "),
      _c("h3", [_vm._v("startRecording")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("preview.startRecording(plugin, { path, type }) 开始录像")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("path为完整路径 包括后缀名")]),
      _vm._v(" "),
      _c("p", [_vm._v("type的值为 4:bsr文件  6:avi文件")]),
      _vm._v(" "),
      _c("h3", [_vm._v("stopRecording")]),
      _vm._v(" "),
      _c("p", [_vm._v("preview.stopRecording(plugin) 停止录像")]),
      _vm._v(" "),
      _c("h3", [_vm._v("isRecording")]),
      _vm._v(" "),
      _c("p", [_vm._v("preview.isRecording(plugin) 是否正在录像")]),
      _vm._v(" "),
      _c("h3", [_vm._v("openSpeech")]),
      _vm._v(" "),
      _c("p", [_vm._v("preview.openSpeech(plugin, param) 打开对讲流")]),
      _vm._v(" "),
      _c("p", [_vm._v("param参数和打开现场的参数一样")]),
      _vm._v(" "),
      _c("h3", [_vm._v("startSpeech")]),
      _vm._v(" "),
      _c("p", [_vm._v("preview.startSpeech(plugin) 开始对讲  要先开对讲流")]),
      _vm._v(" "),
      _c("h3", [_vm._v("stopSpeech")]),
      _vm._v(" "),
      _c("p", [_vm._v("preview.stopSpeech(plugin) 结束对讲")]),
      _vm._v(" "),
      _c("h3", [_vm._v("closeSpeech")]),
      _vm._v(" "),
      _c("p", [_vm._v("preview.closeSpeech(plugin) 关闭对讲流")]),
      _vm._v(" "),
      _c("h1", [_vm._v("local对象")]),
      _vm._v(" "),
      _c("h3", [_vm._v("open")]),
      _vm._v(" "),
      _c("p", [_vm._v("local.open(plugin, path) 打开文件播放")]),
      _vm._v(" "),
      _c("h3", [_vm._v("stop")]),
      _vm._v(" "),
      _c("p", [_vm._v("local.stop(plugin) 关闭文件播放")]),
      _vm._v(" "),
      _c("h3", [_vm._v("pause")]),
      _vm._v(" "),
      _c("p", [_vm._v("local.pause(plugin) 暂停文件播放")]),
      _vm._v(" "),
      _c("h3", [_vm._v("resume")]),
      _vm._v(" "),
      _c("p", [_vm._v("local.resume(plugin) 恢复文件播放")]),
      _vm._v(" "),
      _c("h3", [_vm._v("getFileTime")]),
      _vm._v(" "),
      _c("p", [_vm._v("local.getFileTime(plugin) 获取播放文件时间")]),
      _vm._v(" "),
      _c("p", [_vm._v("返回对象: {start: time, end: time} 单位毫秒")]),
      _vm._v(" "),
      _c("h3", [_vm._v("getCurTime")]),
      _vm._v(" "),
      _c("p", [_vm._v("local.getCurTime(plugin) 获取播放的当前时间 毫秒")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(6)      .rerender("data-v-7d1c57ae", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=10.bsvue.js.map
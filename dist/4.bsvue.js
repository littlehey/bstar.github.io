webpackJsonp([4],{

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(640);

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "\nobject {\n  width: 400px;\n  height: 300px\n}\n", "", {"version":3,"sources":["D:/bsvue/docs/md/docs/md/videoDemo.vue?6507ca0d"],"names":[],"mappings":";AAqDA;EACA,aAAA;EACA,aAAA;CACA","file":"videoDemo.md","sourcesContent":["<template><section><template>\n<div>\n  <object type=\"application/x-webplayercontrol\"></object><v-btn @click=\"login\">login</v-btn>\n  <div style=\"height: 25px;overflow:auto\">state result: {{state}}</div>\n  <div class=\"headline\">通用</div>\n  <v-btn @click=\"fullscreen\">fullscreen</v-btn>\n  <v-btn @click=\"boost\">boost</v-btn>\n  <v-btn @click=\"openSound\">openSound</v-btn>\n  <v-btn @click=\"closeSound\">closeSound</v-btn>\n  <v-btn @click=\"setVolume\">setVolume 50</v-btn>\n  <v-btn @click=\"getVolume\">getVolume</v-btn>\n  <v-btn @click=\"getFile\">getFile</v-btn>\n  <v-btn @click=\"saveFile\">saveFile</v-btn>\n  <v-btn @click=\"getPath\">getPath</v-btn>\n  <v-btn @click=\"getCapture\">getCapture</v-btn>\n  <v-btn @click=\"saveCapture\">saveCapture</v-btn>\n  <v-btn @click=\"setScale\">setScale 16:9</v-btn><br>\n  <v-btn @click=\"setClickEvent\">setClickEvent</v-btn>\n  <v-btn @click=\"setKeyEvent\">setKeyEvent</v-btn>\n  <div class=\"headline\">回放</div>\n  <v-btn @click=\"openPlayback\">openplayback</v-btn>\n  <v-btn @click=\"closePlayback\">closeplayback</v-btn>\n  <v-btn @click=\"pause\">pause</v-btn>\n  <v-btn @click=\"resume\">resume</v-btn>\n  <v-btn @click=\"getRecordTime\">getRecordTime</v-btn>\n  <v-btn @click=\"getCurTime\">getCurTime</v-btn>\n  <v-btn @click=\"setPlayerRate\">setPlayerRate 1/8</v-btn>\n  <v-btn @click=\"setPlayerMode\">setPlayerMode I帧</v-btn>\n  <v-btn @click=\"download\">download</v-btn>\n  <v-btn @click=\"closeDownload\">closeDownload</v-btn><br>\n  <v-btn @click=\"isFinishDownload\">isFinishDownload</v-btn>\n  <div class=\"headline\">现场</div>\n  <v-btn @click=\"openPreview\">openPreview</v-btn>\n  <v-btn @click=\"stopPreview\">stopPreview</v-btn>\n  <v-btn @click=\"startRecording\">startRecording</v-btn>\n  <v-btn @click=\"stopRecording\">stopRecording</v-btn>\n  <v-btn @click=\"isRecording\">isRecording</v-btn>\n  <v-btn @click=\"openSpeech\">openSpeech</v-btn>\n  <v-btn @click=\"startSpeech\">startSpeech</v-btn>\n  <v-btn @click=\"stopSpeech\">stopSpeech</v-btn>\n  <v-btn @click=\"closeSpeech\">closeSpeech</v-btn>\n  <div class=\"headline\">本地</div>\n  <v-btn @click=\"openLocal\">openLocal</v-btn>\n  <v-btn @click=\"closeLocal\">closeLocal</v-btn>\n  <v-btn @click=\"pauseLocal\">pauseLocal</v-btn>\n  <v-btn @click=\"resumeLocal\">resumeLocal</v-btn>\n  <v-btn @click=\"getFileTime\">getFileTime</v-btn>\n  <v-btn @click=\"getFileCurTime\">getFileCurTime</v-btn>\n</div>\n</template>\n\n</section></template>\n<style>\nobject {\n  width: 400px;\n  height: 300px\n}\n</style>\n<script>\nimport { playback, preview, local } from '../../src/index'\nconst record = {\n  dsIp: '192.168.14.88',\n  startTime: 1521790669,\n  endTime: 1521791148,\n  strmInfo: {\n    ch: 1,\n    cStrName: '',\n    devType: 0,\n    ip: 3232239211,\n    mac: '',\n    mType: 1,\n    port: 3721,\n    pType: 0,\n    resolution: 0,\n    sType: 1\n  }\n}\nexport default {\n  data() {\n    return {\n      state: null\n    }\n  },\n  methods: {\n    openPlayback() {\n      this.state = playback.open(this.plugin, record)\n    },\n    closePlayback() {\n      this.state = playback.stop(this.plugin)\n    },\n    fullscreen() {\n      this.state = playback.fullScreen(this.plugin)\n    },\n    boost() {\n      this.state = playback.boost(this.plugin)\n    },\n    openSound() {\n      this.state = playback.openSound(this.plugin)\n    },\n    closeSound() {\n      this.state = playback.closeSound(this.plugin)\n    },\n    getVolume() {\n      this.state = playback.getVolume(this.plugin)\n    },\n    setVolume() {\n      this.state = playback.setVolume(this.plugin, 50)\n    },\n    getFile() {\n      this.state = playback.getFile(this.plugin)\n    },\n    saveFile() {\n      this.state = playback.saveFile(this.plugin, 'bsr', 'BSR Files (*.bsr)|*.bsr|AVI Files (*.avi)|*.avi|All Files (*.*)|*.*||')\n    },\n    getPath() {\n      this.state = playback.getPath(this.plugin)\n    },\n    getCapture() {\n      this.state = playback.getCapture(this.plugin, 10)\n    },\n    saveCapture() {\n      const path = playback.saveFile(this.plugin, 'jpg', 'JPG Files (*.jpg)')\n      this.state = playback.saveCapture(this.plugin, path)\n    },\n    setScale() {\n      this.state = playback.setScaleMode(this.plugin, 4)\n    },\n    pause() {\n      this.state = playback.pause(this.plugin)\n    },\n    resume() {\n      this.state = playback.resume(this.plugin)\n    },\n    getCurTime() {\n      this.state = playback.getCurTime(this.plugin)\n    },\n    getRecordTime() {\n      this.state = playback.getRecordTime(this.plugin)\n    },\n    setPlayerRate() {\n      this.state = playback.setPlayerRate(this.plugin, 1/8)\n    },\n    setPlayerMode() {\n      this.state = playback.setPlayerMode(this.plugin, 1)\n    },\n    isFinishDownload() {\n      this.state = playback.isFinishDownload(this.plugin, this.dum)\n    },\n    closeDownload() {\n      this.state = playback.closeDownload(this.plugin, this.dum)\n    },\n    download() {\n      const path = playback.saveFile(this.plugin, 'bsr', 'BSR Files (*.bsr)|*.bsr|AVI Files (*.avi)|*.avi|All Files (*.*)|*.*||')\n      this.state = this.dum = playback.download(this.plugin, {\n        ...record,\n        path\n      }, () => {\n        window.alert('download finished')\n      })\n    },\n    async login() {\n      const suc = await this.$http.post('api/auth/login', {\n        name: 'admin',\n        pwd: '21232f297a57a5a743894a0e4a801fc3'\n      })\n      this.state = this.token = suc.data.tocken\n    },\n    async openPreview() {\n      const ip = '192.168.14.199'\n      const port = 3721\n      const channel = 1\n      const vendor = 'bstar'\n      const streamType = 'main'\n      const suc = await this.$http.post(`api/ctl/video?type=video&channelid=1`, {\n        devIp: ip,\n        devPort: port,\n        channel,\n        streamType\n      }, {\n        headers: {\n          Authorization: 'Bearer ' + this.token\n        }\n      })\n      this.temp = {\n        streamType,\n        ip,\n        port,\n        channel,\n        vendor,\n        tsIp: suc.data.tsIp,\n        tsPort: suc.data.tsPort\n      }\n      this.state = preview.open(this.plugin, this.temp)\n    },\n    stopPreview() {\n      this.state = preview.stop(this.plugin)\n    },\n    startRecording() {\n      const path = preview.saveFile(this.plugin)\n      if (path) {\n        this.state = preview.startRecording(this.plugin, {\n          path,\n          type: 4\n        })\n      }\n    },\n    stopRecording() {\n      this.state = preview.stopRecording(this.plugin)\n    },\n    isRecording() {\n      this.state = preview.isRecording(this.plugin)\n    },\n    openSpeech() {\n      this.state = preview.openSpeech(this.plugin, this.temp)\n    },\n    startSpeech() {\n      this.state = preview.startSpeech(this.plugin)\n    },\n    stopSpeech() {\n      this.state = preview.stopSpeech(this.plugin)\n    },\n    closeSpeech() {\n      this.state = preview.closeSpeech(this.plugin)\n    },\n    setClickEvent() {\n      this.state = preview.setClickEvent(this.plugin, (index, status) => {\n        this.state = status\n      })\n    },\n    setKeyEvent() {\n      this.state = preview.setKeyEvent(this.plugin, (index, type, code) => {\n        this.state = `code${code}`\n      })\n    },\n    openLocal() {\n      const path = local.getFile(this.plugin)\n      if (path) {\n        this.state = local.open(this.plugin, path)\n      }\n    },\n    closeLocal() {\n      this.state = local.stop(this.plugin)\n    },\n    pauseLocal() {\n      this.state = local.pause(this.plugin)\n    },\n    resumeLocal() {\n      this.state = local.resume(this.plugin)\n    },\n    getFileTime() {\n      this.state = local.getFileTime(this.plugin)\n    },\n    getFileCurTime() {\n      this.state = local.getCurTime(this.plugin)\n    }\n  },\n  mounted() {\n    this.plugin = this.$el.querySelector('object')\n  },\n  beforeDestroyed() {\n    this.plugin = null\n  }\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_videoDemo_md__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_videoDemo_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_videoDemo_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1607b401_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_videoDemo_md__ = __webpack_require__(643);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(641)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_videoDemo_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1607b401_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_videoDemo_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs\\md\\videoDemo.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(6)
  hotAPI.install(__webpack_require__(13), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1607b401", Component.options)
  } else {
    hotAPI.reload("data-v-1607b401", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(608);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("79ba26e9", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(608, function() {
     var newContent = __webpack_require__(608);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _index = __webpack_require__(282);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var record = {
  dsIp: '192.168.14.88',
  startTime: 1521790669,
  endTime: 1521791148,
  strmInfo: {
    ch: 1,
    cStrName: '',
    devType: 0,
    ip: 3232239211,
    mac: '',
    mType: 1,
    port: 3721,
    pType: 0,
    resolution: 0,
    sType: 1
  }
};
exports.default = {
  data: function data() {
    return {
      state: null
    };
  },

  methods: {
    openPlayback: function openPlayback() {
      this.state = _index.playback.open(this.plugin, record);
    },
    closePlayback: function closePlayback() {
      this.state = _index.playback.stop(this.plugin);
    },
    fullscreen: function fullscreen() {
      this.state = _index.playback.fullScreen(this.plugin);
    },
    boost: function boost() {
      this.state = _index.playback.boost(this.plugin);
    },
    openSound: function openSound() {
      this.state = _index.playback.openSound(this.plugin);
    },
    closeSound: function closeSound() {
      this.state = _index.playback.closeSound(this.plugin);
    },
    getVolume: function getVolume() {
      this.state = _index.playback.getVolume(this.plugin);
    },
    setVolume: function setVolume() {
      this.state = _index.playback.setVolume(this.plugin, 50);
    },
    getFile: function getFile() {
      this.state = _index.playback.getFile(this.plugin);
    },
    saveFile: function saveFile() {
      this.state = _index.playback.saveFile(this.plugin, 'bsr', 'BSR Files (*.bsr)|*.bsr|AVI Files (*.avi)|*.avi|All Files (*.*)|*.*||');
    },
    getPath: function getPath() {
      this.state = _index.playback.getPath(this.plugin);
    },
    getCapture: function getCapture() {
      this.state = _index.playback.getCapture(this.plugin, 10);
    },
    saveCapture: function saveCapture() {
      var path = _index.playback.saveFile(this.plugin, 'jpg', 'JPG Files (*.jpg)');
      this.state = _index.playback.saveCapture(this.plugin, path);
    },
    setScale: function setScale() {
      this.state = _index.playback.setScaleMode(this.plugin, 4);
    },
    pause: function pause() {
      this.state = _index.playback.pause(this.plugin);
    },
    resume: function resume() {
      this.state = _index.playback.resume(this.plugin);
    },
    getCurTime: function getCurTime() {
      this.state = _index.playback.getCurTime(this.plugin);
    },
    getRecordTime: function getRecordTime() {
      this.state = _index.playback.getRecordTime(this.plugin);
    },
    setPlayerRate: function setPlayerRate() {
      this.state = _index.playback.setPlayerRate(this.plugin, 1 / 8);
    },
    setPlayerMode: function setPlayerMode() {
      this.state = _index.playback.setPlayerMode(this.plugin, 1);
    },
    isFinishDownload: function isFinishDownload() {
      this.state = _index.playback.isFinishDownload(this.plugin, this.dum);
    },
    closeDownload: function closeDownload() {
      this.state = _index.playback.closeDownload(this.plugin, this.dum);
    },
    download: function download() {
      var path = _index.playback.saveFile(this.plugin, 'bsr', 'BSR Files (*.bsr)|*.bsr|AVI Files (*.avi)|*.avi|All Files (*.*)|*.*||');
      this.state = this.dum = _index.playback.download(this.plugin, _extends({}, record, {
        path: path
      }), function () {
        window.alert('download finished');
      });
    },
    login: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var suc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$http.post('api/auth/login', {
                  name: 'admin',
                  pwd: '21232f297a57a5a743894a0e4a801fc3'
                });

              case 2:
                suc = _context.sent;

                this.state = this.token = suc.data.tocken;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _ref.apply(this, arguments);
      }

      return login;
    }(),
    openPreview: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var ip, port, channel, vendor, streamType, suc;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ip = '192.168.14.199';
                port = 3721;
                channel = 1;
                vendor = 'bstar';
                streamType = 'main';
                _context2.next = 7;
                return this.$http.post('api/ctl/video?type=video&channelid=1', {
                  devIp: ip,
                  devPort: port,
                  channel: channel,
                  streamType: streamType
                }, {
                  headers: {
                    Authorization: 'Bearer ' + this.token
                  }
                });

              case 7:
                suc = _context2.sent;

                this.temp = {
                  streamType: streamType,
                  ip: ip,
                  port: port,
                  channel: channel,
                  vendor: vendor,
                  tsIp: suc.data.tsIp,
                  tsPort: suc.data.tsPort
                };
                this.state = _index.preview.open(this.plugin, this.temp);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function openPreview() {
        return _ref2.apply(this, arguments);
      }

      return openPreview;
    }(),
    stopPreview: function stopPreview() {
      this.state = _index.preview.stop(this.plugin);
    },
    startRecording: function startRecording() {
      var path = _index.preview.saveFile(this.plugin);
      if (path) {
        this.state = _index.preview.startRecording(this.plugin, {
          path: path,
          type: 4
        });
      }
    },
    stopRecording: function stopRecording() {
      this.state = _index.preview.stopRecording(this.plugin);
    },
    isRecording: function isRecording() {
      this.state = _index.preview.isRecording(this.plugin);
    },
    openSpeech: function openSpeech() {
      this.state = _index.preview.openSpeech(this.plugin, this.temp);
    },
    startSpeech: function startSpeech() {
      this.state = _index.preview.startSpeech(this.plugin);
    },
    stopSpeech: function stopSpeech() {
      this.state = _index.preview.stopSpeech(this.plugin);
    },
    closeSpeech: function closeSpeech() {
      this.state = _index.preview.closeSpeech(this.plugin);
    },
    setClickEvent: function setClickEvent() {
      var _this = this;

      this.state = _index.preview.setClickEvent(this.plugin, function (index, status) {
        _this.state = status;
      });
    },
    setKeyEvent: function setKeyEvent() {
      var _this2 = this;

      this.state = _index.preview.setKeyEvent(this.plugin, function (index, type, code) {
        _this2.state = 'code' + code;
      });
    },
    openLocal: function openLocal() {
      var path = _index.local.getFile(this.plugin);
      if (path) {
        this.state = _index.local.open(this.plugin, path);
      }
    },
    closeLocal: function closeLocal() {
      this.state = _index.local.stop(this.plugin);
    },
    pauseLocal: function pauseLocal() {
      this.state = _index.local.pause(this.plugin);
    },
    resumeLocal: function resumeLocal() {
      this.state = _index.local.resume(this.plugin);
    },
    getFileTime: function getFileTime() {
      this.state = _index.local.getFileTime(this.plugin);
    },
    getFileCurTime: function getFileCurTime() {
      this.state = _index.local.getCurTime(this.plugin);
    }
  },
  mounted: function mounted() {
    this.plugin = this.$el.querySelector('object');
  },
  beforeDestroyed: function beforeDestroyed() {
    this.plugin = null;
  }
};

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      [
        _c(
          "div",
          [
            _c("object", { attrs: { type: "application/x-webplayercontrol" } }),
            _c("v-btn", { on: { click: _vm.login } }, [_vm._v("login")]),
            _vm._v(" "),
            _c("div", { staticStyle: { height: "25px", overflow: "auto" } }, [
              _vm._v("state result: " + _vm._s(_vm.state))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "headline" }, [_vm._v("通用")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.fullscreen } }, [
              _vm._v("fullscreen")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.boost } }, [_vm._v("boost")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.openSound } }, [
              _vm._v("openSound")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.closeSound } }, [
              _vm._v("closeSound")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.setVolume } }, [
              _vm._v("setVolume 50")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.getVolume } }, [
              _vm._v("getVolume")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.getFile } }, [_vm._v("getFile")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.saveFile } }, [_vm._v("saveFile")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.getPath } }, [_vm._v("getPath")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.getCapture } }, [
              _vm._v("getCapture")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.saveCapture } }, [
              _vm._v("saveCapture")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.setScale } }, [
              _vm._v("setScale 16:9")
            ]),
            _c("br"),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.setClickEvent } }, [
              _vm._v("setClickEvent")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.setKeyEvent } }, [
              _vm._v("setKeyEvent")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "headline" }, [_vm._v("回放")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.openPlayback } }, [
              _vm._v("openplayback")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.closePlayback } }, [
              _vm._v("closeplayback")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.pause } }, [_vm._v("pause")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.resume } }, [_vm._v("resume")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.getRecordTime } }, [
              _vm._v("getRecordTime")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.getCurTime } }, [
              _vm._v("getCurTime")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.setPlayerRate } }, [
              _vm._v("setPlayerRate 1/8")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.setPlayerMode } }, [
              _vm._v("setPlayerMode I帧")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.download } }, [_vm._v("download")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.closeDownload } }, [
              _vm._v("closeDownload")
            ]),
            _c("br"),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.isFinishDownload } }, [
              _vm._v("isFinishDownload")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "headline" }, [_vm._v("现场")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.openPreview } }, [
              _vm._v("openPreview")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.stopPreview } }, [
              _vm._v("stopPreview")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.startRecording } }, [
              _vm._v("startRecording")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.stopRecording } }, [
              _vm._v("stopRecording")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.isRecording } }, [
              _vm._v("isRecording")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.openSpeech } }, [
              _vm._v("openSpeech")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.startSpeech } }, [
              _vm._v("startSpeech")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.stopSpeech } }, [
              _vm._v("stopSpeech")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.closeSpeech } }, [
              _vm._v("closeSpeech")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "headline" }, [_vm._v("本地")]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.openLocal } }, [
              _vm._v("openLocal")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.closeLocal } }, [
              _vm._v("closeLocal")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.pauseLocal } }, [
              _vm._v("pauseLocal")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.resumeLocal } }, [
              _vm._v("resumeLocal")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.getFileTime } }, [
              _vm._v("getFileTime")
            ]),
            _vm._v(" "),
            _c("v-btn", { on: { click: _vm.getFileCurTime } }, [
              _vm._v("getFileCurTime")
            ])
          ],
          1
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(6)      .rerender("data-v-1607b401", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=4.bsvue.js.map
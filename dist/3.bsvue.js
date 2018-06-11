webpackJsonp([3],{

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(635);

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "\n.demo[data-v-70f1638d] {\n  display: flex;\n  justify-content: space-around;\n}\n.demo div[data-v-70f1638d] {\n  width: 300px;\n}\n", "", {"version":3,"sources":["D:/bsvue/docs/md/docs/md/calendar.vue?37d28656"],"names":[],"mappings":";AA8MA;EACA,cAAA;EACA,8BAAA;CACA;AAEA;EACA,aAAA;CACA","file":"calendar.md","sourcesContent":["<template><section><h1>描述</h1>\n<p>提供了日历组件，可显示标记</p>\n<h1>效果展示</h1>\n<template>\n  <div class=\"calendar-demo\">\n    <div class=\"demo\">\n       <div>\n      <bs-calendar v-model=\"date\" :marks=\"marks\"></bs-calendar>\n    </div>\n    <div>\n      <bs-calendar v-model=\"date\" local=\"en\" :theme=\"theme\"></bs-calendar>\n    </div>\n    </div>\n  </div>\n</template>\n\n\n<h1>代码示例</h1>\n<pre v-pre=\"\"><code v-pre=\"\" class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"calendar-demo\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"demo\"</span>&gt;</span>\n       <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">bs-calendar</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"date\"</span> <span class=\"hljs-attr\">:marks</span>=<span class=\"hljs-string\">\"marks\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">bs-calendar</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">bs-calendar</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"date\"</span> <span class=\"hljs-attr\">local</span>=<span class=\"hljs-string\">\"en\"</span> <span class=\"hljs-attr\">:theme</span>=<span class=\"hljs-string\">\"theme\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">bs-calendar</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'CalendarDemo'</span>,\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">date</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime(),\n      <span class=\"hljs-attr\">marks</span>: [\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'事件录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() - <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">3</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'event'</span>\n        },\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'定时录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">3</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'time'</span>\n        },\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'定时录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">2</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'time'</span>\n        },\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'事件录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">3</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'event'</span>\n        },\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'定时录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">15</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'time'</span>\n        },\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'事件录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">13</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'event'</span>\n        }\n      ],\n      <span class=\"hljs-attr\">theme</span>: {\n        <span class=\"hljs-attr\">mainColor</span>: <span class=\"hljs-string\">'#212121'</span>,\n        <span class=\"hljs-attr\">textColor</span>: <span class=\"hljs-string\">'#0D7377'</span>,\n        <span class=\"hljs-attr\">darkTextColor</span>: <span class=\"hljs-string\">'#323232'</span>,\n        <span class=\"hljs-attr\">highlightColor</span>: <span class=\"hljs-string\">'#14FFEC'</span>,\n        <span class=\"hljs-attr\">eventColor</span>: <span class=\"hljs-string\">'#da8204'</span>,\n        <span class=\"hljs-attr\">timeColor</span>: <span class=\"hljs-string\">'#32e184'</span>\n      }\n    }\n  }\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">style</span> <span class=\"hljs-attr\">scoped</span>&gt;</span><span class=\"css\">\n<span class=\"hljs-selector-class\">.demo</span> {\n  <span class=\"hljs-attribute\">display</span>: flex;\n  <span class=\"hljs-attribute\">justify-content</span>: space-around;\n}\n\n<span class=\"hljs-selector-class\">.demo</span> <span class=\"hljs-selector-tag\">div</span> {\n  <span class=\"hljs-attribute\">width</span>: <span class=\"hljs-number\">300px</span>;\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">style</span>&gt;</span>\n\n</code></pre>\n<h1>props</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>选中的时间戳</td>\n<td>Number</td>\n<td>当前时间的时间戳</td>\n</tr>\n<tr>\n<td>marks</td>\n<td>需要标记的日期</td>\n<td>Array</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>local</td>\n<td>语言模式</td>\n<td>String</td>\n<td>'zh-cn'</td>\n</tr>\n<tr>\n<td>theme</td>\n<td>主题</td>\n<td>Object</td>\n<td>{}</td>\n</tr>\n</tbody>\n</table>\n<h3>marks属性列表</h3>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>标记说明</td>\n<td>String</td>\n</tr>\n<tr>\n<td>timestamp</td>\n<td>毫秒时间戳</td>\n<td>Number</td>\n</tr>\n<tr>\n<td>type</td>\n<td>类型</td>\n<td>String(event或time)</td>\n</tr>\n</tbody>\n</table>\n<h3>theme属性列表</h3>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>mainColor</td>\n<td>主体背景色</td>\n<td>String</td>\n<td>#efefef</td>\n</tr>\n<tr>\n<td>textColor</td>\n<td>字体颜色</td>\n<td>String</td>\n<td>#444</td>\n</tr>\n<tr>\n<td>darkTextColor</td>\n<td>灰显字体颜色</td>\n<td>String</td>\n<td>#999</td>\n</tr>\n<tr>\n<td>highlightColor</td>\n<td>选中项的背景色</td>\n<td>String</td>\n<td>#4499f7</td>\n</tr>\n<tr>\n<td>eventColor</td>\n<td>事件标记颜色</td>\n<td>String</td>\n<td>#da8204</td>\n</tr>\n<tr>\n<td>timeColor</td>\n<td>定时录像标记颜色</td>\n<td>String</td>\n<td>#32e184</td>\n</tr>\n</tbody>\n</table>\n</section></template>\n<style scoped>\n.demo {\n  display: flex;\n  justify-content: space-around;\n}\n\n.demo div {\n  width: 300px;\n}\n</style><style scoped>\n.demo {\n  display: flex;\n  justify-content: space-around;\n}\n\n.demo div {\n  width: 300px;\n}\n</style>\n<script>\nexport default {\n  name: 'CalendarDemo',\n  data() {\n    return {\n      date: new Date().getTime(),\n      marks: [\n        {\n          title: '事件录像',\n          timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 * 3,\n          type: 'event'\n        },\n        {\n          title: '定时录像',\n          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,\n          type: 'time'\n        },\n        {\n          title: '定时录像',\n          timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 * 2,\n          type: 'time'\n        },\n        {\n          title: '定时录像',\n          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 2,\n          type: 'time'\n        },\n        {\n          title: '事件录像',\n          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,\n          type: 'event'\n        },\n        {\n          title: '定时录像',\n          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 15,\n          type: 'time'\n        },\n        {\n          title: '事件录像',\n          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 13,\n          type: 'event'\n        }\n      ],\n      theme: {\n        mainColor: '#212121',\n        textColor: '#0D7377',\n        darkTextColor: '#323232',\n        highlightColor: '#14FFEC',\n        eventColor: '#da8204',\n        timeColor: '#32e184'\n      }\n    }\n  }\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "\n.demo[data-v-70f1638d] {\n  display: flex;\n  justify-content: space-around;\n}\n.demo div[data-v-70f1638d] {\n  width: 300px;\n}\n", "", {"version":3,"sources":["D:/bsvue/docs/md/docs/md/calendar.vue?37d28656"],"names":[],"mappings":";AAuNA;EACA,cAAA;EACA,8BAAA;CACA;AAEA;EACA,aAAA;CACA","file":"calendar.md","sourcesContent":["<template><section><h1>描述</h1>\n<p>提供了日历组件，可显示标记</p>\n<h1>效果展示</h1>\n<template>\n  <div class=\"calendar-demo\">\n    <div class=\"demo\">\n       <div>\n      <bs-calendar v-model=\"date\" :marks=\"marks\"></bs-calendar>\n    </div>\n    <div>\n      <bs-calendar v-model=\"date\" local=\"en\" :theme=\"theme\"></bs-calendar>\n    </div>\n    </div>\n  </div>\n</template>\n\n\n<h1>代码示例</h1>\n<pre v-pre=\"\"><code v-pre=\"\" class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"calendar-demo\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"demo\"</span>&gt;</span>\n       <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">bs-calendar</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"date\"</span> <span class=\"hljs-attr\">:marks</span>=<span class=\"hljs-string\">\"marks\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">bs-calendar</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">bs-calendar</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"date\"</span> <span class=\"hljs-attr\">local</span>=<span class=\"hljs-string\">\"en\"</span> <span class=\"hljs-attr\">:theme</span>=<span class=\"hljs-string\">\"theme\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">bs-calendar</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'CalendarDemo'</span>,\n  data() {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">date</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime(),\n      <span class=\"hljs-attr\">marks</span>: [\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'事件录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() - <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">3</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'event'</span>\n        },\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'定时录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">3</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'time'</span>\n        },\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'定时录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">2</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'time'</span>\n        },\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'事件录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">3</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'event'</span>\n        },\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'定时录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">15</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'time'</span>\n        },\n        {\n          <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'事件录像'</span>,\n          <span class=\"hljs-attr\">timestamp</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().getTime() + <span class=\"hljs-number\">24</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">60</span> * <span class=\"hljs-number\">1000</span> * <span class=\"hljs-number\">13</span>,\n          <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'event'</span>\n        }\n      ],\n      <span class=\"hljs-attr\">theme</span>: {\n        <span class=\"hljs-attr\">mainColor</span>: <span class=\"hljs-string\">'#212121'</span>,\n        <span class=\"hljs-attr\">textColor</span>: <span class=\"hljs-string\">'#0D7377'</span>,\n        <span class=\"hljs-attr\">darkTextColor</span>: <span class=\"hljs-string\">'#323232'</span>,\n        <span class=\"hljs-attr\">highlightColor</span>: <span class=\"hljs-string\">'#14FFEC'</span>,\n        <span class=\"hljs-attr\">eventColor</span>: <span class=\"hljs-string\">'#da8204'</span>,\n        <span class=\"hljs-attr\">timeColor</span>: <span class=\"hljs-string\">'#32e184'</span>\n      }\n    }\n  }\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">style</span> <span class=\"hljs-attr\">scoped</span>&gt;</span><span class=\"css\">\n<span class=\"hljs-selector-class\">.demo</span> {\n  <span class=\"hljs-attribute\">display</span>: flex;\n  <span class=\"hljs-attribute\">justify-content</span>: space-around;\n}\n\n<span class=\"hljs-selector-class\">.demo</span> <span class=\"hljs-selector-tag\">div</span> {\n  <span class=\"hljs-attribute\">width</span>: <span class=\"hljs-number\">300px</span>;\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">style</span>&gt;</span>\n\n</code></pre>\n<h1>props</h1>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>选中的时间戳</td>\n<td>Number</td>\n<td>当前时间的时间戳</td>\n</tr>\n<tr>\n<td>marks</td>\n<td>需要标记的日期</td>\n<td>Array</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>local</td>\n<td>语言模式</td>\n<td>String</td>\n<td>'zh-cn'</td>\n</tr>\n<tr>\n<td>theme</td>\n<td>主题</td>\n<td>Object</td>\n<td>{}</td>\n</tr>\n</tbody>\n</table>\n<h3>marks属性列表</h3>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>标记说明</td>\n<td>String</td>\n</tr>\n<tr>\n<td>timestamp</td>\n<td>毫秒时间戳</td>\n<td>Number</td>\n</tr>\n<tr>\n<td>type</td>\n<td>类型</td>\n<td>String(event或time)</td>\n</tr>\n</tbody>\n</table>\n<h3>theme属性列表</h3>\n<table class=\"table table-striped table-bordered\"><thead>\n<tr>\n<th>属性名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>mainColor</td>\n<td>主体背景色</td>\n<td>String</td>\n<td>#efefef</td>\n</tr>\n<tr>\n<td>textColor</td>\n<td>字体颜色</td>\n<td>String</td>\n<td>#444</td>\n</tr>\n<tr>\n<td>darkTextColor</td>\n<td>灰显字体颜色</td>\n<td>String</td>\n<td>#999</td>\n</tr>\n<tr>\n<td>highlightColor</td>\n<td>选中项的背景色</td>\n<td>String</td>\n<td>#4499f7</td>\n</tr>\n<tr>\n<td>eventColor</td>\n<td>事件标记颜色</td>\n<td>String</td>\n<td>#da8204</td>\n</tr>\n<tr>\n<td>timeColor</td>\n<td>定时录像标记颜色</td>\n<td>String</td>\n<td>#32e184</td>\n</tr>\n</tbody>\n</table>\n</section></template>\n<style scoped>\n.demo {\n  display: flex;\n  justify-content: space-around;\n}\n\n.demo div {\n  width: 300px;\n}\n</style><style scoped>\n.demo {\n  display: flex;\n  justify-content: space-around;\n}\n\n.demo div {\n  width: 300px;\n}\n</style>\n<script>\nexport default {\n  name: 'CalendarDemo',\n  data() {\n    return {\n      date: new Date().getTime(),\n      marks: [\n        {\n          title: '事件录像',\n          timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 * 3,\n          type: 'event'\n        },\n        {\n          title: '定时录像',\n          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,\n          type: 'time'\n        },\n        {\n          title: '定时录像',\n          timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 * 2,\n          type: 'time'\n        },\n        {\n          title: '定时录像',\n          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 2,\n          type: 'time'\n        },\n        {\n          title: '事件录像',\n          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,\n          type: 'event'\n        },\n        {\n          title: '定时录像',\n          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 15,\n          type: 'time'\n        },\n        {\n          title: '事件录像',\n          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 13,\n          type: 'event'\n        }\n      ],\n      theme: {\n        mainColor: '#212121',\n        textColor: '#0D7377',\n        darkTextColor: '#323232',\n        highlightColor: '#14FFEC',\n        eventColor: '#da8204',\n        timeColor: '#32e184'\n      }\n    }\n  }\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_calendar_md__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_calendar_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_calendar_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70f1638d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_calendar_md__ = __webpack_require__(639);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(636)
  __webpack_require__(637)
}
var normalizeComponent = __webpack_require__(15)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-70f1638d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_calendar_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70f1638d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_calendar_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs\\md\\calendar.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(6)
  hotAPI.install(__webpack_require__(13), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70f1638d", Component.options)
  } else {
    hotAPI.reload("data-v-70f1638d", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(606);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("504724d6", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(606, function() {
     var newContent = __webpack_require__(606);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(607);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("20075875", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(607, function() {
     var newContent = __webpack_require__(607);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 638:
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
//
//

exports.default = {
  name: 'CalendarDemo',
  data: function data() {
    return {
      date: new Date().getTime(),
      marks: [{
        title: '事件录像',
        timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 * 3,
        type: 'event'
      }, {
        title: '定时录像',
        timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,
        type: 'time'
      }, {
        title: '定时录像',
        timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 * 2,
        type: 'time'
      }, {
        title: '定时录像',
        timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 2,
        type: 'time'
      }, {
        title: '事件录像',
        timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,
        type: 'event'
      }, {
        title: '定时录像',
        timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 15,
        type: 'time'
      }, {
        title: '事件录像',
        timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 13,
        type: 'event'
      }],
      theme: {
        mainColor: '#212121',
        textColor: '#0D7377',
        darkTextColor: '#323232',
        highlightColor: '#14FFEC',
        eventColor: '#da8204',
        timeColor: '#32e184'
      }
    };
  }
};

/***/ }),

/***/ 639:
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
      _c("p", [_vm._v("提供了日历组件，可显示标记")]),
      _vm._v(" "),
      _c("h1", [_vm._v("效果展示")]),
      _vm._v(" "),
      [
        _c("div", { staticClass: "calendar-demo" }, [
          _c("div", { staticClass: "demo" }, [
            _c(
              "div",
              [
                _c("bs-calendar", {
                  attrs: { marks: _vm.marks },
                  model: {
                    value: _vm.date,
                    callback: function($$v) {
                      _vm.date = $$v
                    },
                    expression: "date"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("bs-calendar", {
                  attrs: { local: "en", theme: _vm.theme },
                  model: {
                    value: _vm.date,
                    callback: function($$v) {
                      _vm.date = $$v
                    },
                    expression: "date"
                  }
                })
              ],
              1
            )
          ])
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
      _c("h3", [_vm._v("marks属性列表")]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("h3", [_vm._v("theme属性列表")]),
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
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("class")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v('"calendar-demo"')
          ]),
          _vm._v(">")
        ]),
        _vm._v("\n    "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("class")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"demo"')]),
          _vm._v(">")
        ]),
        _vm._v("\n       "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
          _vm._v(">")
        ]),
        _vm._v("\n      "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [
            _vm._v("bs-calendar")
          ]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("v-model")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"date"')]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v(":marks")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"marks"')]),
          _vm._v(">")
        ]),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [
            _vm._v("bs-calendar")
          ]),
          _vm._v(">")
        ]),
        _vm._v("\n    "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
          _vm._v(">")
        ]),
        _vm._v("\n    "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("div")]),
          _vm._v(">")
        ]),
        _vm._v("\n      "),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [
            _vm._v("bs-calendar")
          ]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("v-model")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"date"')]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("local")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"en"')]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v(":theme")]),
          _vm._v("="),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v('"theme"')]),
          _vm._v(">")
        ]),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [
            _vm._v("bs-calendar")
          ]),
          _vm._v(">")
        ]),
        _vm._v("\n    "),
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
          _vm._v(" {\n  "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("name")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'CalendarDemo'")
          ]),
          _vm._v(",\n  data() {\n    "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("return")]),
          _vm._v(" {\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("date")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime(),\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("marks")]),
          _vm._v(": [\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'事件录像'")
          ]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timestamp")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() - "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("24")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1000")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("3")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("type")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'event'")]),
          _vm._v("\n        },\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'定时录像'")
          ]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timestamp")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("24")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1000")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("3")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("type")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'time'")]),
          _vm._v("\n        },\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'定时录像'")
          ]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timestamp")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("24")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1000")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("2")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("type")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'time'")]),
          _vm._v("\n        },\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'事件录像'")
          ]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timestamp")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("24")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1000")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("3")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("type")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'event'")]),
          _vm._v("\n        },\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'定时录像'")
          ]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timestamp")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("24")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1000")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("15")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("type")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'time'")]),
          _vm._v("\n        },\n        {\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("title")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'事件录像'")
          ]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timestamp")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-keyword" } }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-built_in" } }, [_vm._v("Date")]),
          _vm._v("().getTime() + "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("24")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("60")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("1000")]),
          _vm._v(" * "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("13")]),
          _vm._v(",\n          "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("type")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [_vm._v("'event'")]),
          _vm._v("\n        }\n      ],\n      "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("theme")]),
          _vm._v(": {\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("mainColor")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'#212121'")
          ]),
          _vm._v(",\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("textColor")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'#0D7377'")
          ]),
          _vm._v(",\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [
            _vm._v("darkTextColor")
          ]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'#323232'")
          ]),
          _vm._v(",\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [
            _vm._v("highlightColor")
          ]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'#14FFEC'")
          ]),
          _vm._v(",\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("eventColor")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'#da8204'")
          ]),
          _vm._v(",\n        "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("timeColor")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-string" } }, [
            _vm._v("'#32e184'")
          ]),
          _vm._v("\n      }\n    }\n  }\n}\n")
        ]),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("</"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("script")]),
          _vm._v(">")
        ]),
        _vm._v("\n\n"),
        _c("span", { attrs: { class: "hljs-tag" } }, [
          _vm._v("<"),
          _c("span", { attrs: { class: "hljs-name" } }, [_vm._v("style")]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-attr" } }, [_vm._v("scoped")]),
          _vm._v(">")
        ]),
        _c("span", { attrs: { class: "css" } }, [
          _vm._v("\n"),
          _c("span", { attrs: { class: "hljs-selector-class" } }, [
            _vm._v(".demo")
          ]),
          _vm._v(" {\n  "),
          _c("span", { attrs: { class: "hljs-attribute" } }, [
            _vm._v("display")
          ]),
          _vm._v(": flex;\n  "),
          _c("span", { attrs: { class: "hljs-attribute" } }, [
            _vm._v("justify-content")
          ]),
          _vm._v(": space-around;\n}\n\n"),
          _c("span", { attrs: { class: "hljs-selector-class" } }, [
            _vm._v(".demo")
          ]),
          _vm._v(" "),
          _c("span", { attrs: { class: "hljs-selector-tag" } }, [
            _vm._v("div")
          ]),
          _vm._v(" {\n  "),
          _c("span", { attrs: { class: "hljs-attribute" } }, [_vm._v("width")]),
          _vm._v(": "),
          _c("span", { attrs: { class: "hljs-number" } }, [_vm._v("300px")]),
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
          _c("td", [_vm._v("v-model")]),
          _vm._v(" "),
          _c("td", [_vm._v("选中的时间戳")]),
          _vm._v(" "),
          _c("td", [_vm._v("Number")]),
          _vm._v(" "),
          _c("td", [_vm._v("当前时间的时间戳")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("marks")]),
          _vm._v(" "),
          _c("td", [_vm._v("需要标记的日期")]),
          _vm._v(" "),
          _c("td", [_vm._v("Array")]),
          _vm._v(" "),
          _c("td", [_vm._v("[]")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("local")]),
          _vm._v(" "),
          _c("td", [_vm._v("语言模式")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("'zh-cn'")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("theme")]),
          _vm._v(" "),
          _c("td", [_vm._v("主题")]),
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
          _c("th", [_vm._v("属性名称")]),
          _vm._v(" "),
          _c("th", [_vm._v("描述")]),
          _vm._v(" "),
          _c("th", [_vm._v("类型")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("title")]),
          _vm._v(" "),
          _c("td", [_vm._v("标记说明")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("timestamp")]),
          _vm._v(" "),
          _c("td", [_vm._v("毫秒时间戳")]),
          _vm._v(" "),
          _c("td", [_vm._v("Number")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("type")]),
          _vm._v(" "),
          _c("td", [_vm._v("类型")]),
          _vm._v(" "),
          _c("td", [_vm._v("String(event或time)")])
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
          _c("td", [_vm._v("mainColor")]),
          _vm._v(" "),
          _c("td", [_vm._v("主体背景色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#efefef")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("textColor")]),
          _vm._v(" "),
          _c("td", [_vm._v("字体颜色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#444")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("darkTextColor")]),
          _vm._v(" "),
          _c("td", [_vm._v("灰显字体颜色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#999")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("highlightColor")]),
          _vm._v(" "),
          _c("td", [_vm._v("选中项的背景色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#4499f7")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("eventColor")]),
          _vm._v(" "),
          _c("td", [_vm._v("事件标记颜色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#da8204")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("timeColor")]),
          _vm._v(" "),
          _c("td", [_vm._v("定时录像标记颜色")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("#32e184")])
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
    __webpack_require__(6)      .rerender("data-v-70f1638d", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=3.bsvue.js.map
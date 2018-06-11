# 使用
这是一个对象不是组件
```js
import { playback, preview, local } from 'bsvue'
```
__所有方法的第一个参数都是插件对象__

# 通用(指可以通过上面的任意对象调用)
### fullScreen 
playback.fullScreen(plugin) 全屏
### boost
playback.boost(plugin) 鸟瞰
### openSound
playback.openSound(plugin) 打开伴音
### closeSound
playback.closeSound(plugin) 关闭伴音
### setVolume
playback.setVolume(plugin, volume) 设置音量
### getVolume
playback.getVolume(plugin) 获取音量
### getFile
playback.getFile(plugin) 打开文件
### saveFile
playback.saveFile(plugin, [ext], [extStr]) 保存文件

参数2,3 分别为文件后缀名，后缀名筛选器

例如保存bsr文件 'bsr', 'BSR Files (*.bsr)|*.bsr|AVI Files (*.avi)|*.avi|All Files (*.*)|*.*||'
### getPath
playback.getPath(plugin) 打开目录
### getCapture
playback.getCapture(plugin, [quality]) 获取base64的截图

参数2为截图质量
### saveCapture
playback.saveCapture(plugin, path) 保存截图到path位置
### setScaleMode
playback.setScaleMode(plugin, mode) 设置画面比例

mode值为 1原始比例 2自适应 3 4:3 4 16:9
### setClickEvent
playback.setClickEvent(plugin, event) 设置点击事件

event的参数为

index:窗口的索引

status: 1为单击 2为双击
### setKeyEvent
playback.setKeyEvent(plugin, event) 设置键盘事件

event的参数为

index:窗口的索引

type: 无用参数

code: 按键的keycode

# playback对象
### open
playback.open(plugin, {
  dsIp,
  startTime,
  endTime,
  strmInfo
})

打开回放
### stop
playback.stop(plugin) 关闭回放
### pause
playback.pause(plugin) 暂停
### resume
playback.resume(plugin) 恢复播放
### getRecordTime
playback.getRecordTime(plguin) 获得播放的录像时间信息

返回对象: {start: time, end: time} 单位毫秒
### getCurTime
playback.getCurTime(plugin) 获得当前播放时间 毫秒
### setPlayerRate
playback.setPlayerRate(plugin, rate) 设置播放速率

rate参数 如果是8倍传8  如果是1/8就传1/8 数值型
### setPlayerMode
playback.setPlayerMode(plugin, mode) 设置播放模式

mode的值为 0正常模式 1逐帧模式 2 I帧模式
### download
playback.download(plugin, {
  dsIp,
  startTime,
  endTime,
  strmInfo,
  path
}, callback) 下载文件到path下

下载完成执行callback

返回值为该下载的句柄

### closeDownload
playback.closeDownload(plugin, dumpHandler) 关闭下载， 参数2为下载句柄
### isFinishDownload
playback.isFinishDownload(plugin, dumpHandler) 判断是否下载完成

# preview对象
### open
preview.open(plugin, {
  ip,
  port,
  channel,
  vendor,
  streamType,
  dsIp,
  dsPort
}) 打开现场，其中dsIp和dsPort是开流请求返回的值
### stop
preview.stop(plugin) 关闭现场
### startRecording
preview.startRecording(plugin, { path, type }) 开始录像

path为完整路径 包括后缀名

type的值为 4:bsr文件  6:avi文件
### stopRecording
preview.stopRecording(plugin) 停止录像
### isRecording
preview.isRecording(plugin) 是否正在录像
### openSpeech
preview.openSpeech(plugin, param) 打开对讲流

param参数和打开现场的参数一样
### startSpeech
preview.startSpeech(plugin) 开始对讲  要先开对讲流
### stopSpeech
preview.stopSpeech(plugin) 结束对讲
### closeSpeech
preview.closeSpeech(plugin) 关闭对讲流

# local对象
### open
local.open(plugin, path) 打开文件播放

### stop
local.stop(plugin) 关闭文件播放

### pause
local.pause(plugin) 暂停文件播放

### resume
local.resume(plugin) 恢复文件播放

### getFileTime
local.getFileTime(plugin) 获取播放文件时间

返回对象: {start: time, end: time} 单位毫秒

### getCurTime
local.getCurTime(plugin) 获取播放的当前时间 毫秒
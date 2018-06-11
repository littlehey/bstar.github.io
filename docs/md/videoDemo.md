<template>
<div>
  <object type="application/x-webplayercontrol"></object><v-btn @click="login">login</v-btn>
  <div style="height: 25px;overflow:auto">state result: {{state}}</div>
  <div class="headline">通用</div>
  <v-btn @click="fullscreen">fullscreen</v-btn>
  <v-btn @click="boost">boost</v-btn>
  <v-btn @click="openSound">openSound</v-btn>
  <v-btn @click="closeSound">closeSound</v-btn>
  <v-btn @click="setVolume">setVolume 50</v-btn>
  <v-btn @click="getVolume">getVolume</v-btn>
  <v-btn @click="getFile">getFile</v-btn>
  <v-btn @click="saveFile">saveFile</v-btn>
  <v-btn @click="getPath">getPath</v-btn>
  <v-btn @click="getCapture">getCapture</v-btn>
  <v-btn @click="saveCapture">saveCapture</v-btn>
  <v-btn @click="setScale">setScale 16:9</v-btn><br>
  <v-btn @click="setClickEvent">setClickEvent</v-btn>
  <v-btn @click="setKeyEvent">setKeyEvent</v-btn>

  <div class="headline">回放</div>
  <v-btn @click="openPlayback">openplayback</v-btn>
  <v-btn @click="closePlayback">closeplayback</v-btn>
  <v-btn @click="pause">pause</v-btn>
  <v-btn @click="resume">resume</v-btn>
  <v-btn @click="getRecordTime">getRecordTime</v-btn>
  <v-btn @click="getCurTime">getCurTime</v-btn>
  <v-btn @click="setPlayerRate">setPlayerRate 1/8</v-btn>
  <v-btn @click="setPlayerMode">setPlayerMode I帧</v-btn>
  <v-btn @click="download">download</v-btn>
  <v-btn @click="closeDownload">closeDownload</v-btn><br>
  <v-btn @click="isFinishDownload">isFinishDownload</v-btn>

  <div class="headline">现场</div>
  <v-btn @click="openPreview">openPreview</v-btn>
  <v-btn @click="stopPreview">stopPreview</v-btn>
  <v-btn @click="startRecording">startRecording</v-btn>
  <v-btn @click="stopRecording">stopRecording</v-btn>
  <v-btn @click="isRecording">isRecording</v-btn>
  <v-btn @click="openSpeech">openSpeech</v-btn>
  <v-btn @click="startSpeech">startSpeech</v-btn>
  <v-btn @click="stopSpeech">stopSpeech</v-btn>
  <v-btn @click="closeSpeech">closeSpeech</v-btn>

  <div class="headline">本地</div>
  <v-btn @click="openLocal">openLocal</v-btn>
  <v-btn @click="closeLocal">closeLocal</v-btn>
  <v-btn @click="pauseLocal">pauseLocal</v-btn>
  <v-btn @click="resumeLocal">resumeLocal</v-btn>
  <v-btn @click="getFileTime">getFileTime</v-btn>
  <v-btn @click="getFileCurTime">getFileCurTime</v-btn>
</div>
</template>
<script>
import { playback, preview, local } from '../../src/index'
const record = {
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
}
export default {
  data() {
    return {
      state: null
    }
  },
  methods: {
    openPlayback() {
      this.state = playback.open(this.plugin, record)
    },
    closePlayback() {
      this.state = playback.stop(this.plugin)
    },
    fullscreen() {
      this.state = playback.fullScreen(this.plugin)
    },
    boost() {
      this.state = playback.boost(this.plugin)
    },
    openSound() {
      this.state = playback.openSound(this.plugin)
    },
    closeSound() {
      this.state = playback.closeSound(this.plugin)
    },
    getVolume() {
      this.state = playback.getVolume(this.plugin)
    },
    setVolume() {
      this.state = playback.setVolume(this.plugin, 50)
    },
    getFile() {
      this.state = playback.getFile(this.plugin)
    },
    saveFile() {
      this.state = playback.saveFile(this.plugin, 'bsr', 'BSR Files (*.bsr)|*.bsr|AVI Files (*.avi)|*.avi|All Files (*.*)|*.*||')
    },
    getPath() {
      this.state = playback.getPath(this.plugin)
    },
    getCapture() {
      this.state = playback.getCapture(this.plugin, 10)
    },
    saveCapture() {
      const path = playback.saveFile(this.plugin, 'jpg', 'JPG Files (*.jpg)')
      this.state = playback.saveCapture(this.plugin, path)
    },
    setScale() {
      this.state = playback.setScaleMode(this.plugin, 4)
    },
    pause() {
      this.state = playback.pause(this.plugin)
    },
    resume() {
      this.state = playback.resume(this.plugin)
    },
    getCurTime() {
      this.state = playback.getCurTime(this.plugin)
    },
    getRecordTime() {
      this.state = playback.getRecordTime(this.plugin)
    },
    setPlayerRate() {
      this.state = playback.setPlayerRate(this.plugin, 1/8)
    },
    setPlayerMode() {
      this.state = playback.setPlayerMode(this.plugin, 1)
    },
    isFinishDownload() {
      this.state = playback.isFinishDownload(this.plugin, this.dum)
    },
    closeDownload() {
      this.state = playback.closeDownload(this.plugin, this.dum)
    },
    download() {
      const path = playback.saveFile(this.plugin, 'bsr', 'BSR Files (*.bsr)|*.bsr|AVI Files (*.avi)|*.avi|All Files (*.*)|*.*||')
      this.state = this.dum = playback.download(this.plugin, {
        ...record,
        path
      }, () => {
        window.alert('download finished')
      })
    },
    async login() {
      const suc = await this.$http.post('api/auth/login', {
        name: 'admin',
        pwd: '21232f297a57a5a743894a0e4a801fc3'
      })
      this.state = this.token = suc.data.tocken
    },
    async openPreview() {
      const ip = '192.168.14.199'
      const port = 3721
      const channel = 1
      const vendor = 'bstar'
      const streamType = 'main'
      const suc = await this.$http.post(`api/ctl/video?type=video&channelid=1`, {
        devIp: ip,
        devPort: port,
        channel,
        streamType
      }, {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      })
      this.temp = {
        streamType,
        ip,
        port,
        channel,
        vendor,
        tsIp: suc.data.tsIp,
        tsPort: suc.data.tsPort
      }
      this.state = preview.open(this.plugin, this.temp)
    },
    stopPreview() {
      this.state = preview.stop(this.plugin)
    },
    startRecording() {
      const path = preview.saveFile(this.plugin)
      if (path) {
        this.state = preview.startRecording(this.plugin, {
          path,
          type: 4
        })
      }
    },
    stopRecording() {
      this.state = preview.stopRecording(this.plugin)
    },
    isRecording() {
      this.state = preview.isRecording(this.plugin)
    },
    openSpeech() {
      this.state = preview.openSpeech(this.plugin, this.temp)
    },
    startSpeech() {
      this.state = preview.startSpeech(this.plugin)
    },
    stopSpeech() {
      this.state = preview.stopSpeech(this.plugin)
    },
    closeSpeech() {
      this.state = preview.closeSpeech(this.plugin)
    },
    setClickEvent() {
      this.state = preview.setClickEvent(this.plugin, (index, status) => {
        this.state = status
      })
    },
    setKeyEvent() {
      this.state = preview.setKeyEvent(this.plugin, (index, type, code) => {
        this.state = `code${code}`
      })
    },
    openLocal() {
      const path = local.getFile(this.plugin)
      if (path) {
        this.state = local.open(this.plugin, path)
      }
    },
    closeLocal() {
      this.state = local.stop(this.plugin)
    },
    pauseLocal() {
      this.state = local.pause(this.plugin)
    },
    resumeLocal() {
      this.state = local.resume(this.plugin)
    },
    getFileTime() {
      this.state = local.getFileTime(this.plugin)
    },
    getFileCurTime() {
      this.state = local.getCurTime(this.plugin)
    }
  },
  mounted() {
    this.plugin = this.$el.querySelector('object')
  },
  beforeDestroyed() {
    this.plugin = null
  }
}
</script>
<style>
object {
  width: 400px;
  height: 300px
}
</style>
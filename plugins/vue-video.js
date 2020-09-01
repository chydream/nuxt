import Vue from 'vue'
import 'videojs-flash'
const VueVideoPlayer = require('vue-video-player/dist/ssr')
const hls = require('videojs-contrib-hls')
Vue.use(hls)
Vue.use(VueVideoPlayer)

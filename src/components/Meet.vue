<template>
  <div id="call">
    <div class="full">
      <div id="meet" v-if="showCall"></div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import Call from "@/libs/call";
import _ from "lodash";

export default {
  name: 'meet',
  components: {TopBar},
  data () {
    return {
      showCall: true,
      call: null
    }
  },
  mounted() {
    this.startCall();
  },
  methods: {
    startCall() {
      this._disposeCall();
      this.call = new Call({
        roomName: 'yo',
        element: document.querySelector('#meet')
      });
      this.call.start();
      this.call.addEventListeners({
        videoConferenceJoined: this._videoConferenceJoined,
        videoConferenceLeft: this._videoConferenceLeft,
        readyToClose: this._readyToClose
      })
    },
    _readyToClose(evt) {
      console.log(`Ready to close.`);

      _.delay(() => {
        this._disposeCall();
        this.showCall = false;
      }, 500);
    },
    _videoConferenceLeft(evt) {
      console.log(`Conference ${evt.roomName} left.`);
    },
    _videoConferenceJoined(evt) {
      console.log(`Conference ${evt.roomName} joined.`);
    },
    _disposeCall() {
      if(this.call) {
           this.call.dispose();
           this.call = null;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    overflow-y: hidden;
  }

  .full, .full div, #meet {
    width: 100%;
    height: 100%;
  }

 #call {
   top: 50px;
   position: relative;

   width: 100%;
   height: calc(100% - 50px);
 }

  #meet iframe {
    border: 0px;
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>

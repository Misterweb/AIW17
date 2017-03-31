<template>
  <div id="call">
    <div v-if="loading" id="loading-wrapper">
        <div id="loading" class="preloader-wrapper big active">
          <div class="spinner-layer spinner-red-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
    </div>
    <div id="thanks-wrapper" v-if="thanks">
      <div id="thanks">
        <div class="row">
          <img id="visionbb" src="../assets/logo_vision_small.png" />
          <p>Thank you for using our product.<br/>
            <i class="signature">- from Sylvain, Djamel & Jean-Hugues</i>
          </p>
          
          <a href="https://www.arkadin.com/" target="_blank" class="btn ark-red"><i class="material-icons left">language</i> Visit us !</a>
          <a href="https://goo.gl/Lnuq6q" target="_blank" class="btn ark-blue"><i class="material-icons left">thumb_up</i> Share us !</a>
        </div>
        <div class="row" style="margin-top: 60px;">
          <h4>Like the experience ?</h4>
          <a href="https://www.arkadin.fr/services/video-conference/arkadinvision" target="_blank" class="btn ark-red"><i class="material-icons left">star</i>Upgrade</a>
        </div>
      </div>
    </div>
    <div id="assistant" v-if="showCall">
        <!-- Element Showed -->
        <a id="menu" class="waves-effect waves-light btn btn-floating ark-red" @click="openAssistant()" ><i class="material-icons">info_outline</i></a>

        <!-- Tap Target Structure -->
        <div class="tap-target ark-red" data-activates="menu">
          <div class="tap-target-content">
            <h5>Like the experience ?</h5>
            <p>Please see our others products !</p>
            <p><a class="btn ark-grey"><i class="material-icons left">thumb_up</i>Visit us !</a></p>
          </div>
        </div>
    </div>
    <div class="full">
      <div id="meet" v-if="showCall"></div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import Call from "@/libs/call";
import _ from "lodash";
import router from '../router'

export default {
  name: 'meet',
  components: {TopBar},
  data () {
    return {
      showCall: true,
      thanks: false,
      call: null,
      loading: true,
      roomId: this.$route.params.id
    }
  },
  mounted() {
     if(_.isEmpty(this.roomId) == false) {
      this.startCall(this.roomId);
     }
  },
  methods: {
    startCall(id) {
      this._disposeCall();
      this.call = new Call({
        roomName: id,
        element: document.querySelector('#meet')
      });
      this.call.start();
      this.call.addEventListeners({
        videoConferenceJoined: this._videoConferenceJoined,
        videoConferenceLeft: this._videoConferenceLeft,
        readyToClose: this._readyToClose
      })
    },
    openAssistant() {
        console.log('Open assistant');
        $('.tap-target').tapTarget('open');
    },
    _readyToClose(evt) {
      console.log(`Ready to close.`);

      _.delay(() => {
        this._disposeCall();
        this.showCall = false;
        this.thanks = true;
      }, 500);
    },
    _videoConferenceLeft(evt) {
      console.log(`Conference ${evt.roomName} left.`);
    },
    _videoConferenceJoined(evt) {
      console.log(`Conference ${evt.roomName} joined.`);
      this.loading = false;
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

.signature {
  font-size: 0.8em;
  margin-left: 150px;
}

#assistant {
  position: fixed;
  right: 30px;
  top: 80px;
}

 #call {
   top: 50px;
   position: relative;

   height: 100%;
   width: 100%;
   height: calc(100% - 50px);
 }

 #loading-wrapper {

   position: absolute;
   top: 0;
   left: 0;

   width: 100%;
   height: 100%;

   background-color: rgba(0, 0, 0, 0.3);

   display: flex;

 }

 #thanks-wrapper {
      position: absolute;
   top: 0;
   left: 0;

   width: 100%;
   height: 100%;

   display: flex;
 }

#thanks {
  margin: auto;
}

 #loading {
   margin: auto;
 }

  #meet iframe {
    border: 0px;
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>

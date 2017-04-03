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
    <transition name="fade">
      <div id="message" v-if="showMessage">
        Conference link copied to your clipboard
      </div>
    </transition>
    <div id="assistant" v-if="showCall">
        <!-- Element Showed -->
        <a id="menu" class="waves-effect waves-light btn btn-floating ark-red" @click="openAssistant()" ><i class="material-icons">info_outline</i></a>

        <!-- Tap Target Structure -->
        <div class="tap-target ark-red" data-activates="menu">
          <div class="tap-target-content">
            <div>
              <h5>Like the experience ?</h5>
              <a href="https://www.arkadin.fr/services/video-conference/arkadinvision" target="_blank" class="btn circle ark-yellow"><i class="material-icons left">star</i>Upgrade</a>
            
            </div>
            <div style="position:absolute; top: -19px; left: 300px;">
              <a @click="copyShareLink()" alt="Copy share link" class="btn-floating left white"><i class="material-icons ark-green-text">add</i></a>
              </div>
            <div style="position:absolute; top: 250px; left: 330px;">
              <a href="https://www.arkadin.com/" target="_blank" class="btn-floating left white"><i class="material-icons ark-red-text">language</i></a>
              </div>
            <div style="position:absolute; top: 250px; left: 380px;">
              <a href="https://goo.gl/Lnuq6q" target="_blank" class="btn-floating right ark-blue"><i class="material-icons">thumb_up</i></a>
            </div>
            <div style="position:absolute; top: 310px; left: 260px;">
              <a href="https://www.arkadin.fr" target="_blank"><img id="assistantlogo" src="../assets/small-logo.png"></a>
            </div>
          </div>
        </div>
    </div>
    <div class="full">
      <div id="meet" v-if="showCall"></div>
    </div>
  </div>
</template>

<script>
require('materialize-css');

import TopBar from "@/components/TopBar";
import Call from "@/libs/call";
import _ from "lodash";
import router from '../router'
import globals from '@/libs/globals'
import key from 'keyboard-shortcut'
import copy from 'copy-to-clipboard'

export default {
  name: 'meet',
  components: {TopBar},
  data () {
    return {
      showCall: true,
      thanks: false,
      call: null,
      loading: true,
      roomId: this.$route.params.id,
      assistantOpen: false,
      shareLink:"",
      showMessage: false
    }
  },
  mounted() {
     let account = globals.accountManager.get();
     if(account === null || account.isConnected === false) router.push('/login');

     if(_.isEmpty(this.roomId) == false) {
      key('alt x', () => {
         if(this.assistantOpen) this.closeAssistant();
         else this.openAssistant();
         return false;
      });
      this.startCall(this.roomId);
     }
  },
  methods: {
    startCall(id) {
      this._disposeCall();
      this.shareLink = "https://visionbasicn.arkadin.com/" + id;
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
        this.assistantOpen = true;
        return false;
    },
    closeAssistant() {
        console.log('Close assistant');
        $('.tap-target').tapTarget('close');
        this.assistantOpen = false;
        return false;
    },
    copyShareLink() {
      copy(this.shareLink);
      this.displayMessage();
    },
    displayMessage() {
      this.showMessage = true;
      _.delay(() => {
        this.showMessage = false;
      }, 2000);
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

#message {
  position: fixed;
  right: 80px;
  top: 80px;

  background-color: rgba(128, 128, 128, .8);
  padding: 10px;

  border-radius: 10px;

  color: white;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>

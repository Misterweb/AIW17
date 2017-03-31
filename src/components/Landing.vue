<template>
  <div id="landing">
    <div id="choice" class="row" >
      <div class="col s10 m8 l6 push-s1 push-m2 push-l3 ark-grey no-padding">
        <div class="row no-margin top-title">
          <div class="col s12 center-align">
            <img id="visionbb" src="../assets/logo_vision_small.png" />
          </div>
        </div>
        <div class="row no-margin" style="padding-top: 7px;">
          <div class="col s6">
            <div class="card ark-card ark-red" @click="login()">
              <div class="card-content">
                <span class="card-title activator white-text  no-margin">Login<i class="material-icons medium right white-text">vpn_key</i></span>
              </div>
            </div>
          </div>
          <div class="col s6">
            <div class="card ark-card" @click="subscribe()">
              <div class="card-content">
                <span class="card-title activator ark-grey-text  no-margin">Subscribe<i class="material-icons medium ark-grey-text right">star</i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import TopBar from "@/components/TopBar";
import router from '../router'
import globals from '@/libs/globals'

export default {
  name: 'landing',
  components: {TopBar},
  data () {
    return {
    }
  },
  created() {
    let hasAccount = globals.accountManager.load();
    if(hasAccount) {
       let account = globals.accountManager.get();
       router.push(`meet/${account.company.toLowerCase()}`) 
    }
  },
  methods: {
   login() {
     router.push("Login");
   },
   subscribe() {
     router.push("Subscribe");
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #landing {
    height: 100%;

    display: flex;
  }

  #choice {
    margin: auto;
    width: 100%;
  }

  #choice > div {
    /*box-shadow: 0px 0px 5px #333333;*/
    margin: 10px;
  }

  #visionbb {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .top-title {
    background-color: white;
    padding: 0;
    margin: 0;
  }

  .ark-card {
    cursor: pointer;
  }
</style>

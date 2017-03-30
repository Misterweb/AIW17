<template>
  <div id="landing">
    <div class="row">
      <div id="choice" class="col s10 push-s1 ark-grey">
        <div class="row no-margin">
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

export default {
  name: 'landing',
  components: {TopBar},
  data () {
    return {
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
    top: 55px;
    position: relative;
  }

  #choice {
    /*box-shadow: 0px 0px 5px #333333;*/
    padding: 10px;
  }

  .ark-card {
    cursor: pointer;
  }
</style>

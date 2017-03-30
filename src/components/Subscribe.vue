<template>
  <div id="subscribe">
    <div class="row">
      <div id="login" class="col s8 push-s2 ark-grey">
          <div class="row no-margin">
            <div class="input-field col s12 left-align">
              <h5>Subscription</h5>
            </div>
          </div>
          <div class="row no-margin">
            <div class="input-field col s12">
              <input placeholder="E-mail"
                    id="email"
                    type="text"
                    class="validate" />
            </div>
          </div>
          <div class="row no-margin">
            <div class="input-field col s12">
              <input placeholder="Name"
                    id="name"
                    type="text"
                    class="validate" />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="submit"
                    type="button"
                    value="Connect"
                    class="btn ark-red"
                    @click="connect()" />
            </div>
          </div>
        </div>
    </div>
  </div>

</template>

<script>
import TopBar from "@/components/TopBar";
import Account from "@/libs/account"
import router from '../router'
import globals from '@/libs/globals.js'

export default {
  name: 'landing',
  components: {TopBar},
  data () {
    return {
    }
  },
  methods: {
   connect() {
     globals.accountManager.set(new Account());

     router.push("Meet");
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #subscribe {
    top: 50px;
    position: relative;
  }

  #login {
    /*box-shadow: 0px 0px 5px #333333;*/
    padding: 30px;
  }
</style>

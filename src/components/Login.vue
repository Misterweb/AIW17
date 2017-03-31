<template>
  <div id="subscribe">
    <div id="login" class="row">
      <div  class="col s8 push-s2 ark-grey">
          <div class="row no-margin">
            <div class="input-field col s12 left-align">
              <h5>Login</h5>
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
              <input placeholder="Password"
                    id="password"
                    type="password"
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
          <div class="row">
            <div class="col s12">
              <p v-if="error" class="ark-red-text">Login failed... Please check your credentials !</p>
              <span style="font-size: 12px;">You have no account ? <router-link to="/subscribe">Subscribe</router-link> !</span>
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
  name: 'login',
  data () {
    return {
        email: "",
        password: "",
        error: false
    }
  },
  methods: {
   connect() {
     let account = globals.accountManager.get();
     if(account) {
         if(account.email === this.email && account.password === this.password) {
            this.error = false;

            router.push(`meet/${account.company.toLowerCase()}`);
         } else {
             this.error = true;
         }
     } else {
         router.push('subscribe');
     }
     router.push("Meet");
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #subscribe {
    height: 100%;
    display: flex;
  }

  #login {
    /*box-shadow: 0px 0px 5px #333333;*/
    width: 100%;
    margin: auto;
  }

  #login > div {
    padding: 30px;
  }
</style>

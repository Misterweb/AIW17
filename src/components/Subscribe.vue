<template>
  <div id="subscribe">
    <div id="login" class="row">
      <form class="col s6 push-s3 ark-grey">
          <div class="row no-margin">
            <div class="input-field col s12 left-align">
              <h5>Subscription</h5>
            </div>
          </div>
          <div class="row no-margin">
            <div class="input-field col s12">
              <i class="material-icons prefix icon-margin">email</i>
              <input placeholder="E-mail"
                    id="email"
                    type="email"
                    class="validate"
                    v-model="email" />
            </div>
          </div>
          <div class="row no-margin">
            <div class="input-field col s12">
              <i class="material-icons prefix icon-margin">vpn_key</i>
              <input placeholder="Password"
                    id="password"
                    type="password"
                    class="validate"
                    v-model="password" />
            </div>
          </div>
          <div class="row no-margin">
            <div class="input-field col s6">
              <i class="material-icons prefix icon-margin">account_circle</i>
              <input placeholder="First Name"
                    id="firstname"
                    type="text"
                    class="validate"
                    v-model="firstname" />
            </div>
            <div class="input-field col s6">
              <input placeholder="Last Name"
                    id="lastname"
                    type="text"
                    class="validate"
                    v-model="lastname" />
            </div>
          </div>
          <div class="row no-margin">
            <div class="input-field col s12">
              <i class="material-icons prefix icon-margin">business</i>
              <input placeholder="Company"
                    id="company"
                    type="text"
                    class="validate"
                    v-model="company" />
            </div>
          </div>
          <div class="row no-margin valign-wrapper" style="padding-top: 10px;">
            <div class="file-field input-field col s12">
                <div class="left" style="margin-right: 10px;">
                    <img v-if="avatarImage" id="avatarImage" :src="avatarImage" class="circle">
                    <input id="avatarUrl" type="file" class="validate" @change="onAvatarChange" />
                </div>
                <div class="file-path-wrapper">
                    <input placeholder="Avatar" class="file-path validate" type="text">
                </div>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="submit"
                    type="button"
                    value="Register and connect"
                    class="btn-large ark-red"
                    @click="register()" />
            </div>
          </div>
        </form>
    </div>
  </div>

</template>

<script>
import TopBar from "@/components/TopBar";
import Account from "@/libs/account"
import router from '../router'
import globals from '@/libs/globals.js'

export default {
  name: 'subscribe',
  data () {
    return {
        email: "",
        firstname: "",
        lastname: "",
        company: "",
        avatarUrl: "",
        avatarImage: null,
        password: ""
    }
  },
  methods: {
   register() {
     globals.accountManager.set(new Account({
         firstname: this.firstname,
         lastname: this.lastname,
         email: this.email,
         company: this.company,
         avatarImage: this.avatarImage,
         avatarUrl: this.avatarUrl,
         endDate: new Date(),
         password: this.password,
         isConnected: true
     }));

     router.push(`meet/${this.company.toLowerCase()}`);
   },
   checkForm() {
    
   },
   onAvatarChange(e) {
    var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
   },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.avatarImage = e.target.result;
      };
      reader.readAsDataURL(file);
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

  #login>form {
      padding: 30px;
  }

  #avatarImage {
      height: 75px;
      width: 75px;
      margin-top: -25px;
  }

  .icon-margin {
      padding-right: 15px;
  }
  /* label color */

  .input-field label {
      color: #fff;
  }

  @each $type in ("text", "file", "password", "email") {
      /* label focus color */
      .input-field input[type=#{$type}]:focus+label {
          color: #fff;
      }
      /* label underline focus color */
      .input-field input[type=#{$type}]:focus {
          border-bottom: 1px solid #EEC216;
          box-shadow: 0 1px 0 0 #EEC216;
      }
      /* valid color */
      .input-field input[type=#{$type}].valid {
          border-bottom: 1px solid #9EB539;
          box-shadow: 0 1px 0 0 #9EB539;
      }
      /* invalid color */
      .input-field input[type=#{$type}].invalid {
          border-bottom: 1px solid #C3003B;
          box-shadow: 0 1px 0 0 #C3003B;
      }
  }
  /* icon prefix focus color */

  .input-field .prefix.active {
      color: #EEC216;
  }
</style>

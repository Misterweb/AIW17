<template>
    <div id="account" class="right" v-if="account">
        <div id="avatar" class="valign-wrapper">
            <a id="account-button" class="dropdown-button btn no-margin" v-dropdown:account-dd>
                <img v-if="account.avatarUrl || account.avatarImage" v-bind:src="account.avatarUrl || account.avatarImage"
                    id="avatarImage" class="circle left" :alt="account.name" />
                <span id="account-name">{{account.name}}</span>
            </a>
        </div>
       
        <ul id='account-dd' class='dropdown-content grey-text'>
            <li class="dd-block">[Account]</li>
            <li class="divider"></li>
            <li><a href="!#"><i class="material-icons left">perm_identity</i>My Profile</a></li>
            <li><a href="!#"><i class="material-icons left">settings</i>Settings</a></li>
            <li class="divider"></li>
            <li><a @click="disconnect()" class="ark-red-text"><i class="material-icons">settings_power</i>Disconnect</a></li>
        </ul>
    </div>
</template>

<script>

import globals from '@/libs/globals'
import router from '../router'

export default {
  name: 'account-badge',
  props: ['account'],
  data () {
    return {
    }
  },
  methods: {
      disconnect() {
        globals.accountManager.remove();
        router.push('/');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    #avatarImage {
        height: 35px;
        width: 35px;

        margin-top: 7px;
    }

    #account {
        width: 100%;
    }

   #account-button {
       background-color: transparent;
       box-shadow: 0 0;
       vertical-align: middle;

       border-radius: 0;
       border: 0;

       margin: 0;
       width: 100%;
       height: 50px;
       line-height: 50px;

       overflow-y: hidden;
       overflow-x: hidden;
   }

   #account-dd {
       margin-top: 50px;
       color: #56565A;
   }

   #account-dd a {
       color: #56565A;
   }

   #avatar {
       margin-right: 30px;
   }

   #avatar>img {
       height: 24px;
       width: 24px;
   }

   #account-name {
       margin-left: 20px;
   }

   #account-dd .dd-block {
        text-align: center;
   }

</style>

<template>
  <div>
    <div id="topbar" class="row no-margin">
      <div class="col s2 no-margin no-padding">
        <a id="brand" class="dropdown-button btn" v-dropdown:product-dd>
          <img id="logo" src="../assets/small-logo.png"><i class="material-icons right white-text">arrow_drop_down</i>
        </a>
      </div>
      <div class="col s8">
      </div>
      <div class="col s2 ark-grey">
        <account-badge v-bind:account="account"></account-badge>
      </div>
    </div>
    
    <ul id='product-dd' class='dropdown-content grey-text'>
      <li class="dd-block">[Upgrade]</li>
      <li class="divider"></li>
      <li><a href="https://www.arkadin.fr/services/video-conference/arkadinvision" target="blank"><i class="material-icons left ark-yellow-text">star</i>Vision Premium</a></li>
      <li class="divider"></li>
      <li class="dd-block">[Discover]</li>
      <li class="divider"></li>
      <li><a href="https://www.arkadin.fr/services/web-conference/arkadinanywhere" target="blank">Anywhere</a></li>
      <li><a href="https://www.arkadin.fr/services/audio-conference/arkadinanytime" target="blank">Anytime</a></li>
      <li class="divider"></li>
      <li><a href="https://www.arkadin.com" target="blank"><i class="material-icons">thumb_up</i>Visit us</a></li>
    </ul>
  </div>

</template>

<script>
import AccountBadge from "./AccountBadge";
import globals from '@/libs/globals';

export default {
  name: 'topbar',
  components: {AccountBadge},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      account: null,
      private: {
        subjectAccount: null
      }
    }
  },
  created() {
    this.private.subjectAccount = globals.accountManager.subscribe(this.accountChanged);
  },
  destroyed() {
    this.private.subjectAccount.dispose();
  },
  methods: {
    accountChanged(account) {
      this.account = account;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #nav {
    height: 50px;
    line-height: 50px;
  }

  #nav-wrapper > ul {
    margin: 0;
  }

  #nav-wrapper li {
    list-style: none;
    width: 150px;

    cursor: pointer;
  }

  #nav-wrapper li:hover {
    background-color: #666;
  }

  #nav-wrapper a {
    color: white;
  }


  #logo {
    vertical-align: middle;
    height: 30px;
    margin-top: -5px;
  }

  #brand {
    background-color: #C3003B;
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

  #topbar {
    width: 100%;
    margin: 10px;
    background-color: #333333;

    vertical-align: middle;

    line-height: 50px;
    height: 50px;

    top: 0px;
    left: 0px;
    position: absolute;

    z-index: 10000;
  }

  #product-dd {
      margin-top: 50px;
      color: #56565A;
  }

  #product-dd a {    
      color: #56565A;
  }

  .dd-block {
    font-size: 16px;
    display: block;
    line-height: 22px;
    
    padding-top: 14px;
    padding-bottom: 14px;

    cursor: default;

    text-align: center;
  }
</style>

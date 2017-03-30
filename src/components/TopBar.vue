<template>
  <div>
    <div id="topbar" class="row no-margin">
      <div id="brand" class="col s3">
        <a class="dropdown-button btn" href="#" v-dropdown:product-dd>
          <img id="logo" src="../../static/images/small-logo.png"><i class="material-icons right white-text">arrow_drop_down</i>
        </a>
      </div>
      <div class="col s6">Bar</div>
      <div class="col s3">Account</div>
    </div>
    
    <ul id='product-dd' class='dropdown-content'>
      <li><a href="#!">Anywhere</a></li>
      <li><a href="#!">Vision</a></li>
      <li class="divider"></li>
      <li><a href="#!">Visit us</a></li>
      <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
      <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'topbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #logo {
    vertical-align: middle;
    height: 30px;
    margin-top: -5px;
  }

  #brand {
    background-color: #C3003B;
    vertical-align: middle;
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
  }

  .no-margin {
    margin: 0 !important;
  }
</style>

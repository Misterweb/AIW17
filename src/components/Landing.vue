<template>
  <div id="landing" class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s6 push-s3">
          <input placeholder="E-mail"
                 id="email"
                 type="text"
                 class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6 push-s3">
          <input id="submit"
                 type="button"
                 value="Connect"
                 class="btn red"
                 @click="connect()" />
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
   connect() {
     router.push("Meet");
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #landing {
    top: 50px;
    position: relative;
  }
</style>

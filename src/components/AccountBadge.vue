<template>
  <div v-if="account">
    <img id="avatar" v-bind:src="account.avatarUrl" class="circle" :alt="account.name" /> {{account.name}}
  </div>

</template>

<script>
export default {
  name: 'account-badge',
  props: ['account'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #avatar {
      height: 24px;
      width: 24px;
  }
</style>

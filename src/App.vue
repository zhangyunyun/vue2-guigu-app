<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.Footer"></Footer>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Footer from './components/footer/Footer'
  export default{
    name:'App',
    components:{
      Footer
    },
    mounted() {
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUserInfo')
    },
    computed:{
      ...mapState(['address','userInfo'])
    }
  }
</script>
<style scoped lang="scss">
  #app{
    width:100%;
    height:100%;
    background:#f5f5f5;
  }
</style>

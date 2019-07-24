<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
  import helloworld from './components/Header'
export default {
  name: 'App',
  data(){
    return{
      num:0
    }
  },
  methods:{

  },
  components:{
    helloworld
  }
}
</script>

<style>
#app {

}
</style>

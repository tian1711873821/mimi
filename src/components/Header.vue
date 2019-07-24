<template>
    <header class="header">
      <symbol id="icon-cart" viewBox="0 0 38 32">
        <title>cart</title>
      </symbol>
      <div class="navbar">
        <div class="navbar-left-container">
          <a href="/">
            <img style="height:50px;padding-left: 40px" class="navbar-brand-logo" src="/static/ok-2.png"></a>
        </div>
        <div class="navbar-right-container" style="display: flex;">
          <div class="navbar-menu-container">
            <!--<a href="/" class="navbar-link">鎴戠殑璐︽埛</a>-->
            <span class="navbar-link"></span>
            <a href="javascript:void(0)" class="navbar-link">Login</a>
            <a href="javascript:void(0)" class="navbar-link">Logout</a>
            <div class="navbar-cart-container">
              <span class="navbar-cart-count"></span>
              <a class="navbar-link navbar-cart-link" href="/#/cart">
                <svg class="navbar-cart-logo" style="width: 50px;height:50px;">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
  import '../../src/assets/css/login.css'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  props:{

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

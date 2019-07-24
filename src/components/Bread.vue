<template>
  <div class="nav-breadcrumb-wrap">
    <div class="container">
      <nav class="nav-breadcrumb">
        <a href="/">Home</a>
        <slot><span>Goods</span></slot>
      </nav>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Bread"
    }
</script>

<style scoped>

</style>

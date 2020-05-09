<template>
  <div id="app">
<!--导航区域-->
    <LuffyHeader></LuffyHeader>
    <router-view/>
  </div>
</template>

<script>
  import LuffyHeader from "./components/common/LuffyHeader.vue";
export default {
  name: 'App',
  components:{
    LuffyHeader
  }
}
</script>

<style scoped>

</style>

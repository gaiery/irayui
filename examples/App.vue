<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo></Demo>
    <m-card
     imgSrc="images/test.png"
     summary="森林防火等级：重度危险"
    >
    <template v-slot:footer>
      <div class="footer">
        <div class="left">北风5~6级</div>
        <div class="right">23℃</div>
      </div>
    </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer{
  padding: 0 10px;
}
.left{
  float: left;
}
.right{
  float: right;
}
</style>

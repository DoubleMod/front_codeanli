<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld/>
    <QueryOrder/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import QueryOrder from './components/QueryOrder'

export default {
  name: 'App',
  components: {
    HelloWorld
    ,QueryOrder
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
</style>

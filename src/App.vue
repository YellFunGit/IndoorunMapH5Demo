<template>
  <div id="app">
    <div id="map" class="page"></div>
    <div id="floorList">
      <floorlistdiv v-bind:floorlist="floorList" v-show="show" v-bind:locatefloorid="locateFloorId" v-bind:selectfloorid="currentFloorId" v-on:onselect="onSelect"></floorlistdiv>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

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
}
</style>
